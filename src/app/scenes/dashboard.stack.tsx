import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import OnboardingDashboardScreen from "./onboarding.dashboard.screen";
import CardDetailsScreen from "./card.details.screen";
import CardControlScreen from "./card.control.screen";

export type DashboardRoutes = {
  DashboardOnboarding: undefined;
  CardDetailsScreen: undefined;
  CardControlScreen: undefined;
};

const Stack = createStackNavigator<DashboardRoutes>();

export const DashboardStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="DashboardOnboarding"
      screenOptions={{
        headerShown: false,
        headerTitle: "Empty Stack"
      }}>
      <Stack.Screen
        name="DashboardOnboarding"
        component={OnboardingDashboardScreen}
        options={{
          headerTitle: "Onboarding"
        }}
      />
      <Stack.Screen
        name="CardDetailsScreen"
        component={CardDetailsScreen}
        options={{
          headerTitle: "Cards"
        }}
      />
      <Stack.Screen
        name="CardControlScreen"
        component={CardControlScreen}
        options={{
          headerTitle: "Card Control"
        }}
      />
    </Stack.Navigator>
  );
};
