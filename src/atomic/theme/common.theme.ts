import Images from '../../assets';
import {DefaultTheme} from 'styled-components/native';

enum BrandColors {
  Primary = '#FFDD00',
  Secondary = '#0F265C',
  White = '#FFFFFF',
  GreyBlack = "#333333"
}

export const CommonTheme: DefaultTheme = {
  color: {
    primary: BrandColors.Primary,
    secondary: BrandColors.Secondary,
    white: BrandColors.White,
    greyBlack: BrandColors.GreyBlack
  },
  images: {
    exitIcon: Images.exit_icon,
    backIcon: Images.back_icon,
    netflix: Images.netflix,
    spotify: Images.spotify,
    uber_eats: Images.uber_eats,
    starbucks: Images.starbucks,
    mc_icon: Images.mc_icon,
    apple_wallet: Images.apple_wallet,
    amazon: Images.amazon,
    dunkin_donut: Images.dunkin_donut
  }
};
