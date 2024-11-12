// #region imports
import { useState } from "react";
import { Link } from "expo-router";
import { CircleAlert } from "lucide-react-native";
import { Button, Form, H1, Paragraph, ScrollView, Spinner, Text, XStack, YStack } from "tamagui";

import { FormInput, FormInputFeedback, FormPasswordChecklist, Logo } from "@/components";
import { useAdaptiveColor, useAuth, useRequest } from "@/hooks";
import { PRIMARY_COLOR } from "@/lib/constants";
import { UserRegisterPayload } from "@/types/payload";
import { validateBoolObject } from "@/utils";

// #region logic
type UserData = {
  fullname: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

function Signup() {
  const [userData, setUserData] = useState<UserData>({
    fullname: "",
    email: "",
    password: "",
    passwordConfirm: ""
  });

  const [valid, setValid] = useState({
    fullname: false,
    email: false,
    password: false,
    passwordConfirm: false
  });

  const handleChange = (field: string, value: string) => {
    setUserData((prev) => ({ ...prev, [field]: value }));
  };

  const { post, isLoading } = useRequest();
  const { login } = useAuth();

  async function sendData() {
    if (validateBoolObject(valid)) {
      // send data to server
      const data: UserRegisterPayload = {
        data: {
          type: "user",
          attributes: {
            name: userData.fullname,
            email: userData.email,
            password: userData.password,
            password_confirmation: userData.passwordConfirm
          }
        }
      };
      const res = await post("/register", data);
      if (res.status === 200) {
        await login(userData.email, userData.password);
      }
    }
  }

  // #region ui
  return (
    <ScrollView>
      <YStack
        p="$3"
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
        <Form onSubmit={() => sendData()}>
          <YStack mb="$6">
            <FormInput
              value={userData.fullname}
              id="fullname"
              isValid={valid.fullname}
              label="الاسم الكامل"
              placeholder="مثال: عبدالرحمن صالح عبدالرحيم سالم"
              onChangeText={(text: string) => handleChange("fullname", text)}
            />
            <FormInputFeedback
              validate="fullname"
              value={userData.fullname}
              onValidationErrors={(errors) => {
                setValid((prev) => ({ ...prev, fullname: errors.length === 0 }));
              }}
            />
            <WarningMessage
              style={{
                display: userData.fullname ? "flex" : "none"
              }}
            />
            <FormInput
              value={userData.email}
              isValid={valid.email}
              id="email"
              label="البريد الإلكتروني"
              placeholder="example@email.com"
              onChangeText={(text: string) => handleChange("email", text.trim())}
            />
            <FormInputFeedback
              validate="email"
              value={userData.email}
              onValidationErrors={(errors) => {
                setValid((prev) => ({ ...prev, email: errors.length === 0 }));
              }}
            />
            <FormInput
              value={userData.password}
              isValid={valid.password}
              id="password"
              label="كلمة المرور"
              secureTextEntry
              onChangeText={(text: string) => handleChange("password", text)}
            />
            <FormPasswordChecklist
              value={userData.password}
              passwordConfirm={userData.passwordConfirm}
              onPasswordValidateChange={(validatedBoolean: boolean) =>
                setValid((prev) => ({
                  ...prev,
                  password: validatedBoolean,
                  passwordConfirm: validatedBoolean
                }))
              }
            />
            <FormInput
              isValid={valid.password}
              value={userData.passwordConfirm}
              id="password-confirm"
              label="تأكيد كلمة المرور"
              onChangeText={(text: string) => handleChange("passwordConfirm", text)}
              secureTextEntry
            />
          </YStack>
          <Form.Trigger asChild>
            <Button
              disabled={!validateBoolObject(valid) && isLoading}
              style={{ opacity: validateBoolObject(valid) && !isLoading ? 1 : 0.7 }}>
              {isLoading ? (
                <Spinner
                  color="white"
                  size="small"
                />
              ) : (
                "إنشاء حساب"
              )}{" "}
            </Button>
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
      </YStack>
    </ScrollView>
  );
}

// #region WarningMessage
const WarningMessage = (props) => (
  <XStack
    style={props.style}
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

export default Signup;
