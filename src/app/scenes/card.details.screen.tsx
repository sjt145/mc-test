import {StackScreenProps} from "@react-navigation/stack";
import {Button, ScreenHeader} from "../../atomic/atoms";
import React, {FC, Fragment, useCallback, useMemo, useRef, useState} from "react";
import {FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, View, ViewStyle, TouchableOpacity} from "react-native";
import {DashboardRoutes} from "./dashboard.stack";
import {useTheme} from "styled-components";
import LinearGradient from "react-native-linear-gradient";
import {CommonTheme} from "../../atomic/theme";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Fontisto from "react-native-vector-icons/Fontisto";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as Progress from "react-native-progress";
import ReactNativeBiometrics, {BiometryTypes} from "react-native-biometrics";

type ScreenProps = StackScreenProps<DashboardRoutes, "CardDetailsScreen">;

const CardDetailTextComponent: React.FC<{
  title: string;
  value: string;
}> = ({title, value}) => {
  return (
    <>
      <Text style={styles.cardNumberTextStyle}>{title}</Text>
      <Text style={styles.cardValueTextStyle}>{value}</Text>
    </>
  );
};

const ButtonControlComponent: React.FC<{
  onPress?: () => void;
  children: React.ReactNode;
  textValue: string;
  style?: ViewStyle;
}> = ({onPress, children, textValue, style}) => {
  return (
    <View style={styles.buttonControlsTouchableMainView}>
      <TouchableOpacity onPress={onPress} style={[style, styles.buttonControlTouchableStyle]}>
        {children}
      </TouchableOpacity>
      <Text style={styles.buttonControlsTextStyle}>{textValue}</Text>
    </View>
  );
};

const BalanceTextComponent: React.FC<{
  title: string;
  value: string;
  style?: ViewStyle;
}> = ({title, value, style}) => {
  return (
    <View style={[style, styles.balanceTextView]}>
      <Text style={styles.balanceTextStyle}>{title}</Text>
      <Text style={styles.balanceTextStyle}>{value}</Text>
    </View>
  );
};

const ListItemComponent: React.FC<{
  image: any;
  title: string;
  dateValue: string;
  itemValue: string;
  itemPoints: string;
}> = ({image, title, dateValue, itemValue, itemPoints}) => {
  return (
    <View style={{flexDirection: "column"}}>
      <View style={styles.recenttransactionsListView}>
        <Image source={image} style={styles.imageStyle} />
        <View style={styles.recentTransactionsItemsView}>
          <Text style={styles.itemTitleTextStyle}>{title}</Text>
          <Text style={styles.itemDateStyles}>{dateValue}</Text>
        </View>
        <View style={{flexDirection: "column"}}>
          <Text style={styles.itemTitleTextStyle}>{itemValue}</Text>
          <Text style={styles.itemValuePointsStyle}>{itemPoints}</Text>
        </View>
      </View>
    </View>
  );
};

const CardDetailsScreen: FC<ScreenProps> = ({navigation}) => {
  const [lockedClick, setLockedClicked] = useState(false);
  const [cardDetailClick, setCardDetailClicked] = useState(false);
  const theme = useTheme();

  const onLockedClicked = () => {
    const rnBiometrics = new ReactNativeBiometrics();
    rnBiometrics.isSensorAvailable().then(async resultObject => {
      const {available, biometryType} = resultObject;
      if (available && biometryType === BiometryTypes.FaceID) {
        const biometrics = new ReactNativeBiometrics({allowDeviceCredentials: true});
        const {success} = await biometrics.simplePrompt({
          promptMessage: "Confirmation"
        });
        if (success) {
          setLockedClicked(!lockedClick);
        }
      } else {
        console.log("Biometrics not supported");
      }
    });
  };

  const onCardDetailClicked = () => {
    const rnBiometrics = new ReactNativeBiometrics();
    rnBiometrics.isSensorAvailable().then(async resultObject => {
      const {available, biometryType} = resultObject;
      if (available && biometryType === BiometryTypes.FaceID) {
        const biometrics = new ReactNativeBiometrics({allowDeviceCredentials: true});
        const {success} = await biometrics.simplePrompt({
          promptMessage: "Confirmation"
        });
        if (success) {
          setCardDetailClicked(true)
        }
      } else {
        console.log("Biometrics not supported");
      }
    });
  }
  return (
    <Fragment>
      <LinearGradient colors={["#E35205", "#F98E20"]} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
        <StatusBar barStyle={"light-content"} />
        <SafeAreaView style={{flex: 0}} />
      </LinearGradient>
      <SafeAreaView style={styles.container}>
        <ScreenHeader heading={"Cards"} hideBackButton={cardDetailClick ? false : true} backIconSource={cardDetailClick ? CommonTheme.images.exitIcon : undefined} onBackButtonClicked={() => setCardDetailClicked(false)}/>
        <FlatList
          data={[0]}
          onEndReachedThreshold={0}
          showsVerticalScrollIndicator={false}
          renderItem={() => (
            <View style={{flex: 1}}>
              <View style={[styles.mainView, {height: cardDetailClick ? undefined : "8%"}]}>
                <Text style={styles.masterCardTextStyle}>{"Mastercard •••• 1234"}</Text>
                <View style={styles.cardMainView}>
                  <View style={[styles.cardSubView, lockedClick && !cardDetailClick && {opacity: 0.2}]}>
                    <LinearGradient colors={["#E35205", "#F98E20"]} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={styles.gradient}>
                      {lockedClick && !cardDetailClick ? (
                        <View style={{position: "absolute", top: 5}}>
                          <Fontisto name="locked" color={"#fff"} size={30} style={{alignSelf: "center"}} />
                          <Text style={{color: "#fff", marginTop: "2%", alignSelf: "center"}}>{"Your card has been temporarily locked"}</Text>
                        </View>
                      ) : null}
                      <MaterialIcons name="wifi" color="#fff" size={20} style={styles.materialIconStyle} />
                      <Text style={styles.cardTextStyle}>{"JOHN A. DOE"}</Text>
                      <Image source={CommonTheme.images.mc_icon} style={styles.cardImageStyle} />
                    </LinearGradient>
                  </View>
                  <View style={styles.gradientMainViewStyle}>
                    <LinearGradient colors={["#858585", "#FFFFFF"]} style={styles.greyGradient}></LinearGradient>
                  </View>
                </View>
                <View style={styles.walletViewStyle}>
                  <TouchableOpacity style={{marginTop: "5%"}}>
                    <Image source={CommonTheme.images.apple_wallet} style={styles.walletImageStyle} />
                  </TouchableOpacity>
                  <View style={styles.cardDetailMainView}>
                    <CardDetailTextComponent title={"Card Number"} value={"5426 1234 5678 1234"} />
                  </View>
                  <View style={{flexDirection: "row"}}>
                    <View style={styles.expirationDateView}>
                      <CardDetailTextComponent title={"Expiration Date"} value={"09/25"} />
                    </View>
                    <View style={styles.cvcViewStyle}>
                      <CardDetailTextComponent title={"CVC"} value={"242"} />
                    </View>
                  </View>
                  <View style={styles.gradeintButtonView}>
                    <Button gradientColors={["#E35205", "#F98E20"]} buttonText={"Copy Card Number"} />
                  </View>
                </View>
              </View>
              <View style={styles.cardDetailsMainView}>
                <View style={styles.buttonControlsSubView}>
                  <ButtonControlComponent onPress={() => navigation.navigate("CardControlScreen")} textValue={"Controls"}>
                    <AntDesign name="bars" color={"#F98E20"} size={30} style={{alignSelf: "center"}} />
                  </ButtonControlComponent>
                  <ButtonControlComponent
                    onPress={onLockedClicked}
                    textValue={lockedClick ? "Locked" : "Lock Card"}
                    style={{backgroundColor: lockedClick ? "#F98E20" : "#fff"}}>
                    <Fontisto name="locked" color={lockedClick ? "#fff" : "#F98E20"} size={30} style={{alignSelf: "center"}} />
                  </ButtonControlComponent>
                  <ButtonControlComponent onPress={onCardDetailClicked} textValue={"Card details"}>
                    <MaterialCommunityIcons name="card-account-details-outline" color={"#F98E20"} size={30} style={{alignSelf: "center"}} />
                  </ButtonControlComponent>
                </View>

                <View style={styles.balanceMainView}>
                  <Text style={styles.balanceValueTextStyle}>{"$1,000.00"}</Text>
                  <Text style={styles.balanceTitteTextStyle}>{"Current Balance"}</Text>
                  <Progress.Bar progress={0.2} width={350} color="#7A9A02" borderWidth={0} style={{marginTop: "5%", backgroundColor: "#EBEBEB"}} />
                  <BalanceTextComponent title="Available Credit:" value="$9,000.00" style={{marginTop: "5%"}} />
                  <BalanceTextComponent title="Total Credit Limit:" value="$10,000.00" style={{marginTop: "2%"}} />
                </View>

                <View style={styles.paymentDetailsView}>
                  <Text style={styles.paymentTextStyle}>{"Payment due in 5 Days"}</Text>
                  <View style={styles.statementsMainView}>
                    <View style={styles.statementBalanceView}>
                      <Text style={styles.statementTextTitleStyle}>{"Statement Balance"}</Text>
                      <Text style={styles.statementTextValueStyle}>{"$600.00"}</Text>
                    </View>
                    <View style={styles.paymentDetailView}>
                      <Text style={styles.statementTextTitleStyle}>{"Minimum Payment"}</Text>
                      <Text style={styles.statementTextValueStyle}>{"$60.00"}</Text>
                    </View>
                  </View>
                  <View style={styles.gradeintButtonView}>
                    <Button gradientColors={["#E35205", "#F98E20"]} buttonText={"Make a payment"} />
                  </View>
                </View>

                <View style={styles.recentTransactionMainView}>
                  <View style={styles.recentTransactionViewStyle}>
                    <Text style={styles.transactionsTextStyle}>{"Recent transactions"}</Text>
                    <View style={styles.recentViewStyle}>
                      <Text style={styles.transactionsTextStyle}>{"View All"}</Text>
                      <MaterialIcons name="keyboard-arrow-right" size={30} color={"black"} />
                    </View>
                  </View>
                  <ListItemComponent image={CommonTheme.images.starbucks} title="Amazon" dateValue="2021-10-12 08:23AM" itemValue="$5.43" itemPoints="+5 pts" />
                  <ListItemComponent
                    image={CommonTheme.images.amazon}
                    title="Starbucks"
                    dateValue="2021-10-12 08:23AM"
                    itemValue="$125.30"
                    itemPoints="+125 pts"
                  />
                  <ListItemComponent
                    image={CommonTheme.images.dunkin_donut}
                    title="Dunkin Donuts"
                    dateValue="2021-10-12 08:23AM"
                    itemValue="$10.84"
                    itemPoints="+10 pts"
                  />
                </View>
              </View>
            </View>
          )}
        />
      </SafeAreaView>
    </Fragment>
  );
};

