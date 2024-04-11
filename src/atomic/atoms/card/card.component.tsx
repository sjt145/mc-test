import {CommonTheme} from "../../../atomic/theme";
import React from "react";
import {StyleSheet, TouchableWithoutFeedback, Image, View} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Button from "../button/button.component";

export type CardProps = {
  image: any;
  clickedState?: boolean;
  onButtonClick?: () => void;
};

const Card = (props: CardProps) => {
  const {image, clickedState, onButtonClick} = props;

  return (
    <TouchableWithoutFeedback onPress={onButtonClick}>
      <View style={styles.mainContainer}>
        {clickedState && <LinearGradient colors={["#E35205", "#F98E20"]} start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} style={styles.gradientStyle} />}
        <View style={styles.card}>
          <View style={styles.header}>
            <Image source={image} style={styles.iconStyle} resizeMode={"contain"} />
          </View>
          <View style={styles.content}>
            <Button gradientColors={["#E35205", "#F98E20"]} clickedState={clickedState} buttonText={clickedState ? "Connected" : "Connect"} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default Card;

const styles = StyleSheet.create({
  mainContainer: {
    width: 180,
    height: 190,
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    margin: "2%"
  },
  gradientStyle: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 16,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 14,
    width: 175,
    height: 185,
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    marginBottom: 16,
    alignItems: "center"
  },
  title: {
    fontSize: 30,
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 24,
    color: "#333",
    marginTop: 10
  },
  content: {
    alignItems: "center"
  },
  text: {
    fontSize: 17,
    color: "#444444",
    textAlign: "center"
  },
  iconStyle: {
    width: 72,
    height: 72,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center"
  }
});
