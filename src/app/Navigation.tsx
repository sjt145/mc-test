import React, {ReactElement} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {DashboardStack} from './scenes/dashboard.stack';

export type RootRoutes = {
  Dashboard: undefined;
};

const Stack = createStackNavigator<RootRoutes>();

function Navigation(): ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={() => ({
          headerTitle: 'Root Header Title',
        })}
        initialRouteName="Dashboard">
        <Stack.Screen
          name="Dashboard"
          component={DashboardStack}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
