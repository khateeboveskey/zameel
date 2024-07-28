import { useColorScheme } from "react-native";
import { ArrowLeft } from "@tamagui/lucide-icons";
import { Button, H1, Image, Paragraph, YStack } from "tamagui";

import { MySafeAreaView } from "../components/MySafeAreaView";
import { MyStack } from "../components/MyStack";

export default function Home() {
  const colorScheme = useColorScheme();
  return (
    <MySafeAreaView>
      <MyStack>
        <YStack
          fullscreen
          p={20}
          maxWidth={600}
          marginTop={"$12"}
          jc="space-between"
        >
          <Image
            source={{
              uri: require("../assets/logo.png")
            }}
            h={93}
            w={"50%"}
            alignSelf="center"
          />
          <YStack space="$4">
            <H1
              py="$2"
              h={"$6"}
              textAlign="center"
              color={colorScheme == "light" ? "black" : "white"}
            >
              أهلاً بك في زميل
            </H1>
            <Paragraph
              lineHeight={"$6"}
              textAlign="center"
              o={0.5}
              color={colorScheme == "light" ? "black" : "white"}
            >
              زميل هو نظام إدارة محتوى الطالب الجامعي، يمكن للطالب عبره إدارة كتبه (ملازمه)، تنظيم
              تكاليفه وتسليمها، الوصول إلى المقررات الدراسية، ومعرفة قاعات ومواعيد المحاضرات.{" "}
            </Paragraph>
          </YStack>
          <Button
            h={"$6"}
            icon={ArrowLeft}
            scaleIcon={1.3}
          >
            التالي
          </Button>
        </YStack>
      </MyStack>
    </MySafeAreaView>
  );
}
