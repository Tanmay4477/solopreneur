import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ title: 'Home' }} />
            <Tabs.Screen name="marketplace" options={{ title: 'Marketplace' }} />
            <Tabs.Screen name="course" options={{ title: 'Course' }} />
            <Tabs.Screen name="community" options={{ title: 'Community' }} />
            <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
        </Tabs>
    )
}