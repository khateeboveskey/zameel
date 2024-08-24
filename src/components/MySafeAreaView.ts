import { SafeAreaView } from "react-native-safe-area-context";
import { styled } from "tamagui";

const MySafeAreaView = styled(SafeAreaView, {
  name: "MySafeAreaView",
  flex: 1,
  backgroundColor: "$backgroundStrong"
});

export default MySafeAreaView;
