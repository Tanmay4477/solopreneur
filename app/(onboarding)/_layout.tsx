import { Stack } from 'expo-router';

export default function OnboardingLayout() {
    return (
        <Stack>
            <Stack.Screen name="step-one" options={{ headerShown: false }} />
            <Stack.Screen name="step-two" options={{ headerShown: false  }} />
            <Stack.Screen name="step-three" options={{ headerShown: false  }} />
            <Stack.Screen name="step-four" options={{ headerShown: false  }} />
        </Stack>
    )
}