import React, { useEffect } from 'react';
import { View, Image, Dimensions } from 'react-native';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming, 
  withSequence, 
  withDelay,
  Easing
} from 'react-native-reanimated';

const { width } = Dimensions.get('window');

interface CustomSplashScreenProps {
  onFinish: () => void;
}

const CustomSplashScreen: React.FC<CustomSplashScreenProps> = ({ onFinish }) => {
  // Animation values
  const rectangleSize = useSharedValue(width);
  const rectanglePosition = useSharedValue(0);
  const logoOpacity = useSharedValue(0);
  
  useEffect(() => {
    // Start the animation sequence
    // 1. Animate rectangle from big to small
    rectangleSize.value = withSequence(
      withTiming(width, { duration: 0 }),
      withTiming(100, { duration: 1000, easing: Easing.bezier(0.25, 0.1, 0.25, 1) })
    );
    
    // 2. Move the rectangle
    rectanglePosition.value = withSequence(
      withTiming(0, { duration: 0 }),
      withTiming(width / 2 - 50, { duration: 1000, easing: Easing.bezier(0.25, 0.1, 0.25, 1) })
    );
    
    // 3. Show the logo after rectangle animation
    logoOpacity.value = withDelay(
      1000, 
      withTiming(1, { duration: 500 })
    );
    
    // 4. Finish the splash screen after 2 seconds
    const timer = setTimeout(() => {
      onFinish();
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Animated styles for rectangle
  const rectangleStyle = useAnimatedStyle(() => {
    return {
      width: rectangleSize.value,
      height: rectangleSize.value,
      transform: [{ translateX: rectanglePosition.value }]
    };
  });
  
  // Animated styles for logo
  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: logoOpacity.value
    };
  });
  
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Animated.View 
        className="absolute bg-blue-500" 
        style={rectangleStyle} 
      />
      <Animated.View 
        className="absolute items-center justify-center" 
        style={logoStyle}
      >
        {/* Replace with your actual logo */}
        <Image 
          source={require('../../assets/images/logo.png')} 
          className="w-40 h-40"
          resizeMode="contain"
        />
      </Animated.View>
    </View>
  );
};

export default CustomSplashScreen;