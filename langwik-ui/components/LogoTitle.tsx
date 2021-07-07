import React from 'react';
import {Image, Text} from 'react-native-elements';

export const LogoTitle = ({}: { tintColor?: string }) => {
    return <Image style={{ width: 50, height: 50, marginEnd: 10 }} source={require('../assets/images/logo_main.png')} />
}
