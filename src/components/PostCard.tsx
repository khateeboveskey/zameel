import { Avatar, Text, XStack, YStack } from "tamagui";

import { useAdaptiveColor } from "@/hooks/useAdaptiveColor";
import type { PostCardProps } from "@/lib/types";

export default function PostCard(props: PostCardProps) {
  const grayColor = useAdaptiveColor("neutral", 900, true);

  return (
    <>
      <XStack
        style={{
          padding: 15,
          paddingVertical: 20,
          direction: "rtl",
          gap: 15,
          backgroundColor: grayColor
        }}>
        <Avatar
          circular
          size="$5">
          <Avatar.Image
            accessibilityLabel="Cam"
            src={`https://i.pravatar.cc/150?img=${props.id}`}
          />
          <Avatar.Fallback backgroundColor="$blue10" />
        </Avatar>
        <YStack w={"80%"}>
          <XStack
            alignItems="center"
            gap={8}>
            <Text fontFamily="Alexandria">{props.publisherName}</Text>
            <Text
              opacity={0.5}
              fontFamily="Alexandria">
              ·
            </Text>
            <Text
              fontSize={"$2.5"}
              opacity={0.5}
              fontFamily="Alexandria">
              {props.role}
            </Text>
          </XStack>
          <XStack
            alignItems="center"
            gap={8}>
            <Text
              fontSize={"$2.5"}
              opacity={0.8}
              fontFamily="Alexandria">
              {props.subject}
            </Text>
            <Text
              opacity={0.8}
              fontFamily="Alexandria">
              ·
            </Text>
            <Text
              fontSize={"$2.5"}
              opacity={0.8}
              fontFamily="Alexandria">
              {props.datetime}
            </Text>
          </XStack>
          <Text
            marginTop={"$3"}
            fontSize={"$3"}
            lineHeight={"$5"}
            fontFamily="Alexandria">
            {props.content}
          </Text>
        </YStack>
      </XStack>
    </>
  );
}
