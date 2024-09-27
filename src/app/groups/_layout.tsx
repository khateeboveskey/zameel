import { Slot } from "expo-router";

import { Logo, MySafeAreaView, MyStack } from "@/components";

export default function Index() {
  return (
    <MySafeAreaView ai="center">
      <MyStack
        jc="center"
        gap="$3"
        // mx="auto"
        w="100%"
        maxWidth={"600px"}
        direction="rtl">
        <Logo style={{ height: 100 }} />
        <Slot />
      </MyStack>
    </MySafeAreaView>
  );
}
