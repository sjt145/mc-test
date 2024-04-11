import React from "react";
import InputField from "./input.component";

interface CustomInputFieldProps {
    text: string;
  name: string;
  value: any;
  onChangeText?: (name: string, value: any) => void;
}

const CustomInputField: React.FC<CustomInputFieldProps> = ({
  name,
  value,
  onChangeText,
  ...rest
}) => {
  const onChange = (newValue: any) => {
    if (onChangeText) {
      onChangeText(name, newValue);
    }
  };

  const inputProps = {
    name,
    value,
    ...rest,
    onChangeText: onChange,
  };

  return <InputField {...inputProps} />;
};

export default CustomInputField;
