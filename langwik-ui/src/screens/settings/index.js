import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  BackHandler,
  Alert,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from 'react-native';
import { withTranslation } from 'react-i18next';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';
import { Client, setToken } from 'app-api';
import { Images } from 'app-assets';
import IconF from 'react-native-vector-icons/Feather';

import ImagePicker from 'react-native-image-crop-picker';
import { showLoading } from '../../actions/common';
import { reset } from '../../actions/navigation';
import { saveUserToken, setUser } from '../../actions/user';
import styles from './styles';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGenaral: true,
      isPassword: false,
      avatar: undefined,

      description: props.user?.info?.description || '',
      firstName: props.user?.info?.first_name || '',
      lastName: props.user?.info?.last_name || '',
      nickName: props.user?.info?.nickname || '',

      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
      showCurrentPassword: true,
      showNewPassword: true,
      showConfirmPassword: true,
    };
  }

  async componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    const { navigation } = this.props;
    navigation.goBack(null);
    return true;
  };

  goBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  onClickGenaral = () => {
    this.setState({ isGenaral: true, isPassword: false });
  };

  onClickPassword = () => {
    this.setState({ isGenaral: false, isPassword: true });
  };

  onUpload = async () => {
    const { user } = this.props;

    ImagePicker.openPicker({
      width: user?.info?.avatar_size?.width || 250,
      height: user?.info?.avatar_size?.height || 250,
      cropping: true,
      multiple: false,
      mediaType: 'photo',
    }).then((image) => {
      this.setState({ avatar: image });
    });
  };

  onRemove = () => {
    this.setState({ avatar: null });
  };

  onLogout = () => {
    const { dispatch } = this.props;
    dispatch(reset(['LoginScreen']));
    dispatch(setUser(null));
    dispatch(saveUserToken(null));
    setToken(null);
  };

  submitGeneral = async () => {
    Keyboard.dismiss();

    const { dispatch, user } = this.props;

    const { avatar, description, firstName, lastName, nickName } = this.state;

    if (nickName.trim() === '') {
      Alert.alert('Please enter nickname');
      return;
    }

    const param = new FormData();
    param.append('first_name', firstName);
    param.append('last_name', lastName);
    param.append('nickname', nickName);
    param.append('description', description);

    if (avatar) {
      const file = {
        uri: avatar?.path,
        type: avatar?.mime,
        name: avatar?.path.split('/').pop(),
      };

      param.append('lp_avatar_file', file);
    }

    await dispatch(showLoading(true));

    const response = await Client.updateUser(user?.info?.id, param);

    await dispatch(showLoading(false));

    if (response?.code) {
      Alert.alert(response?.message || 'Error');
    } else {
      Alert.alert('Changes saved.');
      dispatch(setUser(response));
    }
  };

  submitPassword = async () => {
    Keyboard.dismiss();

    const { dispatch } = this.props;
    const { oldPassword, newPassword, confirmPassword } = this.state;

    if (oldPassword.trim() === '' || newPassword.trim() === '') {
      Alert.alert('Please enter current password and new password');
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert('Passwords do not match');
      return;
    }

    const params = {
      old_password: oldPassword,
      new_password: newPassword,
    };

    await dispatch(showLoading(true));

    const response = await Client.changePassword(params);

    await dispatch(showLoading(false));

    if (response.code === 'success') {
      Alert.alert(response.message);
      this.onLogout();
    } else {
      Alert.alert(response.message);
    }
  };

  toggleShowCurrentPassword = () => {
    const { showCurrentPassword } = this.state;
    this.setState({ showCurrentPassword: !showCurrentPassword });
  };

  toggleShowNewPassword = () => {
    const { showNewPassword } = this.state;
    this.setState({ showNewPassword: !showNewPassword });
  };

  toggleShowConfirmPassword = () => {
    const { showConfirmPassword } = this.state;
    this.setState({ showConfirmPassword: !showConfirmPassword });
  };

  render() {
    const {
      isGenaral,
      isPassword,
      avatar,
      description,
      firstName,
      lastName,
      nickName,
      showCurrentPassword,
      showNewPassword,
      showConfirmPassword,
    } = this.state;
    const { t, user } = this.props;
    return (
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="always"
      >
        <Image source={Images.bannerMyCourse} style={styles.imgBanner} />
        <View style={styles.header}>
          <View style={styles.header1}>
            <TouchableOpacity
              onPress={this.goBack}
              hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
            >
              <Image source={Images.iconBack} style={styles.iconBack} />
            </TouchableOpacity>
            <Text style={styles.title}>{t('settings.title')}</Text>
            <View
              style={{
                width: 40,
                height: 40,
              }}
            />
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.menu}>
            <TouchableOpacity
              style={styles.btnGenaral}
              onPress={this.onClickGenaral}
            >
              <Text
                style={[
                  styles.txtActive,
                  { color: isGenaral ? '#000' : '#D2D2D2' },
                ]}
              >
                {t('settings.general')}
              </Text>
              {isGenaral && <View style={styles.lineButton} />}
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onClickPassword}>
              <Text
                style={[
                  styles.txtActive,
                  { color: isPassword ? '#000' : '#D2D2D2' },
                ]}
              >
                {t('settings.password')}
              </Text>
              {isPassword && <View style={styles.lineButton} />}
            </TouchableOpacity>
          </View>
          {isGenaral && (
            <ScrollView
              contentContainerStyle={{ paddingBottom: 300 }}
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
            >
              <Image
                source={{
                  uri: avatar ? avatar.sourceURL : user?.info?.avatar_url,
                }}
                style={styles.viewAvatar}
              />
              <TouchableOpacity
                onPress={this.onUpload}
                style={{
                  backgroundColor: '#FBC815',
                  width: 99,
                  height: 35,
                  borderRadius: 8,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 16,
                  marginBottom: 30,
                }}
              >
                <Text style={styles.txtBtnUpload}>{t('settings.upload')}</Text>
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 14,
                }}
              >
                <Text style={styles.titleChild}>{t('settings.bio')}</Text>
                <IconF name="edit-2" color="#D2D2D2" size={17} />
              </View>
              <View style={styles.viewInputBio}>
                <TextInput
                  style={styles.textInputBio}
                  multiline
                  value={description}
                  onChangeText={(value) =>
                    this.setState({ description: value })
                  }
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 14,
                }}
              >
                <Text style={styles.titleChild}>{t('settings.firstName')}</Text>
                <IconF name="edit-2" color="#D2D2D2" size={17} />
              </View>
              <View style={styles.viewInput}>
                <TextInput
                  style={styles.txtInput}
                  numberOfLines={1}
                  value={firstName}
                  onChangeText={(value) => this.setState({ firstName: value })}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 14,
                }}
              >
                <Text style={styles.titleChild}>{t('settings.lastName')}</Text>
                <IconF name="edit-2" color="#D2D2D2" size={17} />
              </View>
              <View style={styles.viewInput}>
                <TextInput
                  style={styles.txtInput}
                  numberOfLines={1}
                  value={lastName}
                  onChangeText={(value) => this.setState({ lastName: value })}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 14,
                }}
              >
                <Text style={styles.titleChild}>{t('settings.nickName')}</Text>
                <IconF name="edit-2" color="#D2D2D2" size={17} />
              </View>
              <View style={styles.viewInput}>
                <TextInput
                  style={styles.txtInput}
                  numberOfLines={1}
                  value={nickName}
                  onChangeText={(value) => this.setState({ nickName: value })}
                />
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: '#FBC815',
                  height: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 8,
                  marginTop: 14,
                }}
                onPress={() => this.submitGeneral()}
              >
                <Text style={styles.titleChild}>{t('settings.save')}</Text>
              </TouchableOpacity>
            </ScrollView>
          )}
          {isPassword && (
            <ScrollView
              contentContainerStyle={{ paddingBottom: 300 }}
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
            >
              <View style={{ marginBottom: 14 }}>
                <Text style={styles.titleChild}>
                  {t('settings.currentPassword')}
                </Text>
              </View>
              <View style={styles.viewInput}>
                <TextInput
                  style={styles.txtInput}
                  numberOfLines={1}
                  secureTextEntry={showCurrentPassword}
                  onChangeText={(value) =>
                    this.setState({ oldPassword: value })
                  }
                />
                <TouchableOpacity
                  style={styles.btnViewPass}
                  onPress={() => this.toggleShowCurrentPassword()}
                >
                  {showCurrentPassword ? (
                    <IconF name="eye" color="#D2D2D2" size={18} />
                  ) : (
                    <IconF name="eye-off" color="#D2D2D2" size={18} />
                  )}
                </TouchableOpacity>
              </View>
              <View style={{ marginBottom: 14 }}>
                <Text style={styles.titleChild}>
                  {t('settings.newPassword')}
                </Text>
              </View>
              <View style={styles.viewInput}>
                <TextInput
                  style={styles.txtInput}
                  numberOfLines={1}
                  secureTextEntry={showNewPassword}
                  onChangeText={(value) =>
                    this.setState({ newPassword: value })
                  }
                />
                <TouchableOpacity
                  style={styles.btnViewPass}
                  onPress={() => this.toggleShowNewPassword()}
                >
                  {showNewPassword ? (
                    <IconF name="eye" color="#D2D2D2" size={18} />
                  ) : (
                    <IconF name="eye-off" color="#D2D2D2" size={18} />
                  )}
                </TouchableOpacity>
              </View>
              <View style={{ marginBottom: 14 }}>
                <Text style={styles.titleChild}>
                  {t('settings.confirmNewPassword')}
                </Text>
              </View>
              <View style={styles.viewInput}>
                <TextInput
                  style={styles.txtInput}
                  numberOfLines={1}
                  secureTextEntry={showConfirmPassword}
                  onChangeText={(value) =>
                    this.setState({ confirmPassword: value })
                  }
                />
                <TouchableOpacity
                  style={styles.btnViewPass}
                  onPress={() => this.toggleShowConfirmPassword()}
                >
                  {showConfirmPassword ? (
                    <IconF name="eye" color="#D2D2D2" size={18} />
                  ) : (
                    <IconF name="eye-off" color="#D2D2D2" size={18} />
                  )}
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: '#FBC815',
                  height: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 8,
                  marginTop: 14,
                }}
                onPress={() => this.submitPassword()}
              >
                <Text style={styles.titleChild}>{t('settings.save')}</Text>
              </TouchableOpacity>
            </ScrollView>
          )}
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user,
});
const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Settings));
