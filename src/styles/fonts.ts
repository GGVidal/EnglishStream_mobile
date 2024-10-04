import { FontFamilyTypes, Typography } from './typesFonts';
import { colors } from './colors';

const Heading: Typography = {
  XS: {
    fontFamily: FontFamilyTypes.RobotMedium,
    fontWeight: '700',
    fontSize: 24,
    color: colors.grays.darkest,
  },
  SM: {
    fontFamily: FontFamilyTypes.RobotRegular,
    fontWeight: '400',
    fontSize: 32,
    color: colors.grays.darkest,
  },
  MD: {
    fontFamily: FontFamilyTypes.RobotMedium,
    fontWeight: '400',
    fontSize: 40,
    color: colors.grays.darkest,
  },
  LG: {
    fontFamily: FontFamilyTypes.RobotMedium,
    fontWeight: '400',
    fontSize: 44,
    color: colors.grays.darkest,
  },
  XL: {
    fontFamily: FontFamilyTypes.RobotRegular,
    fontWeight: '400',
    fontSize: 52,
    color: colors.grays.darkest,
  },
  XXL: {
    fontFamily: FontFamilyTypes.RobotBold,
    fontWeight: '600',
    fontSize: 76,
    color: colors.grays.darkest,
  },
  XXXL: {
    fontFamily: FontFamilyTypes.RobotBold,
    fontWeight: '600',
    fontSize: 88,
    color: colors.grays.darkest,
  },
};

const Subtitle: Typography = {
  SM: {
    fontFamily: FontFamilyTypes.RobotMedium,
    fontWeight: '500',
    fontSize: 12,
    color: colors.grays.dark,
  },
  MD: {
    fontFamily: FontFamilyTypes.RobotLight,
    fontWeight: '500',
    fontSize: 14,
    color: colors.grays.dark,
  },
  LG: {
    fontFamily: FontFamilyTypes.RobotRegular,
    fontWeight: '400',
    fontSize: 16,
    color: colors.grays.dark,
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

const Body: Typography = {
  SM: {
    fontFamily: FontFamilyTypes.RobotBold,
    fontWeight: '500',
    fontSize: 12,
    color: colors.grays.darkest,
  },
  MD: {
    fontFamily: FontFamilyTypes.RobotMedium,
    fontWeight: '600',
    fontSize: 14,
    color: colors.grays.darkest,
  },
  LG: {
    fontFamily: FontFamilyTypes.RobotMedium,
    fontWeight: '600',
    fontSize: 16,
    color: colors.grays.darkest,
  },
  XL: {
    fontFamily: FontFamilyTypes.RobotMedium,
    fontWeight: '600',
    fontSize: 18,
    color: colors.grays.darkest,
  },
  XXL: {
    fontFamily: FontFamilyTypes.RobotLight,
    fontWeight: '300',
    fontSize: 48,
    color: colors.grays.light,
  },
};
const Button: Typography = {
  SM: {
    fontFamily: FontFamilyTypes.RobotMedium,
    fontWeight: '600',
    fontSize: 12,
    color: colors.grays.dark,
  },
  MD: {
    fontFamily: FontFamilyTypes.RobotMedium,
    fontWeight: '600',
    fontSize: 14,
    color: colors.grays.dark,
  },
  LG: {
    fontFamily: FontFamilyTypes.RobotMedium,
    fontWeight: '600',
    fontSize: 16,
    color: colors.grays.dark,
  },
};
const Italic: Typography = {
  SM: {
    fontFamily: FontFamilyTypes.RobotSerif,
    fontWeight: '300',
    fontSize: 12,
    color: colors.grays.dark,
  },
  MD: {
    fontFamily: FontFamilyTypes.RobotSerif,
    fontWeight: '300',
    fontSize: 14,
    color: colors.grays.dark,
  },
  LG: {
    fontFamily: FontFamilyTypes.RobotMedium,
    fontWeight: '600',
    fontSize: 16,
    color: colors.neutral.lnk.dark,
  },
};

export const FontTypes = {
  Heading,
  Subtitle,
  Body,
  Button,
  Italic,
};
