import { useState } from "react";
import { Link } from "expo-router";
import { CircleAlert } from "lucide-react-native";
import { Button, Form, H1, Paragraph, ScrollView, Text, XStack, YStack } from "tamagui";

import { FormInput, Logo, MySafeAreaView, MyStack } from "@/components";
import { useAdaptiveColor } from "@/hooks/useAdaptiveColor";
import { PRIMARY_COLOR } from "@/lib/constants";

function Index() {
  const [email, setEmail] = useState("");

  return (
    <MySafeAreaView>
      <ScrollView>
        <MyStack
          mt="$10"
          jc="center"
          gap="$3"
          direction="rtl">
          <Logo style={{ height: 100 }} />
          <H1
            color={useAdaptiveColor("gray", 12)}
            textAlign="center">
            إنشاء حساب
          </H1>
          <Form>
            <YStack mb="$6">
              <FormInput
                id="fullname"
                label="الاسم الكامل"
                placeholder="مثال: عبدالرحمن صالح عبدالرحيم سالم"
              />
              <WarningMessage />
              <FormInput
                value={email}
                id="email"
                label="البريد الإلكتروني"
                placeholder="example@email.com"
                onChangeText={(text: string) => setEmail(text)}
              />
              <FormInput
                id="password"
                label="كلمة المرور"
                secureTextEntry
              />
              <FormInput
                id="password-confirmation"
                label="تأكيد كلمة المرور"
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
                لديك حساب مسبقاً؟
              </Text>
              <Link
                asChild
                push
                href="/login">
                <Text
                  color={PRIMARY_COLOR}
                  fontFamily="$body">
                  سجل دخولك
                </Text>
              </Link>
            </XStack>
          </Form>
        </MyStack>
      </ScrollView>
    </MySafeAreaView>
  );
}

const WarningMessage = () => (
  <XStack
    mt="$2"
    gap="$3">
    <CircleAlert
      color={useAdaptiveColor("orange", 600, true)}
      size={32}
      style={{ marginTop: 10 }}
    />
    <YStack
      flex={1}
      my="$2"
      gap="$2">
      <Text
        fontSize="$1"
        fontFamily="$body"
        color={useAdaptiveColor("orange", 600, true)}>
        تجنب الأسماء الحركية والألقاب
      </Text>
      <Paragraph
        fontSize="$1"
        fontFamily="$body"
        o={0.8}
        textAlign="justify"
        lineHeight={22}
        color={useAdaptiveColor("orange", 600, true)}>
        هذا الاسم غير قابل للتعديل، وسيتم اعتماده عند طلب الانضمام لدفعة وتسليم التكاليف. وضع اسم
        غير حقيقي قد يؤدي إلى رفضك.
      </Paragraph>
    </YStack>
  </XStack>
);

export default Index;
