import { Stack } from 'expo-router';

export default function OnboardingLayout() {
    return (
        <Stack>
            <Stack.Screen name="step-one" options={{ headerShown: false }} />
            <Stack.Screen name="step-two" options={{ title: 'StepTwo' }} />
            <Stack.Screen name="step-three" options={{ title: 'StepThree' }} />
            <Stack.Screen name="step-four" options={{ title: 'StepFour' }} />
        </Stack>
    )
}