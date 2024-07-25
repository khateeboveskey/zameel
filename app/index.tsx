// @ts-nocheck
import { Github } from "@tamagui/lucide-icons";
import { Link, useRouter } from "expo-router";
import {
  Button,
  H1,
  Image,
  ListItem,
  Paragraph,
  Separator,
  YGroup,
  YStack
} from "tamagui";

import { MySafeAreaView } from "../components/MySafeAreaView";
import { MyStack } from "../components/MyStack";

export default function Home() {
  const router = useRouter();

  return (
    <MySafeAreaView>
      <MyStack>
        <YStack
          maxWidth={600}
          marginTop={"$12"}
          space="$2.5"
        >
          <Image src={"../assets/icon.png"} />
          <H1
            py="$2"
            h={"$6"}
            textAlign="center"
          >
            أهلاً بك في زميل
          </H1>
          <Paragraph textAlign="center">نظام إدارة محتوى الطالب</Paragraph>
        </YStack>

        <YStack space="$2.5">
          <Button onPress={() => router.push("/users/testuser")}>
            الملف الشخصي
          </Button>
          <Button onPress={() => router.push("/tabs")}>التبويبات</Button>
        </YStack>

        <YStack space="$5">
          <YGroup
            bordered
            separator={<Separator />}
            theme="green"
          >
            <YGroup.Item>
              <Link
                asChild
                href="https://github.com/khateeboveskey/zameel"
                target="_blank"
              >
                <ListItem
                  flexDirection="row-reverse"
                  hoverTheme
                  pressTheme
                  title="مستودع المشروع"
                  icon={Github}
                />
              </Link>
            </YGroup.Item>
          </YGroup>
        </YStack>
      </MyStack>
    </MySafeAreaView>
  );
}
