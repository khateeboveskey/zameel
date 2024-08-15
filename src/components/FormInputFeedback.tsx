import { Text } from "tamagui";

export default function FormInputFeedback(props) {
  <Text
    o={0.8}
    mt={"$2"}
    fontSize={"$1"}
    fontFamily={"$body"}
    color="red">
    {props.error}
  </Text>;
}
