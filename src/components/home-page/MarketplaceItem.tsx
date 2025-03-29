import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// Define the props interface for the MarketplaceItem component
export interface MarketplaceItemProps {
  thumbnail: string;
  category: string;
  title: string;
  startingPrice: number;
  sellerCount: number;
  rating: number;
  onPress?: () => void;
  featured?: boolean;
}

/**
 * MarketplaceItem Component
 * 
 * A reusable component for displaying marketplace items on the homescreen.
 */
const MarketplaceItem: React.FC<MarketplaceItemProps> = ({ 
  thumbnail, 
  category, 
  title, 
  startingPrice, 
  sellerCount, 
  rating,
  onPress,
  featured = false
}) => {
  // Format price to display with currency symbol
  const formattedPrice = `$${startingPrice.toFixed(2)}`;
  
  // Calculate stars to display based on rating
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  
  return (
    <TouchableOpacity 
      className={`bg-white rounded-xl shadow-sm overflow-hidden ${featured ? 'w-64' : 'w-40'} m-2`}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {/* Thumbnail */}
      <Image 
        source={{ uri: thumbnail }} 
        className={`w-full ${featured ? 'h-40' : 'h-32'} bg-gray-200`}
        resizeMode="cover"
      />
      
      {/* Content Container */}
      <View className="p-2">
        {/* Category */}
        <Text className="text-xs text-gray-500 uppercase">{category}</Text>
        
        {/* Title */}
        <Text 
          className={`font-semibold ${featured ? 'text-base' : 'text-sm'} mt-1`}
          numberOfLines={2} 
        >
          {title}
        </Text>
        
        {/* Price */}
        <Text className="text-xs mt-1">
          Starting from <Text className="font-bold text-green-600">{formattedPrice}</Text>
        </Text>
        
        {/* Bottom Row - Sellers and Rating */}
        <View className="flex-row justify-between items-center mt-2">
          {/* Sellers */}
          <View className="flex-row items-center">
            <FontAwesome name="users" size={12} color="#6B7280" />
            <Text className="text-xs text-gray-500 ml-1">{sellerCount} sellers</Text>
          </View>
          
          {/* Rating */}
          <View className="flex-row items-center">
            <FontAwesome name="star" size={12} color="#F59E0B" />
            <Text className="text-xs text-gray-500 ml-1">{rating.toFixed(1)}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MarketplaceItem;