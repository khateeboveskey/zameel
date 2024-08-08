import { MySafeAreaView } from "../components/MySafeAreaView";
import { MyStack } from "../components/MyStack";
import Onboarding from "./onboarding";

export default function Home() {
  return (
    <MySafeAreaView direction="rtl">
      <MyStack>
        <Onboarding />
      </MyStack>
    </MySafeAreaView>
  );
}
