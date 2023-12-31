import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    SFProDisplayRegular: require("../assets/fonts/SF-Pro-Display-Regular.ttf"),
    SFProDisplayBold: require("../assets/fonts/SF-Pro-Display-Bold.otf"),
    SFProDisplayMedium: require("../assets/fonts/SF-Pro-Display-Medium.ttf"),
    SFProDisplaySemibold: require("../assets/fonts/SF-Pro-Display-Semibold.ttf"),
    SFProTextRegular: require("../assets/fonts/SF-Pro-Text-Regular.otf"),
    SFProTextBold: require("../assets/fonts/SF-Pro-Text-Bold.otf"),
    SFProTextMedium: require("../assets/fonts/SF-Pro-Text-Medium.otf"),
    SFProTextSemibold: require("../assets/fonts/SF-Pro-Text-Semibold.ttf"),
    Minggola: require("../assets/fonts/Minggola.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {!loaded && <SplashScreen />}
      {loaded && <RootLayoutNav />}
    </>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: "modal" }} />
        </Stack>
      </ThemeProvider>
    </>
  );
}
