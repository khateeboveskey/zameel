import { useColorScheme } from "react-native";
import { ArrowLeft } from "@tamagui/lucide-icons";
import { Button, H1, Paragraph, YStack } from "tamagui";

import { MySafeAreaView } from "../../components/MySafeAreaView";
import { MyStack } from "../../components/MyStack";

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
          <Logo style={{ height: 100 }} />
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
              هذي الشاشة الثانية
            </Paragraph>
          </YStack>
          <Button
            h={"$6"}
            iconAfter={ArrowLeft}
            scaleIcon={1.3}
          >
            التالي
          </Button>
        </YStack>
      </MyStack>
    </MySafeAreaView>
  );
}
