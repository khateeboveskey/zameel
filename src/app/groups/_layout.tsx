import { Slot } from "expo-router";
import { YStack } from "tamagui";

import { Logo } from "@/components";

export default function Index() {
  return (
    <YStack
      jc="center"
      gap="$3"
      // mx="auto"
      w="100%"
      maxWidth={"600px"}
      direction="rtl">
      <Logo style={{ height: 100 }} />
      <Slot />
    </YStack>
  );
}
