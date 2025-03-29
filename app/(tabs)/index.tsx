import { useState } from 'react';
import { Image, SafeAreaView, Text, View, TextInput, TouchableOpacity, ScrollView, StatusBar, ImageSourcePropType } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import CourseCard from '@/src/components/home-page/CourseCard';
import MarketplaceSection from '@/src/components/home-page/MarketplaceSection';
import { MarketplaceItemData } from '@/src/components/home-page/MarketplaceSection';

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

    // Marketplace data - converted to match our new component's structure
    const featuredItems: MarketplaceItemData[] = [
        {
          id: '1',
          thumbnail: require('@/assets/images/emoji5.png'),
          category: 'Electronics',
          title: 'Apple iPhone 14 Pro Max 256GB',
          startingPrice: 1099.99,
          sellerCount: 23,
          rating: 4.7
        },
        {
          id: '2',
          thumbnail: require('@/assets/images/emoji3.png'),
          category: 'Home & Kitchen',
          title: 'KitchenAid Stand Mixer Professional',
          startingPrice: 349.99,
          sellerCount: 18,
          rating: 4.8
        }
      ];
      
      const trendingItems: MarketplaceItemData[] = [
        {
          id: '3',
          thumbnail: require('@/assets/images/emoji2.png'),
          category: 'Fashion',
          title: 'Nike Air Jordan 1 High OG',
          startingPrice: 179.99,
          sellerCount: 42,
          rating: 4.5
        },
        {
          id: '4',
          thumbnail: require('@/assets/images/emoji3.png'),
          category: 'Tech',
          title: 'Sony WH-1000XM5 Headphones',
          startingPrice: 399.99,
          sellerCount: 15,
          rating: 4.9
        }
      ];

      const recentItems: MarketplaceItemData[] = [
        {
          id: '5',
          thumbnail: require('@/assets/images/emoji2.png'),
          category: 'Sports',
          title: 'Wilson Evolution Basketball',
          startingPrice: 59.99,
          sellerCount: 12,
          rating: 4.6
        },
        {
          id: '6',
          thumbnail: require('@/assets/images/emoji5.png'),
          category: 'Books',
          title: 'Atomic Habits by James Clear',
          startingPrice: 24.99,
          sellerCount: 30,
          rating: 4.8
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

    const navigateToMarketplace = (item: MarketplaceItemData): void => {
        console.log('Navigate to marketplace item:', item.id);
        // router.push(`/(marketplace)/${item.id}`);
    };
    
    const navigateToProfile = (): void => {
        console.log('Navigate to profile');
        // router.push('/(profile)');
    };

    const handleSeeAllPress = (category: string): void => {
        console.log('See all items in category:', category);
        // router.push(`/(marketplace)/category/${category}`);
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
                
                {/* Marketplace Sections - Using our new components */}
                <View className="mb-6">
                    <Text className="text-white text-2xl font-bold mb-4 px-6">Featured Items</Text>
                    <MarketplaceSection
                        title=""
                        items={featuredItems}
                        layout="featured"
                        onItemPress={navigateToMarketplace}
                        onSeeAllPress={() => handleSeeAllPress('featured')}
                    />
                </View>

                <View className="mb-6">
                    <Text className="text-white text-2xl font-bold mb-4 px-6">Trending Now</Text>
                    <MarketplaceSection
                        title=""
                        items={trendingItems}
                        layout="horizontal"
                        onItemPress={navigateToMarketplace}
                        onSeeAllPress={() => handleSeeAllPress('trending')}
                    />
                </View>

                <View className="mb-8">
                    <Text className="text-white text-2xl font-bold mb-4 px-6">Recently Added</Text>
                    <MarketplaceSection
                        title=""
                        items={recentItems}
                        layout="grid"
                        onItemPress={navigateToMarketplace}
                        onSeeAllPress={() => handleSeeAllPress('recent')}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}