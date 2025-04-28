import { useState } from "react";
import Markdown from "react-native-markdown-display";
import { SendHorizontal } from "@tamagui/lucide-icons";
import { Button, Input, ScrollView, Spinner, XStack, YStack } from "tamagui";

import { useAdaptiveColor } from "@/hooks/useAdaptiveColor";
import { PRIMARY_COLOR } from "@/lib/constants";
import markdownStyle from "@/plugins/markdown-display";
import ask from "@/utils/gpt";

export default function TabAi() {
  const grayColor = useAdaptiveColor("gray", 5);
  const textColor = useAdaptiveColor("gray", 12);
  const bgColor = useAdaptiveColor("gray", 2);

  const [borderColor] = useState(grayColor);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const isArabic = (text) => {
    const arabicPattern = /[\u0600-\u06FF\u0750-\u077F]/;
    const cleanText = text.replace(/[#`*_\-[\]]/g, "").trim();
    return arabicPattern.test(cleanText[0]);
  };

  const handleAsk = async () => {
    if (!question.trim()) return;

    setLoading(true);
    const newMessage = { type: "user", content: question };
    setMessages((prev) => [...prev, newMessage]);

    try {
      const response = await ask(question);
      setMessages((prev) => [...prev, { type: "assistant", content: response }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { type: "assistant", content: "عذراً، حصل خطأ. يرجى إعادة المحاولة." }
      ]);
    }
    setQuestion("");
    setLoading(false);
  };

  return (
    <YStack
      flex={1}
      padding="$4">
      <ScrollView
        flex={1}
        marginBottom="$5">
        {messages.map((message, index) => (
          <YStack
            marginBottom={20}
            key={index}
            paddingHorizontal={"$3"}
            paddingVertical={"$2"}
            backgroundColor={message.type === "user" ? PRIMARY_COLOR : bgColor}
            borderRadius="$8"
            alignSelf={message.type === "user" ? "flex-end" : "flex-start"}
            maxWidth="80%">
            <Markdown
              style={{
                ...markdownStyle,
                body: {
                  ...markdownStyle.body,
                  direction: isArabic(message.content) ? "rtl" : "ltr"
                }
              }}>
              {message.content}
            </Markdown>
          </YStack>
        ))}
      </ScrollView>
      <XStack
        w={"100%"}
        direction="rtl"
        space="$2">
        <Input
          borderColor={borderColor}
          focusStyle={{
            borderColor: !question ? borderColor : "$borderColorFocus"
          }}
          placeholderTextColor={grayColor}
          color={textColor}
          backgroundColor={bgColor}
          w={"85%"}
          placeholder="اسألني أي شيء..."
          value={question}
          onChangeText={setQuestion}
        />
        <Button
          borderRadius={50}
          aspectRatio={"1/1"}
          onPress={handleAsk}
          disabled={loading}>
          {loading ? <Spinner color="white" /> : <SendHorizontal rotate={"180deg"} />}
        </Button>
      </XStack>
    </YStack>
  );
}
