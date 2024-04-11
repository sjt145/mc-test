import React, {useMemo, useRef, useState} from "react";
import {StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import BottomSheet, {BottomSheetView} from "@gorhom/bottom-sheet";
import {Icon, Input, NativeBaseProvider, Pressable} from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {CommonTheme} from "../../../atomic/theme";
import Entypo from "react-native-vector-icons/Entypo";

export type BottomModalProps = {
  bottomSheetRef: any;
  onConnectButtonClick?: () => void;
};

const BottomModalView = (props: BottomModalProps) => {
  const {bottomSheetRef, onConnectButtonClick} = props;
  const snapPoints = useMemo(() => ["25%", "60%"], []);
  const [show, setShow] = useState(false);

  return (
    <BottomSheet index={-1} snapPoints={snapPoints} ref={bottomSheetRef} style={styles.modalContainer}>
      <BottomSheetView style={styles.contentContainer}>
        <Entypo onPress={() => {}} name="cross" size={30} style={{position: "absolute", top: 0, right: 10}} />
        <View style={styles.modalHeaderView}>
          <Image source={CommonTheme.images.spotify} style={styles.iconStyle} resizeMode={"contain"} />
          <Text style={styles.modalHeaderText}>{"Connect Spotify"}</Text>
        </View>
        <NativeBaseProvider>
          <View style={styles.inputView}>
            <Text style={styles.inputTextStyle}>{"User Name"}</Text>
            <Input variant="filled" placeholder="User Name" value={"user@gmail.com"} height={50} borderRadius={4} style={styles.inputValueTextStyle} />
          </View>
          <View style={[styles.inputView, {marginTop: "5%"}]}>
            <Text style={styles.inputTextStyle}>{"Password"}</Text>
            <Input
              variant="filled"
              type="password"
              value={"password"}
              height={50}
              borderRadius={4}
              style={styles.inputValueTextStyle}
              InputRightElement={
                <Pressable onPress={() => setShow(!show)}>
                  <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="3" color="muted.400" />
                </Pressable>
              }
              placeholder="Password"
            />
          </View>
        </NativeBaseProvider>
        <View style={{alignSelf: "center", flexDirection: "column", alignItems: "center", width: "80%"}}>
          <Text style={styles.modalInfoText}>{"By clicking the button below, you agree to the Terms and Conditions for connecting your Spotify account."}</Text>
          <TouchableOpacity onPress={onConnectButtonClick} style={styles.modalButtonView}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>{"Connect"}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
};

export default BottomModalView;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1
  },
  modalHeaderView: {
    alignSelf: "center",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "5%"
  },
  modalHeaderText: {
    fontSize: 22,
    fontFamily: "SF-UI-Display-Regular",
    fontWeight: "600",
    lineHeight: 28
  },
  modalInfoText: {
    fontSize: 12,
    fontFamily: "SF-UI-Display-Regular",
    fontWeight: "400",
    lineHeight: 16
  },
  modalContainer: {
    borderTopWidth: 10,
    borderTopColor: "#1ED760"
  },
  modalButtonView: {
    marginTop: "5%",
    marginBottom: "10%",
    width: "90%"
  },
  iconStyle: {
    width: 80,
    height: 80,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "5%"
  },
  inputView: {
    alignSelf: "center",
    width: "90%",
    flexDirection: "column",
    justifyContent: "space-between",
    height: 80
  },
  inputTextStyle: {
    fontFamily: "SF-UI-Display",
    fontWeight: "400",
    fontSize: 12,
    color: "#333333"
  },
  inputValueTextStyle: {
    fontFamily: "SF-UI-Display",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 20,
    color: "#333333"
  },
  button: {
    backgroundColor: "#333333",
    borderRadius: 4,
    paddingVertical: 15,
    paddingHorizontal: 25,
    alignItems: "center"
  },
  buttonText: {
    color: "#FFF",
    fontFamily: "SF-UI-Display-Bold",
    fontWeight: "700",
    fontSize: 14
  }
});
