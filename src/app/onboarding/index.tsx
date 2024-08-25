// #region imports
import React, { useRef, useState } from "react";
import { Animated, Dimensions, useColorScheme } from "react-native";
import { ArrowLeft, ArrowRight, Check } from "@tamagui/lucide-icons";
import { Link } from "expo-router";
import { Button, Circle, H1, Paragraph, Text, XStack, YStack } from "tamagui";

import { Logo } from "@/components";

// #region logic
export default function Onboarding() {
  const colorScheme = useColorScheme();
  const [currentPage, setCurrentPage] = useState(0);
  const slideAnim = useRef(new Animated.Value(0)).current;
  const screenWidth = Dimensions.get("window").width * 0.9;

  const slide = (dir: number) => {
    const nextPage = (currentPage + dir + pages.length) % pages.length;
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
      mx="auto" 
      width="100%"
      marginTop={"$12"}
      jc="space-between">
      <Logo style={{ height: 100 }} />
      <Animated.View
        style={{
          flexDirection: "row",
          transform: [{ translateX: slideAnim }]
        }}>
        {pages.map((page, index) => (
          <SliderPage
            key={index}
            title={page.title}
            description={page.description}
            screenWidth={screenWidth}
            adaptiveColor={adaptiveColor}
          />
        ))}
      </Animated.View>
      <YStack>
        <PageIndicator
          totalPages={pages.length}
          currentPage={currentPage}
          adaptiveColor={adaptiveColor}
        />
        <NavigationButtons
          currentPage={currentPage}
          onPrevious={() => slide(-1)}
          onNext={() => slide(1)}
          isLastPage={isLastPage}
        />
        <SkipButton adaptiveColor={adaptiveColor} />
      </YStack>
    </YStack>
  );
}

// #region SliderPage
function SliderPage({ title, description, screenWidth, adaptiveColor }) {
  return (
    <YStack
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
        {title}
      </H1>
      <Paragraph
        lineHeight={"$6"}
        textAlign="center"
        o={0.5}
        color={adaptiveColor}
        animation="lazy"
        enterStyle={{ opacity: 0, y: 10 }}
        exitStyle={{ opacity: 0, y: -10 }}>
        {description}
      </Paragraph>
    </YStack>
  );
}

// #region PageIndicator
function PageIndicator({ totalPages, currentPage, adaptiveColor }) {
  return (
    <XStack
      justifyContent="center"
      my="$5">
      {[...Array(totalPages)].map((_, index) => (
        <Circle
          backgroundColor={adaptiveColor}
          key={index}
          size={8}
          mx={2}
          o={index === currentPage ? 0.8 : 0.2}
        />
      ))}
    </XStack>
  );
}

// #region NavigationButtons
function NavigationButtons({ currentPage, onPrevious, onNext, isLastPage }) {
  return (
    <XStack gap="$4">
      <Button
        variant="outlined"
        color={"$borderColor"}
        noTextWrap
        h={"$6"}
        iconAfter={ArrowRight}
        scaleIcon={1.3}
        o={currentPage === 0 ? 0.5 : 1}
        onPress={onPrevious}
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
            onPress={onNext}>
            إنهاء
          </Button>
        </Link>
      ) : (
        <Button
          flexGrow={1}
          h={"$6"}
          iconAfter={ArrowLeft}
          scaleIcon={1.3}
          onPress={onNext}>
          التالي
        </Button>
      )}
    </XStack>
  );
}

// #region SkipButton
function SkipButton({ adaptiveColor }) {
  return (
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
  );
}

// #region pages
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
