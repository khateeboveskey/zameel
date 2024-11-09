// #region imports
import { useState } from "react";
import { Link } from "expo-router";
import { Button, Form, H1, Spinner, Text, XStack, YStack } from "tamagui";

import { FormInput, FormInputFeedback, FormPasswordChecklist, Logo } from "@/components";
import { useAdaptiveColor, useAuth } from "@/hooks";
import { PRIMARY_COLOR } from "@/lib/constants";
import { validateBoolObject } from "@/utils";

export default function LoginScreen() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [validationState, setValidationState] = useState({
    email: false,
    password: false
  });

  const adaptiveColor = useAdaptiveColor("gray", 12);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: field === "email" ? value.trim() : value
    }));
  };

  const handleValidationChange = (field: string, isValid: boolean) => {
    setValidationState((prev) => ({
      ...prev,
      [field]: isValid
    }));
  };

  const { login, isLoading } = useAuth();
  const isFormValid = validateBoolObject(validationState) && !isLoading;

  const handleLogin = async () => {
    if (!isFormValid) return;
    const res = await login(formData.email, formData.password);
    if (res.status === 200) {
      // redirect to group join
    }
  };

  return (
    <YStack
      p="$3"
      fullscreen
      jc="center"
      gap="$3"
      direction="rtl">
      <Logo style={{ height: 100 }} />
      <H1
        color={adaptiveColor}
        textAlign="center">
        تسجيل الدخول
      </H1>
      <Form onSubmit={handleLogin}>
        <YStack mb="$6">
          <FormInput
            isValid={validationState.email}
            value={formData.email}
            id="email"
            label="البريد الإلكتروني"
            placeholder="example@email.com"
            onChangeText={(text: string) => handleInputChange("email", text)}
          />
          <FormInputFeedback
            value={formData.email}
            validate="email"
            onValidationErrors={(errors) => {
              handleValidationChange("email", errors.length === 0);
            }}
          />
          <FormInput
            noValidate
            value={formData.password}
            id="password"
            label="كلمة المرور"
            secureTextEntry
            onChangeText={(text: string) => handleInputChange("password", text)}
          />
          <FormPasswordChecklist
            style={{ display: "none" }}
            value={formData.password}
            passwordConfirm={formData.password}
            onPasswordValidateChange={(isValid: boolean) =>
              handleValidationChange("password", isValid)
            }
          />
        </YStack>
        <Form.Trigger asChild>
          <Button
            disabled={!isFormValid}
            style={{ opacity: isFormValid ? 1 : 0.7 }}>
            {isLoading ? (
              <Spinner
                color="white"
                size="small"
              />
            ) : (
              "تسجيل الدخول"
            )}
          </Button>
        </Form.Trigger>
        <XStack
          jc="center"
          mt="$3"
          gap="$2">
          <Text
            fontFamily="$body"
            color={useAdaptiveColor("gray", 11)}>
            ليس لديك حساب بعد؟
          </Text>
          <Link
            asChild
            push
            href="/signup">
            <Text
              color={PRIMARY_COLOR}
              fontFamily="$body">
              أنشئ حسابك
            </Text>
          </Link>
        </XStack>
      </Form>
    </YStack>
  );
}
