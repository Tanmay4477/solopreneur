import React, { useState, useCallback, useEffect } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import StepOne from './(onboarding)/step-one';
// import * as SplashScreen from 'expo-splash-screen';
// import CustomSplashScreen from '../src/components/SplashScreen';

// SplashScreen.preventAutoHideAsync();

export default function Index(): React.JSX.Element {
  // const [appIsReady, setAppIsReady] = useState<boolean>(false);
  // const [showSplash, setShowSplash] = useState<boolean>(true);

  // useEffect(() => {
  //   async function prepare(): Promise<void> {
  //     try {
  //       await new Promise(resolve => setTimeout(resolve, 500));
  //     } catch (e) {
  //       console.warn(e);
  //     } finally {
  //       setAppIsReady(true);
  //     }
  //   }

  //   prepare();
  // }, []);

  // const onLayoutRootView = useCallback(async (): Promise<void> => {
  //   if (appIsReady) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [appIsReady]);

  // const handleFinishSplash = (): void => {
  //   setShowSplash(false);
  // };

  // if (!appIsReady) {
  //   return <View />;
  // }

  return (
    // <View className="flex-1" onLayout={onLayoutRootView}>
    //   {showSplash ? (
    //     <CustomSplashScreen onFinish={handleFinishSplash} />
    //   ) : (
    //     // Your actual app content goes here
    //     <View className="flex-1 items-center justify-center bg-black">
    //       <Text className="text-2xl font-bold text-white">
    //         Your App Content
    //       </Text>
    //     </View>
    //   )}
    // </View>
    <SafeAreaView className='bg-black flex-1'>
      <StepOne />
    </SafeAreaView>
  );
}