// #region imports
import { Suspense, useEffect } from "react";
import { useColorScheme } from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { TamaguiProvider, Text, Theme } from "tamagui";

import config from "../tamagui.config";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  // #region logic
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    Alexandria: require("../assets/fonts/Alexandria-Regular.ttf")
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  // #region ui
  return (
    <TamaguiProvider config={config}>
      <Suspense fallback={<Text>Loading...</Text>}>
        <Theme name={colorScheme === "light" ? "light_accent" : "dark_accent"}>
          <ThemeProvider
            value={colorScheme === "light" ? DefaultTheme : DarkTheme}
          >
            <Stack
              screenOptions={{
                headerShown: false
              }}
            />
          </ThemeProvider>
        </Theme>
      </Suspense>
    </TamaguiProvider>
  );
}
