import React, {forwardRef} from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Input, NativeBaseProvider} from "native-base";
import {CommonTheme} from "../../../atomic/theme";

export type InputFieldProps = {
  onPress?: () => void;
  itemStyle?: any;
  textStyle?: any;
  text?: string;
  editable?: boolean;
  pointerEvents?: any;
  disabled?: boolean;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  onSubmitEditing?: () => void;
  returnKeyType?: any;
  placeholder?: string;
  placeholderTextColor?: string;
  multiline?: boolean;
  numberOfLines?: number;
  blurOnSubmit?: boolean;
  value?: string;
  keyboardType?: any;
  autoCapitalize?: any;
  inputStyle?: any;
  showIcon?: boolean;
  iconSource?: any;
  onPasswordClick?: () => void;
  showPassword?: boolean;
  multipleIcon?: boolean;
  iconSource1?: any;
  onIcon1Click?: () => void;
  iconSource2?: any;
  onIcon2Click?: () => void;
};

const InputField = forwardRef<typeof Input, InputFieldProps>((props, ref) => {
  return (
    <View style={styles.container}>
      {props.text && (
        <Text
          style={[
            styles.label_wrapper,
            {
              ...props.textStyle
            }
          ]}>
          {props.text}
        </Text>
      )}
      <NativeBaseProvider>
        <View style={styles.row}>
        <Input variant="filled" placeholder="Filled" />
          {/* <Input
            onTouchStart={props.onPress}
            editable={props.editable}
            pointerEvents={props.pointerEvents}
            onChangeText={props.onChangeText}
            secureTextEntry={props.secureTextEntry}
            onSubmitEditing={props.onSubmitEditing}
            returnKeyType={props.returnKeyType}
            placeholder={props.placeholder}
            placeholderTextColor={props.placeholderTextColor}
            multiline={props.multiline}
            numberOfLines={props.numberOfLines}
            blurOnSubmit={props.blurOnSubmit}
            value={props.value}
            keyboardType={props.keyboardType}
            autoCapitalize={props.autoCapitalize}
            style={{
              color: "red",
              ...styles.inputText,
              ...props.inputStyle
            }}
            selectionColor={"white"}
          /> */}
          {props.showIcon && !props.iconSource ? (
            <TouchableOpacity
              onPress={() => props.onPasswordClick?.()}
              style={{
                alignSelf: "center"
              }}>
              {props.showPassword === false ? (
                <Image source={CommonTheme.images.netflix} resizeMode="contain" style={styles.icon} />
              ) : (
                <Image source={CommonTheme.images.netflix} resizeMode="contain" style={styles.icon} />
              )}
            </TouchableOpacity>
          ) : null}
        </View>
      </NativeBaseProvider>
    </View>
  );
});

export default InputField;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignSelf: "center"
  },
  subcontainer: {
    borderBottomWidth: 1,
    borderStyle: "solid",
    alignSelf: "center",
    maxHeight: 0
  },
  label_wrapper: {
    fontFamily: "Roboto-Regular",
    fontSize: 12,
    textAlign: "left",
    bottom: -10
  },
  row: {
    flexDirection: "row"
  },
  inputText: {
    fontFamily: "Roboto-Regular",
    fontSize: 15,
    left: -3
  },
  item_wrapper: {
    marginTop: 10
  },
  icon: {
    height: 30,
    width: 30
  }
});
