import { useState } from "react";
import { Input, Label } from "tamagui";

import { useAdaptiveColor } from "../hooks/useAdaptiveColor";
import { validateEmail } from "../lib/utils";

const FormInput = (props) => {
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

  const borderColor = (focus = false) => {
    if (props.isValid && props.value) {
      return "green";
    }
    if (!props.isValid && props.value) {
      return "red";
    }
    return focus ? "$borderColorFocus" : grayColor;
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
        borderColor={borderColor()}
        focusStyle={{ borderColor: borderColor(true) }}
        color={useAdaptiveColor("gray", 12)}
        backgroundColor={useAdaptiveColor("gray", 5)}
        placeholderTextColor={grayColor}
        placeholder={props.placeholder}
        // fixme: autocomplete pastes the text twice
        onChangeText={handleChange}
      />
    </>
  );
};

export default FormInput;
