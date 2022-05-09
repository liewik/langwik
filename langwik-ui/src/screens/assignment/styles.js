import { StyleSheet, Dimensions, Platform } from 'react-native';
import { getStatusBarHeight } from 'app-common';
import { Colors } from 'app-assets';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    zIndex: 1,
    paddingTop: Platform.OS === 'ios' ? 0 : getStatusBarHeight(),
  },
  header: {
    paddingTop: Platform.OS === 'ios' ? getStatusBarHeight() : 0,
    marginTop: 20,
    paddingHorizontal: 16,
  },
  header1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputSearch: {
    paddingHorizontal: 10,
    height: 300,
    borderWidth: 1,
    borderColor: '#9A9A9A',
    textAlignVertical: 'top',
    marginTop: 12,
    borderRadius: 6,
  },
  iconBack: {
    height: 14,
    width: 14,
    resizeMode: 'contain',
    tintColor: '#000',
  },
  imgBanner: {
    width: (276 / 375) * deviceWidth,
    height: (209 / 375) * deviceWidth,
    resizeMode: 'contain',
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: -1,
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    lineHeight: 24,
  },
  viewDuration: {
    alignItems: 'center',
    backgroundColor: '#E7F7FF',
    padding: 8,
    marginBottom: 16,
  },
  txtDuration: {
    fontFamily: 'Poppins',
    fontSize: 12,
    color: '#9A9A9A',
  },
  txtContent: {
    fontSize: 13,
    lineHeight: 19,
    marginTop: 20,
  },
  viewUpdateRole: {
    zIndex: 1000,
    flex: 1,
    position: 'absolute',
    // backgroundColor: 'rgba(0,0,0,0.5)',
    width: deviceWidth,
    height: deviceHeight,
  },
  viewModalFilter: {
    width: 127,
    height: 131,
    paddingHorizontal: 18,
    paddingVertical: 16,
    borderRadius: 6,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 10,
  },
  txtFilterItem: {
    marginBottom: 10,
    fontFamily: 'Poppins',
    fontSize: 10,
    lineHeight: 15,
    color: '#A9A9A9',
  },
  txtSearch: {
    fontFamily: 'Poppins',
    fontSize: 12,
    lineHeight: 18,
    color: '#939393',
  },
  txtItemFilter: {
    fontFamily: 'Poppins',
    fontSize: 12,
    lineHeight: 18,
    color: '#858585',
  },
  content: {
    marginTop: 23,
    paddingHorizontal: 16,
    flex: 1,
  },
  imageBanner: {
    width: deviceWidth,
    height: (250 / 375) * deviceWidth,
  },
  content2: {
    padding: 16,
  },
  icon: {
    width: 21,
    height: 21,
    resizeMode: 'contain',
    tintColor: '#FBC815',
  },
  icon1: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    tintColor: '#FBC815',
    marginLeft: 15,
  },
  txt3: {
    fontFamily: 'Poppins',
    fontSize: 12,
    marginTop: 10,
    lineHeight: 18,
    color: '#939393',
    fontStyle: 'italic',
  },
  price: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    lineHeight: 24,
    color: '#000',
    fontWeight: '500',
  },
  oldPrice: {
    fontFamily: 'Poppins',
    fontSize: 12,
    lineHeight: 18,
    color: '#B0B0B0',
    textDecorationLine: 'line-through',
    marginLeft: 13,
  },
  txtTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    lineHeight: 27,
    color: '#000',
    fontWeight: '500',
    marginTop: 17,
  },
  txtSubTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    lineHeight: 22,
    color: '#000',
    fontWeight: '500',
    marginLeft: 10,
  },
  txtOverview: {
    marginTop: 13,
    fontFamily: 'Poppins-ExtraLight',
    fontSize: 13,
    lineHeight: 20,
    color: '#000',
    fontWeight: '300',
  },
  subTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalHours: {
    fontFamily: 'Poppins-ExtraLight',
    fontSize: 10,
    color: '#8F8F8F',
    fontWeight: '300',
    marginLeft: 10,
  },
  txtItemLession: {
    fontFamily: 'Poppins-ExtraLight',
    fontSize: 12,
    lineHeight: 20,
    color: '#4E4E4E',
    fontWeight: '300',
    marginLeft: 10,
  },
  line: {
    width: deviceWidth - 32,
    marginBottom: 14,
    marginTop: 9,
    backgroundColor: '#F0F0F0',
    height: 1,
    alignSelf: 'center',
    flex: 1,
  },
  viewInstructor: {
    alignSelf: 'center',
    marginTop: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgAvatar: {
    width: 51,
    height: 51,
    borderRadius: 51 / 2,
  },
  iconIns: {
    width: 14,
    height: 14,
    resizeMode: 'contain',
    tintColor: '#D2D2D2',
    marginHorizontal: 6,
  },
  txtBio: {
    fontFamily: 'Poppins-ExtraLight',
    fontSize: 13,
    lineHeight: 18,
    color: '#4E4E4E',
    fontWeight: '300',
    marginTop: 15,
    textAlign: 'center',
  },
  viewReview: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtRating: {
    fontFamily: 'Poppins-Medium',
    fontSize: 36,
    lineHeight: 54,
    color: '#FBC815',
    fontWeight: '500',
    textAlign: 'center',
  },
  titleRating: {
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    lineHeight: 19,
    color: '#000000',
    fontWeight: '500',
    marginTop: 15,
  },
  bottom: {
    position: 'absolute',
    bottom: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  btnBuy: {
    backgroundColor: '#FBC815',
    marginRight: 10,
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  txtBuy: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    lineHeight: 21,
    color: '#000000',
    fontWeight: '500',
    flex: 1,
  },
  btnAddToCart: {
    backgroundColor: '#000000',
    marginLeft: 10,
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    flexDirection: 'row',
  },
  txtAddToCart: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    lineHeight: 21,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  iconCart: {
    width: 18,
    height: 18,
    marginRight: 8,
  },
  iconPreview: {
    fontSize: 16,
    color: '#25C717',
  },
  viewChooseFile: {
    borderRadius: 6,
    marginTop: 16,
    padding: 6,

    borderWidth: 1,
    borderColor: '#555',
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnChoose: {
    backgroundColor: '#E5E5E5',
    padding: 4,
    alignSelf: 'flex-start',
    borderRadius: 4,
  },
  txtFileSelect: {
    fontFamily: 'Poppins-Medium',
    marginLeft: 12,
    color: '#555',
  },
  viewBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  btnSend: {
    backgroundColor: '#FBC815',
    padding: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  txtBtn: {
    fontFamily: 'Poppins-Medium',
    borderColor: '#000',
    fontSize: 13,
  },
});