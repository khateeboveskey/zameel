import { useEffect, useState } from "react";
import { Input, Label } from "tamagui";

import { useAdaptiveColor } from "../hooks/useAdaptiveColor";

const FormInput = (props) => {
  const grayColor = useAdaptiveColor("gray", 8);
  const [borderColor, setBorderColor] = useState(grayColor);

  useEffect(() => {
    if (props.isValid !== undefined && props.value) {
      setBorderColor(props.isValid ? "green" : "red");
    } else {
      setBorderColor(grayColor);
    }
  }, [props.isValid, props.value]);

  const handleChange = (text) => {
    props.onChangeText(text);
  };

  return (
    <>
      <Label
        mt={"$3"}
        color={useAdaptiveColor("gray", 12)}
        htmlFor={props.id}>
        {props.label}
      </Label>
      <Input
        id={props.id}
        value={props.value}
        secureTextEntry={props.secureTextEntry}
        borderColor={borderColor}
        focusStyle={{ borderColor: props.value ? borderColor : "$borderColorFocus" }}
        color={useAdaptiveColor("gray", 12)}
        backgroundColor={useAdaptiveColor("gray", 5)}
        placeholderTextColor={grayColor}
        placeholder={props.placeholder}
        onChangeText={(text: string) => handleChange(text)}
      />
    </>
  );
};

export default FormInput;
