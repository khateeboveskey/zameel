import { useState } from "react";
import { Link } from "expo-router";
import { Button, Form, H1, Text, XStack, YStack } from "tamagui";

import { FormInput, Logo, MySafeAreaView, MyStack } from "@/components";
import { useAdaptiveColor } from "@/hooks/useAdaptiveColor";
import { PRIMARY_COLOR } from "@/lib/constants";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
              value={email}
              id="email"
              label="البريد الإلكتروني"
              placeholder="example@email.com"
              onChangeText={(text: string) => setEmail(text)}
            />
            <FormInput
              value={password}
              id="password"
              label="كلمة المرور"
              secureTextEntry
              onChangeText={(text: string) => setPassword(text)}
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
