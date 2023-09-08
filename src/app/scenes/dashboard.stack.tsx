import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import OnboardingDashboardScreen from './onboarding.dashboard.screen';

export type DashboardRoutes = {
  DashboardOnboarding: undefined;
};

const Stack = createStackNavigator<DashboardRoutes>();

export const DashboardStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="DashboardOnboarding"
      screenOptions={{
        headerTitle: 'Empty Stack',
      }}>
      <Stack.Screen
        name="DashboardOnboarding"
        component={OnboardingDashboardScreen}
        options={{
          headerTitle: 'Onboarding',
        }}
      />
    </Stack.Navigator>
  );
};
