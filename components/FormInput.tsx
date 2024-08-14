import { Label, Input, Text } from "tamagui";
import { getAdaptiveColor } from "../lib/utils";
import { useState } from "react";
import { validateEmail } from "../lib/utils";
import { useColorScheme } from "react-native";

const FormInput = (props: any) => {
  const colorScheme = useColorScheme();
  const [error, setError] = useState("");

  function handleChange(e: string) {
    const trimmedText = e.trim();
    props.onChangeText(trimmedText);
    setError(validateEmail(trimmedText));
  }

  return (
    <>
      <Label
        mt={"$3"}
        color={getAdaptiveColor("gray", 12, colorScheme)}
        htmlFor={props.id}>
        {props.label}
      </Label>
      <Input
        id={props.id}
        value={props.value}
        secureTextEntry={props.secureTextEntry}
        borderColor={error ? "red" : getAdaptiveColor("gray", 8, colorScheme)} // here exactly
        focusStyle={{ borderColor: error ? "red" : "$borderColorFocus" }} // but this works!
        color={getAdaptiveColor("gray", 12, colorScheme)}
        backgroundColor={getAdaptiveColor("gray", 5, colorScheme)}
        placeholderTextColor={getAdaptiveColor("gray", 8, colorScheme)}
        placeholder={props.placeholder}
        // fixme: autocomplete pastes the text twice
        onChangeText={handleChange}
      />
      {error && (
        <Text
          o={0.8}
          mt={"$2"}
          fontSize={"$1"}
          fontFamily={"$body"}
          color="red">
          {error}
        </Text>
      )}
    </>
  );
};

export default FormInput;
