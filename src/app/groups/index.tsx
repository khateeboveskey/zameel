import { Link } from "expo-router";
import { Plus, Users } from "lucide-react-native";
import { Button, H1, Image, Paragraph, Text, XStack } from "tamagui";

import { useAdaptiveColor } from "@/hooks/useAdaptiveColor";

export default function Index() {
  return (
    <>
      <Image
        source={require("@/assets/imgs/3d-icons/plus-dynamic-color.png")}
        mx="auto"
        h={280}
        w={280}
      />
      <H1
        py="$2"
        h={"$6"}
        color={useAdaptiveColor("gray", 12)}
        textAlign="center">
        قائمة الدُفَع
      </H1>
      <Paragraph
        marginBottom={"$5"}
        lineHeight={"$6"}
        fontSize={"$2"}
        textAlign="center"
        color={useAdaptiveColor("neutral", 500, true)}
        w={"90%"}>
        قم بإضافة دفعة لإرسال طلب انضمام لمندوبها
      </Paragraph>
      {groups.map((group) => (
        <XStack
          key={group}
          ai="center"
          gap="$3"
          backgroundColor={useAdaptiveColor("gray", 6)}
          display="flex"
          jc="flex-start"
          py="$3"
          px="$4"
          borderRadius={"$4"}
          w={"100%"}>
          <Users
            size={20}
            color={useAdaptiveColor("neutral", 300, true)}
          />
          <Text
            color={useAdaptiveColor("neutral", 300, true)}
            fontFamily="$body"
            fontSize={"$2"}>
            {group}
          </Text>
        </XStack>
      ))}
      <Link
        asChild
        href={"/groups/join"}>
        <Button
          style={{
            textDecoration: "none"
            // paddingVertical: 25
          }}
          fontSize={"$2"}
          jc="flex-start"
          // themeReset
          icon={
            <Plus
              style={{ marginLeft: -5 }}
              color={"white"}
            />
          }
          h="$5"
          scaleIcon={1.3}
          w={"100%"}>
          إضافة دفعة
        </Button>
      </Link>
    </>
  );
}

const groups = ["تقنية المعلومات - المستوى الرابع", "تقنية المعلومات - المستوى الثاني"];
