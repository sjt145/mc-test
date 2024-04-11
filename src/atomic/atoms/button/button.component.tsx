import React from "react";
import {StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle} from "react-native";
import LinearGradient from "react-native-linear-gradient";

interface ButtonProps {
  buttonText?: string;
  clickedState?: boolean;
  disabled?: boolean;
  mainViewStyles?: ViewStyle;
  buttonStyle?: ViewStyle;
  buttonTextStyle?: TextStyle;
  gradientColors?: string[];
  start?: {x: number; y: number};
  end?: {x: number; y: number};
  onButtonClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  buttonText,
  clickedState,
  disabled,
  mainViewStyles,
  buttonStyle,
  buttonTextStyle,
  gradientColors = null,
  start = {x: 0, y: 0},
  end = {x: 1, y: 1},
  onButtonClick
}) => {
  const gradientStyle = gradientColors ? {backgroundColor: "transparent"} : styles.gradientBackground;

  return (
    <TouchableOpacity onPress={onButtonClick} activeOpacity={0.8} disabled={disabled} style={mainViewStyles}>
      <View style={styles.container}>
        {gradientColors ? (
          <LinearGradient colors={gradientColors} start={start} end={end} style={[styles.gradientBackground, gradientStyle]}>
            <View style={[styles.button, buttonStyle, clickedState ? styles.clickedButton : disabled ? styles.disabledButton : styles.button]}>
              <Text style={[styles.buttonText, clickedState || disabled ? styles.clickedText : styles.buttonText]}>{buttonText}</Text>
            </View>
          </LinearGradient>
        ) : (
          <View style={[styles.button, buttonStyle, clickedState ? styles.clickedButton : disabled ? styles.disabledButton : styles.button]}>
            <Text style={[styles.buttonText, buttonTextStyle, clickedState || disabled ? styles.clickedText : styles.buttonText]}>{buttonText}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    overflow: "hidden"
  },
  gradientBackground: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "transparent",
    padding: 1
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 4,
    paddingVertical: 15,
    paddingHorizontal: 25,
    alignItems: "center"
  },
  buttonText: {
    color: "#E35205",
    fontFamily: "SF-UI-Display-Bold",
    fontWeight: "700",
    fontSize: 14
  },
  clickedButton: {
    backgroundColor: "transparent"
  },
  disabledButton: {
    backgroundColor: "#D6D6D6"
  },
  clickedText: {
    color: "#fff"
  }
});
