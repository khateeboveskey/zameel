import { CircleAlert } from "lucide-react-native";
import {
  Button,
  Form,
  H1,
  Input,
  Label,
  Paragraph,
  Text,
  XStack,
  YStack,
  ScrollView
} from "tamagui";
import { Link } from "expo-router";
import Logo from "../../components/Logo";
import { MySafeAreaView } from "../../components/MySafeAreaView";
import { MyStack } from "../../components/MyStack";
import { getAdaptiveColor, getAdabtiveTWColor } from "../../lib/utils";
import { PRIMARY_COLOR } from "../../lib/constants";

export default function Index() {
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
            color={getAdaptiveColor("gray", 12)}
            textAlign="center">
            إنشاء حساب
          </H1>
          <Form>
            {/* ... */}
            <YStack mb="$6">
              <Label
                color={getAdaptiveColor("gray", 12)}
                htmlFor="fullname">
                الاسم الكامل
              </Label>
              <Input
                id="fullname"
                borderColor={getAdaptiveColor("gray", 8)}
                color={getAdaptiveColor("gray", 12)}
                backgroundColor={getAdaptiveColor("gray", 5)}
                placeholderTextColor={getAdaptiveColor("gray", 8)}
                placeholder="مثال: عبدالرحمن صالح عبدالرحيم سالم"
              />
              <XStack
                mt="$2"
                gap="$3">
                <CircleAlert
                  color={getAdabtiveTWColor("orange", 600)}
                  size={32}
                  style={{
                    marginTop: 10
                  }}
                />
                <YStack
                  flex={1}
                  my="$2"
                  gap="$2">
                  <Text
                    fontSize={"$1"}
                    fontFamily={"$body"}
                    color={getAdabtiveTWColor("orange", 600)}>
                    تجنب الأسماء الحركية والألقاب
                  </Text>
                  <Paragraph
                    fontSize={"$1"}
                    fontFamily={"$body"}
                    o={0.8}
                    textAlign="justify"
                    lineHeight={22}
                    color={getAdabtiveTWColor("orange", 600)}>
                    هذا الاسم غير قابل للتعديل، وسيتم اعتماده عند طلب الانضمام لدفعة وتسليم
                    التكاليف. وضع اسم غير حقيقي قد يؤدي إلى رفضك.
                  </Paragraph>
                </YStack>
              </XStack>
              <Label
                mt={"$3"}
                color={getAdaptiveColor("gray", 12)}
                htmlFor="email">
                البريد الإلكتروني
              </Label>
              <Input
                id="email"
                borderColor={getAdaptiveColor("gray", 8)}
                color={getAdaptiveColor("gray", 12)}
                backgroundColor={getAdaptiveColor("gray", 5)}
                placeholderTextColor={getAdaptiveColor("gray", 8)}
                placeholder="example@email.com"
              />
              <Label
                mt={"$3"}
                color={getAdaptiveColor("gray", 12)}
                htmlFor="password">
                كلمة المرور
              </Label>
              <Input
                secureTextEntry={true}
                id="password"
                borderColor={getAdaptiveColor("gray", 8)}
                color={getAdaptiveColor("gray", 12)}
                backgroundColor={getAdaptiveColor("gray", 5)}
                placeholderTextColor={getAdaptiveColor("gray", 8)}
              />
              <Label
                mt={"$3"}
                color={getAdaptiveColor("gray", 12)}
                htmlFor="password-confirmation">
                تأكيد كلمة المرور
              </Label>
              <Input
                secureTextEntry={true}
                id="password-confirmation"
                borderColor={getAdaptiveColor("gray", 8)}
                color={getAdaptiveColor("gray", 12)}
                backgroundColor={getAdaptiveColor("gray", 5)}
                placeholderTextColor={getAdaptiveColor("gray", 8)}
              />
            </YStack>
            <Form.Trigger asChild>
              <Button>إنشاء حساب</Button>
            </Form.Trigger>
            <XStack
              jc="center"
              mt="$3"
              gap="$2">
              <Text fontFamily={"$body"}>لديك حساب مسبقاً؟</Text>
              <Link
                asChild
                push
                href={"/login"}>
                <Text
                  color={PRIMARY_COLOR}
                  fontFamily={"$body"}>
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
