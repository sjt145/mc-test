import {DefaultTheme} from 'styled-components/native';

enum BrandColors {
  Primary = '#FFDD00',
  Secondary = '#0F265C',
}

export const CommonTheme: DefaultTheme = {
  color: {
    primary: BrandColors.Primary,
    secondary: BrandColors.Secondary,
  },
};
