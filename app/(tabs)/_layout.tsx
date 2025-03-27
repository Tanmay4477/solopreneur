import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';


export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: '#8eb638' }}>
            <Tabs.Screen name="index" options={{ headerShown: false, title: 'Home', tabBarIcon: ({color}) => <FontAwesome size={28} name="home" color={color} />}} />
            <Tabs.Screen name="marketplace" options={{ headerShown: false, title: 'Marketplace', tabBarIcon: ({color}) => <Ionicons size={28} name="storefront" color={color} />}} />
            <Tabs.Screen name="course" options={{ headerShown: false, title: 'Course', tabBarIcon: ({color}) => <Feather size={28} name="book-open" color={color} />}} />
            <Tabs.Screen name="community" options={{ headerShown: false, title: 'Community', tabBarIcon: ({color}) => <FontAwesome size={28} name="group" color={color} />}} />
            <Tabs.Screen name="profile" options={{ headerShown: false, title: 'Profile', tabBarIcon: ({color}) => <Ionicons name="person-circle" size={28} color={color} />}} />
        </Tabs>
    )
}