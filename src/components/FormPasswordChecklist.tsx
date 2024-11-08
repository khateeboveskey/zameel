import { useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import PasswordValidate from "react-native-password-validate-checklist";

import { debounce } from "@/utils";

export default function FormPasswordChecklist(props) {
  const colorScheme = useColorScheme();

  const [display, setDisplay] = useState<"none" | "flex">("none");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (props.value) {
      setDisplay("flex");
    } else {
      setDisplay("none");
    }

    if (isValid) {
      setDisplay("none");
    }
  }, [props.value, isValid]);

  const onPasswordValidateChange = (validationResult: boolean) => {
    setIsValid(validationResult);
    props.onPasswordValidateChange(validationResult);
  };

  return (
    <PasswordValidate
      containerStyle={{
        display: display,
        opacity: 0.7,
        ...props.style
      }}
      labelStyle={{
        color: colorScheme === "light" ? "black" : "white",
        fontFamily: "Alexandria",
        fontSize: 11
      }}
      newPassword={props.value}
      confirmPassword={props.passwordConfirm}
      validationRules={[
        {
          key: "MIN_LENGTH",
          ruleValue: 8,
          label: "يجب أن تتكون من 8 أحرف أو أكثر."
        },
        {
          key: "LOWERCASE_LETTER",
          label: "يجب أن تحتوي على حرفاً واحداً صغيراً على الأقل."
        },
        {
          key: "UPPERCASE_LETTER",
          label: "يجب أن تحتوي على حرفاً واحداً كبيراً على الأقل."
        },
        {
          key: "SPECIAL_CHARS",
          label: "يجب أن تحتوي على رمزاً واحداً على الأقل."
        },
        {
          key: "NUMERIC",
          label: "يجب أن تحتوي على رقماً واحداً على الأقل."
        },
        {
          key: "PASSWORDS_MATCH",
          label: "يجب أن تطابق تأكيد كلمة المرور."
        }
      ]}
      onPasswordValidateChange={debounce(onPasswordValidateChange)}
      iconSuccessSource={require("@/assets/check.png")}
      iconErrorSource={require("@/assets/x.png")}
    />
  );
}
