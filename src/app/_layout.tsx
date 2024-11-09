// #region imports
import { Suspense, useEffect } from "react";
import { I18nManager, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { TamaguiProvider, Text, Theme, YStack } from "tamagui";

import config from "@/../tamagui.config";
import { Toast } from "@/plugins";

// RTL Configuration
I18nManager.allowRTL(true);
I18nManager.forceRTL(true);
I18nManager.isRTL = true;

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const theme = isDarkMode ? DarkTheme : DefaultTheme;
  const themeName = isDarkMode ? "dark_accent" : "light_accent";

  const [loaded] = useFonts({
    Alexandria: require("@/assets/fonts/Alexandria[wght].ttf")
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <>
      <TamaguiProvider config={config}>
        <Suspense fallback={<Text>جاري التحميل...</Text>}>
          <Theme name={themeName}>
            <ThemeProvider value={theme}>
              <SafeAreaView
                style={{
                  flex: 1,
                  backgroundColor: String(theme.colors.background)
                }}>
                <YStack flex={1}>
                  <Stack
                    screenOptions={{
                      headerShown: false,
                      animation: "slide_from_left",
                      orientation: "portrait"
                    }}
                  />
                </YStack>
              </SafeAreaView>
            </ThemeProvider>
          </Theme>
        </Suspense>
      </TamaguiProvider>
      <Toast />
    </>
  );
}
