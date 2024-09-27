import { FontFamilyTypes, Typography } from './typesFonts';
import { colors } from './colors';

const Heading: Typography = {
  XS: {
    fontFamily: FontFamilyTypes.RobotMedium,
    fontWeight: '500',
    fontSize: 24, // Corresponds to 24
    color: colors.grays.darkest,
  },
  SM: {
    fontFamily: FontFamilyTypes.RobotRegular,
    fontWeight: '400',
    fontSize: 32, // Corresponds to 32
    color: colors.grays.darkest,
  },
  MD: {
    fontFamily: FontFamilyTypes.RobotMedium,
    fontWeight: '400',
    fontSize: 40, // Corresponds to 40
    color: colors.grays.darkest,
  },
  LG: {
    fontFamily: FontFamilyTypes.RobotMedium,
    fontWeight: '400',
    fontSize: 44, // Corresponds to 44
    color: colors.grays.darkest,
  },
  XL: {
    fontFamily: FontFamilyTypes.RobotRegular,
    fontWeight: '400',
    fontSize: 52, // Corresponds to 52
    color: colors.grays.darkest,
  },
  XXL: {
    fontFamily: FontFamilyTypes.RobotBold,
    fontWeight: '600',
    fontSize: 76, // Corresponds to 72
    color: colors.grays.darkest,
  },
  XXXL: {
    fontFamily: FontFamilyTypes.RobotBold,
    fontWeight: '600',
    fontSize: 88, // Corresponds to 88
    color: colors.grays.darkest,
  },
};

const Subtitle: Typography = {
  SM: {
    fontFamily: FontFamilyTypes.RobotMedium,
    fontWeight: '500',
    fontSize: 12,
    color: colors.grays.light,
  },
  MD: {
    fontFamily: FontFamilyTypes.RobotMedium,
    fontWeight: '500',
    fontSize: 14,
    color: colors.grays.light,
  },
  LG: {
    fontFamily: FontFamilyTypes.RobotMedium,
    fontWeight: '500',
    fontSize: 16,
    color: colors.grays.light,
  },
  XL: {
    fontFamily: FontFamilyTypes.RobotLight,
    fontWeight: '300',
    fontSize: 36,
    color: colors.grays.light,
  },
  XXL: {
    fontFamily: FontFamilyTypes.RobotLight,
    fontWeight: '300',
    fontSize: 48,
    color: colors.grays.light,
  },
};

export const FontTypes = {
  Heading,
  Subtitle,
};
