import { Separator, Text, XStack } from "tamagui";

export default function SeperatingText(props) {
  return (
    <XStack
      marginVertical={"$2"}
      ai="center"
      gap={"$4"}>
      <Separator
        borderColor={"white"}
        opacity={0.25}
      />
      <Text
        mx={"auto"}
        fontSize={"$2.5"}
        opacity={0.5}
        fontFamily="Alexandria"
        color={"white"}>
        {props.children}
      </Text>
      <Separator
        borderColor={"white"}
        opacity={0.25}
      />
    </XStack>
  );
}
