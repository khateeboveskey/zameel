import { useState } from "react";
import { Link } from "expo-router";
import { Button, Form, H1, Text, XStack, YStack } from "tamagui";

import { FormInput, FormInputFeedback, Logo, MySafeAreaView, MyStack } from "@/components";
import { useAdaptiveColor } from "@/hooks/useAdaptiveColor";
import { PRIMARY_COLOR } from "@/lib/constants";

export default function Index() {
  const [userCreditials, setUserCredentials] = useState({
    email: "",
    password: ""
  });

  const [valid, setValid] = useState({
    email: false,
    password: false
  });

  return (
    <MySafeAreaView>
      <MyStack
        jc="center"
        gap="$3"
        direction="rtl">
        <Logo style={{ height: 100 }} />
        <H1
          color={useAdaptiveColor("gray", 12)}
          textAlign="center">
          تسجيل الدخول
        </H1>
        <Form>
          <YStack mb="$6">
            <FormInput
              isValid={valid.email}
              value={userCreditials.email}
              id="email"
              label="البريد الإلكتروني"
              placeholder="example@email.com"
              onChangeText={(text: string) =>
                setUserCredentials((prev) => ({ ...prev, email: text }))
              }
            />
            <FormInputFeedback
              value={userCreditials.email}
              validate="email"
              onValidationErrors={(errors) => {
                setValid((prev) => ({ ...prev, email: errors.length === 0 }));
              }}
            />
            <FormInput
              noValidate
              value={userCreditials.password}
              id="password"
              label="كلمة المرور"
              secureTextEntry
              onChangeText={(text: string) =>
                setUserCredentials((prev) => ({ ...prev, password: text }))
              }
            />
          </YStack>
          <Form.Trigger asChild>
            <Button>إنشاء حساب</Button>
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
      </MyStack>
    </MySafeAreaView>
  );
}
