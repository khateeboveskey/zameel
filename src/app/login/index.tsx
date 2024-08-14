import React from "react";
import { Link } from "expo-router";
import { Button, Form, H1, Text, XStack, YStack } from "tamagui";

import { FormInput, Logo, MySafeAreaView, MyStack } from "@/components";
import { useAdaptiveColor } from "@/hooks/useAdaptiveColor";
import { PRIMARY_COLOR } from "@/lib/constants";

export default function Index() {
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
              id="email"
              label="البريد الإلكتروني"
              placeholder="example@email.com"
            />
            <FormInput
              id="password"
              label="كلمة المرور"
              secureTextEntry
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
