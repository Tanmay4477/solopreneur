import { useCallback, useEffect, useState } from 'react';
import '../global.css'
import * as SplashScreen from 'expo-splash-screen'
import { View } from 'react-native';
import { Stack } from 'expo-router';
import { useRouter } from 'expo-router';
import { Provider, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setAuthFromStorage } from '@/src/redux/slices/authSlice';
import { store } from '@/src/redux/store';

SplashScreen.preventAutoHideAsync();

const LoadAuthState = () => {
  const dispatch = useDispatch();
  // const router = useRouter();
  const [isNavigationReady, setIsNavigationReady] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      if (!isNavigationReady) return;
      const token = await AsyncStorage.getItem('token');
      const userString = await AsyncStorage.getItem('user');
      if(token && userString) {
        dispatch(setAuthFromStorage({ user: JSON.parse(userString), token: token}));
        // router.replace('/(tabs)');
      } else {
        return null;
      }
    }
    checkAuth();
  }, [dispatch]);

  useEffect(() => {
    setIsNavigationReady(true); // Mark navigation as ready after mount
  }, []);

  return null;
}

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
    <Provider store={store}>
      <LoadAuthState />
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <Stack>
          <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
          {/* <Stack.Screen name="+not-found" options={{ headerShown: false}} /> */}
          <Stack.Screen name="(auth)" options={{ headerShown: false}} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false}} />
        </Stack>
      </View>
    </Provider>
  );
}