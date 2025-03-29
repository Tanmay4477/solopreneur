import React from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import MarketplaceItem from './MarketplaceItem';

// Define interfaces for the data structure
export interface MarketplaceItemData {
  id: string;
  thumbnail: string;
  category: string;
  title: string;
  startingPrice: number;
  sellerCount: number;
  rating: number;
}

// Define the layout types
type LayoutType = 'horizontal' | 'grid' | 'featured';

// Define props for the MarketplaceSection component
interface MarketplaceSectionProps {
  title: string;
  items: MarketplaceItemData[];
  layout?: LayoutType;
  onItemPress?: (item: MarketplaceItemData) => void;
  onSeeAllPress?: () => void;
}

/**
 * MarketplaceSection Component
 * 
 * A container component for displaying marketplace items in different layouts.
 */
const MarketplaceSection: React.FC<MarketplaceSectionProps> = ({ 
  title, 
  items = [], 
  layout = 'horizontal',
  onItemPress = () => {},
  onSeeAllPress = () => {}
}) => {
  // Render item for different layouts
  const renderItem = ({ item, index }: { item: MarketplaceItemData, index: number }) => {
    if (layout === 'featured' && index === 0) {
      return (
        <MarketplaceItem
          thumbnail={item.thumbnail}
          category={item.category}
          title={item.title}
          startingPrice={item.startingPrice}
          sellerCount={item.sellerCount}
          rating={item.rating}
          onPress={() => onItemPress(item)}
          featured={true}
        />
      );
    }
    
    return (
      <MarketplaceItem
        thumbnail={item.thumbnail}
        category={item.category}
        title={item.title}
        startingPrice={item.startingPrice}
        sellerCount={item.sellerCount}
        rating={item.rating}
        onPress={() => onItemPress(item)}
      />
    );
  };

  return (
    <View className="my-4">
      {/* Section Header */}
      <View className="flex-row justify-between items-center px-4 mb-2">
        <Text className="text-lg font-bold">{title}</Text>
        <Text 
          className="text-sm text-blue-600"
          onPress={onSeeAllPress}
        >
          See All
        </Text>
      </View>
      
      {/* Items Container */}
      {layout === 'horizontal' && (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 8 }}
        >
          {items.map((item, index) => (
            <View key={item.id || index}>
              {renderItem({ item, index })}
            </View>
          ))}
        </ScrollView>
      )}
      
      {layout === 'grid' && (
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-around' }}
          scrollEnabled={false}
        />
      )}
      
      {layout === 'featured' && (
        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 8 }}
          >
            {items.map((item, index) => (
              <View key={item.id || index}>
                {renderItem({ item, index })}
              </View>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default MarketplaceSection;