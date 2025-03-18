import { useEffect, useState } from "react";
import { Input, Label } from "tamagui";

import { useAdaptiveColor } from "@/hooks/useAdaptiveColor";
import type { FormInputProps } from "@/lib/types";

const FormInput = (props: FormInputProps) => {
  const grayColor = useAdaptiveColor("gray", 5);
  const [borderColor, setBorderColor] = useState(grayColor);

  useEffect(() => {
    if (props.isValid !== undefined && props.value && !props.noValidate) {
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
      {props.label && (
        <Label
          mt={"$3"}
          color={useAdaptiveColor("gray", 12)}
          htmlFor={props.id}>
          {props.label}
        </Label>
      )}
      <Input
        id={props.id}
        value={props.value}
        secureTextEntry={props.secureTextEntry}
        borderColor={borderColor}
        focusStyle={{
          borderColor: props.value && !props.noValidate ? borderColor : "$borderColorFocus"
        }}
        style={props.style}
        color={useAdaptiveColor("gray", 12)}
        backgroundColor={useAdaptiveColor("gray", 2)}
        placeholderTextColor={grayColor}
        placeholder={props.placeholder}
        onChangeText={(text: string) => handleChange(text)}
      />
    </>
  );
};

export default FormInput;
