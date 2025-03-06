import { Slot } from "expo-router";
import { YStack } from "tamagui";

import { Logo } from "@/components";

export default function Index() {
  return (
    <YStack
      jc="center"
      gap="$3"
      pt="$8"
      mx="auto"
      w="95%"
      // maxWidth={"600px"}
      direction="rtl">
      <Logo style={{ height: 50 }} />
      <Slot />
    </YStack>
  );
}
