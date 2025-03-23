import { useCallback, useEffect, useState } from 'react';
import '../global.css'
import * as SplashScreen from 'expo-splash-screen'
import { View } from 'react-native';
import { Stack } from 'expo-router';
import { useRouter } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [appIsReady, setAppIsReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
      router.replace("/(onboarding)/step-one")
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Stack>
        <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
        {/* <Stack.Screen name="+not-found" options={{ headerShown: false}} /> */}
        <Stack.Screen name="(auth)" options={{ headerShown: false}} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false}} />
      </Stack>
    </View>
  );
}