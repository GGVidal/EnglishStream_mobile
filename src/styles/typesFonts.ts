import { TextProps } from 'react-native';

interface IFontProps extends TextProps {
  fontFamily: FontFamilyTypes;
  fontSize: number;
  color?: string;
  fontWeight:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
}

export enum FontFamilyTypes {
  RobotRegular = 'Roboto-Regular',
  RobotLight = 'Roboto-Light',
  RobotMedium = 'Roboto-Medium',
  RobotBold = 'Roboto-Bold',
}

export interface Typography {
  XS?: IFontProps;
  SM?: IFontProps;
  MD?: IFontProps;
  LG?: IFontProps;
  XL?: IFontProps;
  XXL?: IFontProps;
  XXXL?: IFontProps;
}

export enum VariationTypes {
  Heading = 'Heading',
  Subtitle = 'Subtitle',
  //   Caption = 'Caption',
  Body = 'Body',
  Button = 'Button',
}
