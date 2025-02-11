import {StrokeProps} from 'react-native-svg';

interface Spacing {
  space_2: number;
  space_4: number;
  space_6: number;
  space_8: number;
  space_10: number;
  space_12: number;
  space_14: number;
  space_16: number;
  space_18: number;
  space_20: number;
  space_22: number;
  space_24: number;
  space_26: number;
  space_28: number;
  space_30: number;
  space_32: number;
  space_34: number;
  space_36: number;
  space_38: number;
}

export const SPACING: Spacing = {
  space_2: 2,
  space_4: 4,
  space_6: 6,
  space_8: 8,
  space_10: 10,
  space_12: 12,
  space_14: 14,
  space_16: 16,
  space_18: 18,
  space_20: 20,
  space_22: 22,
  space_24: 24,
  space_26: 26,
  space_28: 28,
  space_30: 30,
  space_32: 32,
  space_34: 34,
  space_36: 36,
  space_38: 38,
};

interface Colors {
  theRed: string;
  black: string;
  white: string;
  grayies: string;
}

export const COLORS: Colors = {
  theRed: '#DB3022',
  black: '#000',
  white: '#ffffff',
  grayies: '#f5f5f5',
};

interface FontFamily {
  Poppins_Black: string;
  Poppins_BlackItalic: string;
  Poppins_Bold: string;
  Poppins_BoldItalic: string;
  Poppins_ExtraBold: string;
  Poppins_ExtraBoldItalic: string;
  Poppins_ExtraLight: string;
  Poppins_ExtraLightItalic: string;
  Poppins_Italic: string;
  Poppins_Light: string;
  Poppins_LightItalic: string;
  Poppins_Medium: string;
  Poppins_MediumItalic: string;
  Poppins_Regular: string;
  Poppins_SemiBoldItalic: string;
  Poppins_Thin: string;
  Poppins_ThinItalic: string;
}

export const FONTFAMILY: FontFamily = {
  Poppins_Black: 'Poppins-Black',
  Poppins_BlackItalic: 'Poppins-BlackItalic',
  Poppins_Bold: 'Poppins-Bold',
  Poppins_BoldItalic: 'Poppins-BlackItalic',
  Poppins_ExtraBold: 'Poppins-ExtraBold',
  Poppins_ExtraBoldItalic: 'Poppins-ExtraBoldItalic',
  Poppins_ExtraLight: 'Poppins-ExtraLight',
  Poppins_ExtraLightItalic: 'Poppins-ExtraLightItalic',
  Poppins_Italic: 'Poppins-Italic',
  Poppins_Light: 'Poppins-Light',
  Poppins_LightItalic: 'Poppins-LightItalic',
  Poppins_Medium: 'Poppins-Medium',
  Poppins_MediumItalic: 'Poppins-MediumItalic',
  Poppins_Regular: 'Poppins-Regular',
  Poppins_SemiBoldItalic: 'Poppins-SemiBoldItalic',
  Poppins_Thin: 'Poppins-Thin',
  Poppins_ThinItalic: 'Poppins-ThinItalic',
};
interface FontSize {
  size_8: number;
  size_10: number;
  size_12: number;
  size_14: number;
  size_16: number;
  size_18: number;
  size_20: number;
  size_24: number;
  size_28: number;
  size_30: number;
}

export const FONTSIZE: FontSize = {
  size_8: 8,
  size_10: 10,
  size_12: 12,
  size_14: 14,
  size_16: 16,
  size_18: 18,
  size_20: 20,
  size_24: 24,
  size_28: 28,
  size_30: 30,
};

interface BorderRadius {
  radius_4: number;
  radius_8: number;
  radius_10: number;
  radius_15: number;
  radius_20: number;
  radius_25: number;
}

export const BORDERRADIUS: BorderRadius = {
  radius_4: 4,
  radius_8: 8,
  radius_10: 10,
  radius_15: 15,
  radius_20: 20,
  radius_25: 25,
};
