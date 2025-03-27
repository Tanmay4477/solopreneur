import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Course } from '@/app/(tabs)/index';

interface CourseCardProps {
    course: Course;
    onPress: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onPress }) => {
    const { 
        title, 
        category, 
        instructor, 
        enrollments, 
        price, 
        originalPrice, 
        thumbnail, 
        hasVideo 
    } = course;

    return (
        <TouchableOpacity 
            onPress={onPress}
            className="w-64 mr-4 bg-gray-900 rounded-xl overflow-hidden"
        >
            {/* Thumbnail */}
            <View className="relative">
                <Image 
                    source={thumbnail} 
                    className="w-full h-40" 
                    resizeMode="cover"
                />
                {hasVideo && (
                    <View className="absolute inset-0 items-center justify-center">
                        <View className="bg-black bg-opacity-40 rounded-full p-2">
                            <Ionicons name="play" size={24} color="white" />
                        </View>
                    </View>
                )}
            </View>
            
            {/* Content */}
            <View className="p-3">
                {/* Category */}
                <Text className="text-gray-400 text-xs mb-1">{category}</Text>
                
                {/* Title */}
                <Text className="text-white font-bold text-base mb-2" numberOfLines={2}>
                    {title}
                </Text>
                
                {/* Instructor */}
                <View className="flex-row items-center mb-2">
                    <Image 
                        source={require('@/assets/images/emoji2.png')}
                        className="w-6 h-6 rounded-full mr-2"
                    />
                    <View>
                        <Text className="text-white text-xs">{instructor}</Text>
                        <Text className="text-gray-500 text-xs">{enrollments} Enrolled</Text>
                    </View>
                </View>
                
                {/* Price */}
                <View className="flex-row items-center justify-between">
                    <Text className="text-white font-bold">${price}</Text>
                    {originalPrice && (
                        <Text className="text-gray-500 line-through ml-2">${originalPrice}</Text>
                    )}
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default CourseCard;