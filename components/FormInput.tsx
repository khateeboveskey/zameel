import { Label, Input, Text } from "tamagui";
import { useState } from "react";
import { validateEmail } from "../lib/utils";
import { useAdaptiveColor } from "../hooks/useAdaptiveColor";

const FormInput = (props: any) => {
  const [error, setError] = useState("");

  /**
   * don't try to inline this function, it will break the component!
   * see https://react.dev/warnings/invalid-hook-call-warning
   */
  const grayColor = useAdaptiveColor("gray", 8);

  function handleChange(e: string) {
    const trimmedText = e.trim();
    props.onChangeText(trimmedText);
    setError(validateEmail(trimmedText));
  }

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
        borderColor={error ? "red" : grayColor}
        focusStyle={{ borderColor: error ? "red" : "$borderColorFocus" }}
        color={useAdaptiveColor("gray", 12)}
        backgroundColor={useAdaptiveColor("gray", 5)}
        placeholderTextColor={grayColor}
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
