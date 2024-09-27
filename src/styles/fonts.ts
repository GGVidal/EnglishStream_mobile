import { FontFamilyTypes, Typography } from './typesFonts';
import { colors } from './colors';

const Heading: Typography = {
  XS: {
    fontFamily: FontFamilyTypes.RobotMedium,
    fontWeight: '500',
    fontSize: 24, // Corresponds to 24
    color: colors.grays.darkest,
    lineHeight: 36,
  },
  SM: {
    fontFamily: FontFamilyTypes.RobotRegular,
    fontWeight: '400',
    fontSize: 32, // Corresponds to 32
    color: colors.grays.darkest,
    lineHeight: 48,
  },
  MD: {
    fontFamily: FontFamilyTypes.RobotMedium,
    fontWeight: '400',
    fontSize: 40, // Corresponds to 40
    color: colors.grays.darkest,
    lineHeight: 60,
  },
  LG: {
    fontFamily: FontFamilyTypes.RobotRegular,
    fontWeight: '400',
    fontSize: 44, // Corresponds to 44
    color: colors.grays.darkest,
    lineHeight: 66,
  },
  XL: {
    fontFamily: FontFamilyTypes.RobotRegular,
    fontWeight: '400',
    fontSize: 52, // Corresponds to 52
    color: colors.grays.darkest,
    lineHeight: 78,
  },
  XXL: {
    fontFamily: FontFamilyTypes.RobotBold,
    fontWeight: '600',
    fontSize: 76, // Corresponds to 72
    color: colors.grays.darkest,
    lineHeight: 108,
  },
  XXXL: {
    fontFamily: FontFamilyTypes.RobotBold,
    fontWeight: '600',
    fontSize: 88, // Corresponds to 88
    color: colors.grays.darkest,
    lineHeight: 132,
  },
};

const Subtitle: Typography = {
  SM: {
    fontFamily: FontFamilyTypes.RobotMedium,
    fontWeight: '500',
    fontSize: 12,
    color: colors.grays.light,
    lineHeight: 18,
  },
  MD: {
    fontFamily: FontFamilyTypes.RobotMedium,
    fontWeight: '500',
    fontSize: 14,
    color: colors.grays.light,
    lineHeight: 21,
  },
  LG: {
    fontFamily: FontFamilyTypes.RobotMedium,
    fontWeight: '500',
    fontSize: 16,
    color: colors.grays.light,
    lineHeight: 24,
  },
};

export const FontTypes = {
  Heading,
  Subtitle,
};
