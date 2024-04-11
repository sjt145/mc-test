import React, {FC, Fragment, useCallback, useMemo, useRef, useState} from "react";
import {FlatList, Modal, SafeAreaView, StatusBar, StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import {StackScreenProps} from "@react-navigation/stack";
import {useTheme} from "styled-components/native";
import {DashboardRoutes} from "./dashboard.stack";
import {Button, Card, ScreenHeader} from "../../atomic/atoms";
import {CommonTheme} from "../../atomic/theme";
import BottomSheet from "@gorhom/bottom-sheet";
import LinearGradient from "react-native-linear-gradient";
import BottomModalView from "./component/bottomModal.component";
import Icon from "react-native-vector-icons/Entypo";

type ScreenProps = StackScreenProps<DashboardRoutes, "DashboardOnboarding">;

const OnboardingDashboardScreen: FC<ScreenProps> = ({navigation}) => {
  const theme = useTheme();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [clickedState, setClickedState] = useState(false);
  const [modalState, setModalState] = useState(false);
  const [continueModalState, setContinueModalState] = useState(false);

  const onCardButtonClick = () => {
    bottomSheetRef?.current?.snapToIndex(1);
  };

  const onConnectButtonClick = () => {
    setModalState(true);
    setClickedState(true);
  };

  const onContinueButtonClick = () => {
    setContinueModalState(true);
  };

  const onDashboardButtonClick = () => {
    setContinueModalState(false);
    navigation.navigate("CardDetailsScreen");
  };

  setTimeout(() => {
    setModalState(false);
    bottomSheetRef?.current?.close();
  }, 1000);

  return (
    <Fragment>
      <LinearGradient colors={["#E35205", "#F98E20"]} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
        <StatusBar barStyle={"light-content"} />
        <SafeAreaView style={{flex: 0}} />
      </LinearGradient>
      <SafeAreaView style={styles.container}>
        <ScreenHeader heading={"Onboarding"} hideBackButton={true} />
        <FlatList
          data={[0]}
          onEndReachedThreshold={0}
          showsVerticalScrollIndicator={false}
          renderItem={() => (
            <View style={styles.connectTextContainer}>
              <View style={styles.connectTextWrapper}>
                <Text style={[styles.connectText, {color: CommonTheme.color.greyBlack}]}>{"Connect service providers"}</Text>
                <Text style={[styles.subText, {color: CommonTheme.color.greyBlack}]}>
                  {"Select accounts you have that you would like to update with your new credit card"}
                </Text>
              </View>
              <TouchableWithoutFeedback>
                <View style={[styles.cardContainer, {marginTop: "15%"}]}>
                  <View style={styles.cardWrapper}>
                    <Card image={CommonTheme.images.netflix} />
                    <Card image={CommonTheme.images.spotify} clickedState={clickedState} onButtonClick={onCardButtonClick} />
                  </View>
                  <View style={styles.cardWrapper}>
                    <Card image={CommonTheme.images.uber_eats} />
                    <Card image={CommonTheme.images.starbucks} />
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </View>
          )}
        />
        <View style={styles.buttonView}>
          <Button
            buttonText={"Continue"}
            mainViewStyles={{bottom: 10}}
            gradientColors={clickedState ? ["#E35205", "#F98E20"] : undefined}
            clickedState={clickedState}
            disabled={clickedState ? false : true}
            onButtonClick={onContinueButtonClick}
          />
          <Button gradientColors={["#E35205", "#F98E20"]} buttonText={"Skip for now"} />
        </View>

        <BottomModalView bottomSheetRef={bottomSheetRef} onConnectButtonClick={onConnectButtonClick} />
      </SafeAreaView>
      <Modal animationType="slide" transparent={true} visible={modalState}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{fontFamily: "SF-UI-Display-Regular", fontSize: 16, textAlign: "center", color: "#fff"}}>Connected</Text>
          </View>
        </View>
      </Modal>
      <Modal animationType="fade" transparent={true} visible={continueModalState}>
        <View style={styles.continueCenteredModalView}>
          <View style={styles.continueModalView}>
            <Icon
              onPress={() => {
                setContinueModalState(false);
              }}
              name="cross"
              size={30}
              style={{position: "absolute", top: 10, right: 10}}
            />
            <View style={{flexDirection: "column", flex: 0.6}}>
              <Text style={{fontFamily: "SF-UI-Display-Regular", fontSize: 26, fontWeight: "600", textAlign: "center", color: "black"}}>{"All set!"}</Text>
              <Text style={{fontFamily: "SF-UI-Display-Regular", fontSize: 18, fontWeight: "600", textAlign: "center", color: "black", marginTop: "8%"}}>
                {"Enjoy your digital journey."}
              </Text>
            </View>
            <View style={{bottom: 20, position: "absolute", width: "100%"}}>
              <Button gradientColors={["#E35205", "#F98E20"]} buttonText={"View Dashboard"} clickedState={true} onButtonClick={onDashboardButtonClick} />
            </View>
          </View>
        </View>
      </Modal>
    </Fragment>
  );
};

export default OnboardingDashboardScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  connectTextContainer: {
    flex: 1,
    marginHorizontal: "5%",
    alignItems: "center"
  },
  connectTextWrapper: {
    flexDirection: "column",
    alignItems: "center",
    top: "7%"
  },
  connectText: {
    fontSize: 22,
    fontFamily: "SF-UI-Display-Regular",
    fontWeight: "600",
    textAlign: "center"
  },
  subText: {
    fontFamily: "SF-UI-Display-Regular",
    fontSize: 16,
    textAlign: "center",
    marginTop: "5%",
    lineHeight: 20
  },
  cardContainer: {
    flex: 0.6,
    flexDirection: "column",
    height: "50%"
  },
  cardWrapper: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between"
  },
  buttonView: {
    position: "absolute",
    bottom: "5%",
    width: "90%",
    alignSelf: "center"
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "#333333",
    justifyContent: "center",
    borderRadius: 9,
    width: 188,
    height: 188,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  continueCenteredModalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  continueModalView: {
    margin: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    borderRadius: 6,
    width: 327,
    height: 340,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5
  }
});
