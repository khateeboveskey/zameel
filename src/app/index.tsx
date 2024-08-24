import Onboarding from "./onboarding";

import { MySafeAreaView, MyStack } from "@/components";

export default function Home() {
  return (
    <MySafeAreaView>
      <MyStack>
        <Onboarding />
      </MyStack>
    </MySafeAreaView>
  );
}
