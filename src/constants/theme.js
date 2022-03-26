import {DefaultTheme, DarkTheme} from '@react-navigation/native';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const lightTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: '#b32c44',
    secondary: '#050707',
    secondarySec: '#9fa0a4',
    primarySec: '#eb1926',
    text: '#19303E',
    border: '#bababa',
  },
};
export const darkTheme = {
  dark: true,
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#b32c44',
    secondary: '#050707',
    secondarySec: '#9fa0a4',
    primarySec: '#eb1926',
    text: '#FEFEFE',
    card: '#282828',
    background: '#121212',
    border: '#353535',
  },
};

export const COLORS = {
  primary: '#b32c44',
  secondary: '#050707',
  brickRed: '#b32c44',
  woodSmoke: '#050707',
  bonJour: '#e0dbdd',
  stiletto: '#9a2a3c',
  doveGray: '#676767',
  oldRose: '#bd7a85',
  canCan: '#d294a5',
  cinnabar: '#ec4535',
  terracotta: '#e46d59',
  white: '#FEFEFE',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  navTitle: 25,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};
export const fontFamily = {
  primary: 'Muli',
  fontLight: 'Muli-Light',
  fontBold: 'Muli-Bold',
  fontItalic: 'Muli-Italic',
};

export const FONTS = {
  navTitle: {fontFamily: 'Muli-ExtraLight', fontSize: SIZES.navTitle},
  largeTitleBold: {fontFamily: 'Muli-SemiBold', fontSize: SIZES.h2},
  h1: {fontFamily: 'Muli-SemiBold', fontSize: SIZES.h1},
  h2: {fontFamily: 'Muli-Bold', fontSize: SIZES.h2},
  h5: {fontFamily: 'Muli-SemiBold', fontSize: SIZES.h5},
  h3: {fontFamily: 'Muli-SemiBold', fontSize: SIZES.h3},
  h4: {fontFamily: 'Muli-SemiBold', fontSize: SIZES.h4},
  body1: {
    fontFamily: 'Muli',
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: 'Muli',
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: 'Muli',
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: 'Muli',
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
  body5: {
    fontFamily: 'Muli',
    fontSize: SIZES.body5,
    lineHeight: 22,
  },
};
