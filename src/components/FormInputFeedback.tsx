import { useState } from "react";
import { Text } from "tamagui";

import { useDebouncedEffect } from "@/hooks/useDebouncedEffect";
import type { FormInputFeedbackProps } from "@/lib/types";
import { validate } from "@/utils";

export default function FormInputFeedback(props: FormInputFeedbackProps) {
  const [errors, setErrors] = useState([]);

  useDebouncedEffect(() => {
    if (props.value && props.validate) {
      const validationErrors = validate[props.validate](props.value);
      setErrors(validationErrors);
      sendValidationErrors(validationErrors);
    }
  }, [props.value]);

  const sendValidationErrors = (validationErrors) => {
    if (props.onValidationErrors) {
      props.onValidationErrors(validationErrors);
    }
  };

  if (!props.value || !props.validate || errors.length === 0) {
    return null;
  }

  return (
    <Text
      o={0.8}
      mt={"$3"}
      fontSize={"$1"}
      fontFamily={"$body"}
      color="red">
      {errors.map((error, index) => (
        <Text
          fontSize={"$2.5"}
          color="red"
          key={index}>
          {error.message}
        </Text>
      ))}
    </Text>
  );
}
