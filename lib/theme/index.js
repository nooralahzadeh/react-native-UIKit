import { Platform } from 'react-native';
import ColorManager from './colors';

export const primary = ColorManager.get('Blue');
export const primaryDark = ColorManager.get('Blue', 700);
export const primaryDarker = ColorManager.get('Blue', 900);
export const primaryLight = ColorManager.get('Blue', 300);
export const primaryLighter = ColorManager.get('Blue', 100);
export const info = ColorManager.get('Light Blue');
export const infoDark = ColorManager.get('Light Blue', 700);
export const infoDarker = ColorManager.get('Light Blue', 900);
export const infoLight = ColorManager.get('Light Blue', 300);
export const infoLighter = ColorManager.get('Light Blue', 100);
export const success = ColorManager.get('Green');
export const successDark = ColorManager.get('Green', 700);
export const successDarker = ColorManager.get('Green', 900);
export const successLight = ColorManager.get('Green', 300);
export const successLighter = ColorManager.get('Green', 100);
export const warning = ColorManager.get('Amber');
export const warningDark = ColorManager.get('Amber', 700);
export const warningDarker = ColorManager.get('Amber', 900);
export const warningLight = ColorManager.get('Amber', 300);
export const warningLighter = ColorManager.get('Amber', 100);
export const danger = ColorManager.get('Red');
export const dangerDark = ColorManager.get('Red', 700);
export const dangerDarker = ColorManager.get('Red', 900);
export const dangerLight = ColorManager.get('Red', 300);
export const dangerLighter = ColorManager.get('Red', 100);
export const inverse = '#3B4752';
export const inverseDark = '#313B44';
export const inverseDarker = '#232B31';
export const inverseLight = '#626C75';
export const inverseLighter = '#D8DADC';
export const base = '#202328';
export const baseDark = '#191B1F';
export const baseLight = '#646972';
export const baseLighter = '#e2e2e2';
export const baseLightest = '#FAFAFA';
export const white = '#FFFFFF';
export const black = '#000000';

const defaultTheme = {
  name: 'default',
  primary,
  primaryDark,
  primaryDarker,
  primaryLight,
  primaryLighter,
  info,
  infoDark,
  infoDarker,
  infoLight,
  infoLighter,
  success,
  successDark,
  successDarker,
  successLight,
  successLighter,
  warning,
  warningDark,
  warningDarker,
  warningLight,
  warningLighter,
  danger,
  dangerDark,
  dangerDarker,
  dangerLight,
  dangerLighter,
  inverse,
  inverseDark,
  inverseDarker,
  inverseLight,
  inverseLighter,
  base,
  baseDark,
  baseLight,
  baseLighter,
  baseLightest,
  white,
  black,
  gutter: 10,
  font: Platform.OS === 'ios' ? 'Helvetica' : 'Roboto',
  fontSize: 14,
  materialColors: (color, variant = '500') => ColorManager.get(color, variant),
};

export const MergeTheme = (theme = {}) => Object.assign({}, defaultTheme, theme);

export default defaultTheme;