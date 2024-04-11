import {CommonTheme} from "../../theme/common.theme";
import React from "react";
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import LinearGradient from "react-native-linear-gradient";

export type ScreenHeaderProps = {
  heading: string;
  hideBackButton?: boolean;
  onBackButtonClicked?: () => void;
  backIconSource?: any;
};

const {height} = Dimensions.get("window");

const ScreenHeader = (props: ScreenHeaderProps) => {
  const {heading, hideBackButton, onBackButtonClicked, backIconSource} = props;

  return (
    <LinearGradient colors={["#E35205", "#F98E20"]} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
      <View style={styles.titleRowContainer}>
        {hideBackButton ? (
          <View style={styles.backButtonClickableArea} />
        ) : (
          <TouchableOpacity style={styles.backButtonClickableArea} onPress={onBackButtonClicked}>
            <Image source={backIconSource} style={styles.backIconStyle} resizeMode={"contain"} />
          </TouchableOpacity>
        )}
        <Text style={[styles.titleText, {color: CommonTheme.color.white}]}>{heading}</Text>

        <View style={styles.backButtonClickableArea} />
      </View>
    </LinearGradient>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  titleRowContainer: {
    width: "100%",
    paddingHorizontal: 30,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  backIconStyle: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    right: 10
  },
  backButtonClickableArea: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  iconStyle: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  titleText: {
    fontFamily: "SF-UI-Display-Regular",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 20,
    textAlign: "center",
    width: "65%"
  },
  rightIconContainer: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "flex-end",
    flexDirection: "row"
  },
  rightIconClickableArea: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  secondRightIconClickableArea: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    left: 12
  }
});
