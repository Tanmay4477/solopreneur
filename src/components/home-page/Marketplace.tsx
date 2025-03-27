import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { MarketplaceItem } from '@/app/(tabs)/index';

interface MarketplaceCardProps {
    item: MarketplaceItem;
    onPress: () => void;
}

const MarketplaceCard: React.FC<MarketplaceCardProps> = ({ item, onPress }) => {
    const { title, thumbnail } = item;

    return (
        <TouchableOpacity 
            onPress={onPress}
            className="w-56 mr-4 overflow-hidden rounded-xl"
        >
            <Image 
                source={thumbnail}
                className="w-full h-32 rounded-xl"
                resizeMode="cover"
            />
            
            {/* Optional: Add title overlay if needed */}
            {/* <View className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-60">
                <Text className="text-white font-medium">{title}</Text>
            </View> */}
        </TouchableOpacity>
    );
};

export default MarketplaceCard;