export default CardDetailsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  gradient: {
    height: 160,
    width: "80%",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  greyGradient: {
    height: 160,
    width: 35,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  mainView: {
    alignItems: "center",
    marginTop: "5%",
    flexDirection: "column"
  },
  masterCardTextStyle: {
    fontFamily: "SF-UI-Display-Regular",
    fontSize: 16,
    lineHeight: 20
  },
  cardMainView: {
    flexDirection: "row",
    flex: 1,
    width: "100%",
    justifyContent: "space-between"
  },
  cardSubView: {
    borderRadius: 5,
    height: 160,
    width: "80%",
    marginTop: "5%",
    alignItems: "flex-end",
    left: 15,
    shadowColor: "#000",
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5
  },
  materialIconStyle: {
    width: 16,
    height: 20.23,
    position: "absolute",
    top: 10,
    right: 15,
    transform: [{rotate: "90deg"}]
  },
  cardTextStyle: {
    position: "absolute",
    bottom: 30,
    left: 20,
    fontFamily: "SF-UI-Display-Regular",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 16,
    color: "#fff"
  },
  cardImageStyle: {
    width: 51.47,
    height: 31.62,
    position: "absolute",
    bottom: 20,
    right: 20,
    tintColor: "#fff"
  },
  gradientMainViewStyle: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    height: 160,
    width: 35,
    marginTop: "5%",
    alignItems: "flex-end",
    shadowColor: "#000",
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5
  },
  walletViewStyle: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    borderBottomWidth: 1,
    paddingBottom: "2%",
    borderBottomColor: "#ADADAD"
  },
  walletImageStyle: {
    width: 136,
    height: 42
  },
  cardDetailMainView: {
    marginTop: "8%",
    flexDirection: "column",
    alignItems: "center",
    width: "90%",
    borderBottomWidth: 1,
    paddingBottom: "2%",
    borderBottomColor: "#ADADAD"
  },
  cardNumberTextStyle: {
    fontFamily: "SF-UI-Display-Regular",
    fontSize: 16,
    lineHeight: 20,
    color: "#E35205"
  },
  cardValueTextStyle: {
    fontFamily: "SF-UI-Display-Regular",
    fontWeight: "600",
    fontSize: 22,
    lineHeight: 28,
    color: "#333333"
  },
  expirationDateView: {
    flexDirection: "column",
    alignItems: "center",
    borderRightWidth: 1,
    borderRightColor: "#ADADAD",
    paddingHorizontal: "5%",
    marginTop: "5%"
  },
  cvcViewStyle: {
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: "5%",
    marginTop: "5%"
  },
  gradeintButtonView: {
    width: "85%",
    marginTop: "5%",
    marginBottom: "5%"
  },
  cardDetailsMainView: {
    flex: 1,
    zIndex: 5,
    borderTopWidth: 0.5,
    borderTopColor: "#ADADAD",
    backgroundColor: "#fafafa"
  },
  buttonControlsSubView: {
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingHorizontal: "10%",
    paddingVertical: "5%",
    justifyContent: "space-between"
  },
  buttonControlTouchableStyle: {
    borderColor: "#F98E20",
    borderRadius: 100,
    borderWidth: 2,
    width: 52,
    height: 52,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonControlsTouchableMainView: {
    flexDirection: "column",
    alignItems: "center"
  },
  buttonControlsTextStyle: {
    top: 2,
    fontFamily: "SF-UI-Display-Regular",
    fontSize: 14,
    lineHeight: 18
  },
  balanceMainView: {
    backgroundColor: "#fff",
    marginTop: "3%",
    alignItems: "center",
    flexDirection: "column",
    paddingVertical: "5%"
  },
  balanceValueTextStyle: {
    fontFamily: "SF-UI-Display-Regular",
    fontWeight: "600",
    fontSize: 30,
    lineHeight: 36
  },
  balanceTitteTextStyle: {
    fontFamily: "SF-UI-Display-Regular",
    fontSize: 14,
    lineHeight: 18,
    marginTop: "2%"
  },
  balanceTextView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%"
  },
  balanceTextStyle: {
    fontFamily: "SF-UI-Display-Regular",
    fontSize: 14,
    lineHeight: 18
  },
  paymentDetailsView: {
    backgroundColor: "#fff",
    marginTop: "3%",
    paddingVertical: "5%",
    alignItems: "center"
  },
  paymentTextStyle: {
    color: "#E35205",
    fontFamily: "SF-UI-Display-Regular",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 24
  },
  statementsMainView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: "5%"
  },
  statementBalanceView: {
    flexDirection: "column",
    borderRightWidth: 1,
    borderRightColor: "#EBEBEB",
    paddingRight: "15%",
    alignItems: "center"
  },
  statementTextTitleStyle: {
    fontFamily: "SF-UI-Display-Regular",
    fontSize: 14,
    lineHeight: 18
  },
  statementTextValueStyle: {
    fontFamily: "SF-UI-Display-Regular",
    fontWeight: "600",
    fontSize: 22,
    lineHeight: 28,
    marginTop: "2%"
  },
  paymentDetailView: {
    flexDirection: "column",
    alignItems: "center"
  },
  recentTransactionViewStyle: {
    paddingVertical: "3%",
    backgroundColor: "#EBEBEB",
    flexDirection: "row",
    paddingHorizontal: "3%",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center"
  },
  recentViewStyle: {
    flexDirection: "row",
    width: "20%",
    justifyContent: "space-between",
    alignItems: "center"
  },
  transactionsTextStyle: {
    fontFamily: "SF-UI-Display-Regular",
    fontSize: 14,
    lineHeight: 18
  },
  recentTransactionMainView: {
    backgroundColor: "#fff",
    marginTop: "3%"
  },
  recenttransactionsListView: {
    flexDirection: "row",
    paddingHorizontal: "3%",
    paddingVertical: "5%",
    borderBottomWidth: 1,
    borderBottomColor: "#EBEBEB",
    justifyContent: "space-between",
    alignItems: "center"
  },
  recentTransactionsItemsView: {
    flexDirection: "column",
    alignItems: "flex-start",
    width: "70%"
  },
  imageStyle: {
    height: 40,
    width: 40,
    borderRadius: 100
  },
  itemTitleTextStyle: {
    fontFamily: "SF-UI-Display-Regular",
    fontSize: 16,
    lineHeight: 20,
    color: "#333333"
  },
  itemDateStyles: {
    fontFamily: "SF-UI-Display-Regular",
    fontSize: 14,
    lineHeight: 18,
    color: "#ADADAD",
    marginTop: "1.5%"
  },
  itemValuePointsStyle: {
    fontFamily: "SF-UI-Display-Regular",
    fontSize: 14,
    lineHeight: 18,
    color: "#618DFF",
    marginTop: "1.5%"
  }
});
