import React, { useEffect, useRef, useState } from "react";
import { Animated, Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { PRIMARY_COLOR } from "@/lib/constants";

interface CarouselItem {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
}

interface CarouselProps {
  data: CarouselItem[];
  autoPlay?: boolean;
  interval?: number;
}

const { width } = Dimensions.get("window");

const Carousel: React.FC<CarouselProps> = ({ data, autoPlay = false, interval = 3000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);
  const reversedData = [...data].reverse();
  const dotWidthAnim = useRef(reversedData.map(() => new Animated.Value(8))).current;

  const scrollToIndex = (index: number) => {
    scrollViewRef.current?.scrollTo({ x: width * index, animated: true });
  };

  const handleAutoPlay = () => {
    const nextIndex = activeIndex === 0 ? reversedData.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
    scrollToIndex(nextIndex);
  };

  const handleScroll = (event: { nativeEvent: { contentOffset: { x: number } } }) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / width);
    setActiveIndex(index);
  };

  const animateDots = () => {
    dotWidthAnim.forEach((anim, index) => {
      Animated.spring(anim, {
        toValue: index === activeIndex ? 28 : 8,
        useNativeDriver: false
      }).start();
    });
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (autoPlay) {
      timer = setInterval(handleAutoPlay, interval);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [activeIndex, autoPlay, reversedData.length, interval]);

  useEffect(() => {
    animateDots();
  }, [activeIndex]);

  const renderCarouselItem = (item: CarouselItem) => (
    <View
      key={item.id}
      style={styles.slide}>
      <Image
        source={{ uri: item.imageUrl }}
        style={styles.image}
      />
      <LinearGradient
        colors={[`${PRIMARY_COLOR}00`, PRIMARY_COLOR]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.image, styles.gradient]}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </LinearGradient>
    </View>
  );

  const renderPaginationDot = (index: number) => (
    <Animated.View
      key={index}
      style={[
        styles.paginationDot,
        {
          backgroundColor: index === activeIndex ? PRIMARY_COLOR : `${PRIMARY_COLOR}50`,
          width: dotWidthAnim[index]
        }
      ]}
    />
  );

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}>
        {reversedData.map(renderCarouselItem)}
      </ScrollView>

      <View style={styles.pagination}>
        {reversedData.map((_, index) => renderPaginationDot(index))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
    position: "relative"
  },
  slide: {
    width,
    height: 180,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: "90%",
    height: "100%",
    borderRadius: 12
  },
  gradient: {
    position: "absolute"
  },
  textContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    padding: 15
  },
  title: {
    fontFamily: "Alexandria",
    color: "white",
    fontSize: 18,
    textAlign: "right",
    marginBottom: 5
  },
  description: {
    fontFamily: "Alexandria",
    color: "white",
    fontSize: 10,
    lineHeight: 18,
    textAlign: "right"
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15
  },
  paginationDot: {
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4
  }
});

export default Carousel;
