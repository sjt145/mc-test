import React, {FC, Fragment} from "react";
import {SafeAreaView, StatusBar, StyleSheet} from "react-native";
import {StackScreenProps} from "@react-navigation/stack";
import {useTheme} from "styled-components/native";
import {DashboardRoutes} from "./dashboard.stack";
import {ScreenHeader} from "../../atomic/atoms";
import {CommonTheme} from "../../atomic/theme";
import LinearGradient from "react-native-linear-gradient";

type ScreenProps = StackScreenProps<DashboardRoutes, "CardControlScreen">;

const CardControlScreen: FC<ScreenProps> = ({navigation}) => {
  const theme = useTheme();

  return (
    <Fragment>
      <LinearGradient colors={["#E35205", "#F98E20"]} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
        <StatusBar barStyle={"light-content"} />
        <SafeAreaView style={{flex: 0}} />
      </LinearGradient>
      <SafeAreaView style={styles.container}>
        <ScreenHeader
          heading={"Card Controls"}
          hideBackButton={false}
          backIconSource={CommonTheme.images.backIcon}
          onBackButtonClicked={() => navigation.goBack()}
        />
      </SafeAreaView>
    </Fragment>
  );
};

export default CardControlScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
