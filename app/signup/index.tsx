import { Text } from "tamagui";
import { MySafeAreaView } from "../../components/MySafeAreaView";
import { MyStack } from "../../components/MyStack";

export default function Index() {
  return (
    <MySafeAreaView direction="rtl">
      <MyStack>
        <Text>أهلاً</Text>
      </MyStack>
    </MySafeAreaView>
  );
}
