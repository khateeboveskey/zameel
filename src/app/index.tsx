import Onboarding from "./onboarding";

import { MySafeAreaView, MyStack } from "@/components";

export default function Home() {
  return (
    <MySafeAreaView direction="rtl">
      <MyStack>
        <Onboarding />
      </MyStack>
    </MySafeAreaView>
  );
}
