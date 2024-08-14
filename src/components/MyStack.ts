import { styled, YStack } from "tamagui";

const MyStack = styled(YStack, {
  name: "MyStack",
  backgroundColor: "$backgroundStrong",
  flex: 1,
  justifyContent: "space-between",
  padding: "$4",
  space: "$true"
});

export default MyStack;
