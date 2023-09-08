import React, {FC, Fragment} from 'react';
import {StatusBar, Text, View} from 'react-native';

import {StackScreenProps} from '@react-navigation/stack';
import {useTheme} from 'styled-components/native';
import {DashboardRoutes} from './dashboard.stack';

type ScreenProps = StackScreenProps<DashboardRoutes, 'DashboardOnboarding'>;

const OnboardingDashboardScreen: FC<ScreenProps> = ({navigation}) => {
  const theme = useTheme();

  return (
    <Fragment>
      <StatusBar
        animated={true}
        translucent={true}
        showHideTransition="fade"
        barStyle="dark-content"
        backgroundColor="transparent"
      />
    </Fragment>
  );
};

export default OnboardingDashboardScreen;
