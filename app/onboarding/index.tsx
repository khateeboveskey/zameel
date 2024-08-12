// #region imports
import { ArrowLeft, ArrowRight, Check } from "@tamagui/lucide-icons";
import { Link } from "expo-router";
import React, { useRef, useState } from "react";
import { Animated, Dimensions, useColorScheme } from "react-native";
import { Button, Circle, H1, Paragraph, XStack, YStack, Text } from "tamagui";
import Logo from "../../components/Logo";

// #region logic
export default function Onboarding() {
  const colorScheme = useColorScheme();
  const [currentPage, setCurrentPage] = useState(0);
  const slideAnim = useRef(new Animated.Value(0)).current;
  const screenWidth = Dimensions.get("window").width * 0.9;

  const slide = (dir: number) => {
    let nextPage: number;
    if (dir === 1) {
      nextPage = (currentPage + 1) % pages.length;
    } else {
      nextPage = (currentPage - 1 + pages.length) % pages.length;
    }
    Animated.timing(slideAnim, {
      toValue: -screenWidth * -nextPage,
      duration: 300,
      useNativeDriver: true
    }).start(() => setCurrentPage(nextPage));
  };

  const isDarkMode = colorScheme === "dark";
  const adaptiveColor = isDarkMode ? "white" : "black";
  const isLastPage = currentPage === pages.length - 1;

  // #region ui
  return (
    <YStack
      fullscreen
      p={20}
      maxWidth={600}
      marginTop={"$12"}
      jc="space-between">
      <Logo style={{ height: 100 }} />
      <Animated.View
        style={{
          flexDirection: "row",
          transform: [{ translateX: slideAnim }]
        }}>
        {pages.map((page, index) => (
          <YStack
            key={index}
            style={{ width: screenWidth }}
            gap="$2">
            <H1
              py="$2"
              h={"$6"}
              textAlign="center"
              color={adaptiveColor}
              animation="lazy"
              enterStyle={{ opacity: 0, scale: 0.9 }}
              exitStyle={{ opacity: 0, scale: 0.9 }}>
              {page.title}
            </H1>
            <Paragraph
              lineHeight={"$6"}
              textAlign="center"
              o={0.5}
              color={adaptiveColor}
              animation="lazy"
              enterStyle={{ opacity: 0, y: 10 }}
              exitStyle={{ opacity: 0, y: -10 }}>
              {page.description}
            </Paragraph>
          </YStack>
        ))}
      </Animated.View>
      <YStack>
        <XStack
          justifyContent="center"
          my="$5">
          {pages.map((_, index) => (
            <Circle
              backgroundColor={adaptiveColor}
              key={index}
              size={8}
              mx={2}
              o={index === currentPage ? 0.8 : 0.2}
            />
          ))}
        </XStack>
        <XStack gap="$4">
          <Button
            variant="outlined"
            color={"$borderColor"}
            noTextWrap
            h={"$6"}
            iconAfter={ArrowRight}
            scaleIcon={1.3}
            o={currentPage === 0 ? 0.5 : 1}
            onPress={() => slide(-1)}
            disabled={currentPage === 0}
          />
          {isLastPage ? (
            <Link
              asChild
              replace
              href="/signup">
              <Button
                flexGrow={1}
                h={"$6"}
                iconAfter={Check}
                scaleIcon={1.3}
                onPress={() => slide(1)}>
                إنهاء
              </Button>
            </Link>
          ) : (
            <Button
              flexGrow={1}
              h={"$6"}
              iconAfter={ArrowLeft}
              scaleIcon={1.3}
              onPress={() => slide(1)}>
              التالي
            </Button>
          )}
        </XStack>
        <XStack
          jc="center"
          mt="$3">
          <Link
            asChild
            push
            href={"/signup"}>
            <Text
              fontFamily={"$body"}
              o={0.5}
              color={adaptiveColor}
              textDecorationLine="underline">
              تخطي
            </Text>
          </Link>
        </XStack>
      </YStack>
    </YStack>
  );
}

// #region data
const pages = [
  {
    title: "أهلاً بك في زميل",
    description: "زميل هو نظام إدارة محتوى الطالب"
  },
  {
    title: "سهل الاستخدام",
    description: "زميل تطبيق سهل الاستخدام"
  },
  {
    title: "سريع",
    description: "زميل تطبيق سريع"
  }
];
