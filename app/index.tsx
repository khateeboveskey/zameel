import { ArrowLeft } from "@tamagui/lucide-icons";
import { Button, H1, Image, Paragraph, YStack } from "tamagui";

import { MySafeAreaView } from "../components/MySafeAreaView";
import { MyStack } from "../components/MyStack";

export default function Home() {
  return (
    <MySafeAreaView>
      <MyStack>
        <YStack
          maxWidth={600}
          marginTop={"$12"}
          space="$2.5"
        >
          <Image
            source={{
              // uri: "../assets/logo.png",
              uri: "https://picsum.photos/200/300",
              width: 200,
              height: 200
            }}
            alignSelf="center"
          />
          <H1
            py="$2"
            h={"$6"}
            textAlign="center"
          >
            أهلاً بك في زميل
          </H1>
          <Paragraph
            lineHeight={"$6"}
            textAlign="center"
            o={0.5}
          >
            زميل هو نظام إدارة محتوى الطالب الجامعي، يمكن للطالب عبره إدارة كتبه
            (ملازمه)، تنظيم تكاليفه وتسليمها، الوصول إلى المقررات الدراسية،
            ومعرفة قاعات ومواعيد المحاضرات.{" "}
          </Paragraph>
          <Button
            theme="purple"
            h={"$6"}
            icon={ArrowLeft}
            scaleIcon={1.3}
          >
            التالي
          </Button>
        </YStack>
      </MyStack>
    </MySafeAreaView>
  );
}
