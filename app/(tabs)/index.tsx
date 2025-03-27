import { useState } from 'react';
import { Image, SafeAreaView, Text, View, TextInput, TouchableOpacity, ScrollView, StatusBar, ImageSourcePropType } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import CourseCard from '@/src/components/home-page/CourseCard';
import MarketplaceCard from '@/src/components/home-page/Marketplace';

export interface Course {
  id: number;
  title: string;
  category: string;
  instructor: string;
  enrollments: number;
  price: number;
  originalPrice?: number;
  thumbnail: ImageSourcePropType;
  hasVideo: boolean;
}

export interface MarketplaceItem {
  id: number;
  title: string;
  thumbnail: ImageSourcePropType;
}

export default function Home(): JSX.Element {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState<string>('');

    const topCourses: Course[] = [
        {
            id: 1,
            title: 'Figma UI UX Design Essentials',
            category: 'Design',
            instructor: 'Jane Cooper',
            enrollments: 2001,
            price: 115,
            originalPrice: 145,
            thumbnail: require('@/assets/images/emoji2.png'),
            hasVideo: true
        },
        {
            id: 2,
            title: 'Figma UI UX Design Advanced',
            category: 'Design',
            instructor: 'Jane Cooper',
            enrollments: 2001,
            price: 145,
            originalPrice: 180,
            thumbnail: require('@/assets/images/emoji3.png'),
            hasVideo: false
        }
    ];

    const marketplaceItems: MarketplaceItem[] = [
        {
            id: 1,
            title: 'Design Services Pack',
            thumbnail: require('@/assets/images/emoji2.png')
        },
        {
            id: 2,
            title: 'Development Pack',
            thumbnail: require('@/assets/images/emoji1.png')
        }
    ];

    const navigateToSearch = (): void => {
        console.log('Navigate to search with query:', searchQuery);
        // router.push('/(search)');
    };

    const navigateToCourse = (courseId: number): void => {
        console.log('Navigate to course:', courseId);
        // router.push(`/(courses)/${courseId}`);
    };

    const navigateToMarketplace = (itemId: number): void => {
        console.log('Navigate to marketplace item:', itemId);
        // router.push(`/(marketplace)/${itemId}`);
    };
    
    const navigateToProfile = (): void => {
        console.log('Navigate to profile');
        // router.push('/(profile)');
    };

    return (
        <SafeAreaView className="flex-1 bg-black">
            <StatusBar barStyle="light-content" />
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Header with greeting and profile */}
                <View className="flex-row justify-between items-center px-6 pt-4 pb-2">
                    <View>
                        <Text className="text-white font-normal">Hello, Tanmay Jain!</Text>
                    </View>
                    <TouchableOpacity onPress={navigateToProfile}>
                        <Image 
                            source={require('@/assets/images/emoji3.png')} 
                            className="w-12 h-12 rounded-full border-2 border-orange-500"
                        />
                    </TouchableOpacity>
                </View>
                
                {/* Find course section */}
                <View className="px-6 pb-6">
                    <Text className="text-white text-4xl font-bold mb-1">Find best course</Text>
                    <Text className="text-white text-4xl font-bold mb-2">for you</Text>
                    <Text className="text-gray-400 mb-4">We have more than 90+ courses</Text>
                    
                    {/* Search bar */}
                    <View className="flex-row items-center bg-gray-900 rounded-lg px-4 py-3 mb-4">
                        <Feather name="search" size={20} color="#9CA3AF" />
                        <TextInput
                            placeholder="Search course, topic, mentor..."
                            placeholderTextColor="#6B7280"
                            className="ml-2 flex-1 text-white"
                            value={searchQuery}
                            onChangeText={setSearchQuery}
                        />
                        <TouchableOpacity 
                            onPress={navigateToSearch}
                            className="bg-gray-800 p-1 rounded"
                        >
                            <Feather name="sliders" size={18} color="#9CA3AF" />
                        </TouchableOpacity>
                    </View>
                </View>
                
                {/* Top Courses section */}
                <View className="mb-6">
                    <Text className="text-white text-2xl font-bold mb-4 px-6">Top Courses for you</Text>
                    <ScrollView 
                        horizontal 
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingLeft: 24, paddingRight: 12 }}
                    >
                        {topCourses.map(course => (
                            <CourseCard 
                                key={course.id} 
                                course={course} 
                                onPress={() => navigateToCourse(course.id)}
                            />
                        ))}
                    </ScrollView>
                </View>
                
                {/* Top Marketplace section */}
                <View className="mb-8">
                    <Text className="text-white text-2xl font-bold mb-4 px-6">Top Market Place</Text>
                    <ScrollView 
                        horizontal 
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingLeft: 24, paddingRight: 12 }}
                    >
                        {marketplaceItems.map(item => (
                            <MarketplaceCard 
                                key={item.id} 
                                item={item} 
                                onPress={() => navigateToMarketplace(item.id)}
                            />
                        ))}
                    </ScrollView>
                </View>
            </ScrollView>
            
            {/* Bottom Navigation */}
            <View className="flex-row justify-around items-center py-4 bg-black border-t border-gray-900">
                <TouchableOpacity className="items-center">
                    <Ionicons name="home" size={24} color="#4CAF50" />
                    <Text className="text-xs text-green-500 mt-1">Home</Text>
                </TouchableOpacity>
                
                <TouchableOpacity className="items-center">
                    <Ionicons name="newspaper-outline" size={24} color="#9CA3AF" />
                    <Text className="text-xs text-gray-400 mt-1">Marketplace</Text>
                </TouchableOpacity>
                
                <TouchableOpacity className="items-center">
                    <Ionicons name="book-outline" size={24} color="#9CA3AF" />
                    <Text className="text-xs text-gray-400 mt-1">Course</Text>
                </TouchableOpacity>
                
                <TouchableOpacity className="items-center">
                    <Ionicons name="people-outline" size={24} color="#9CA3AF" />
                    <Text className="text-xs text-gray-400 mt-1">Community</Text>
                </TouchableOpacity>
                
                <TouchableOpacity className="items-center">
                    <Ionicons name="person-outline" size={24} color="#9CA3AF" />
                    <Text className="text-xs text-gray-400 mt-1">Course</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}