// ProductCarousel.js
import React, { useState } from 'react';
import { View, Image, FlatList, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const productImages = [
  { id: '1', uri: 'https://tse3.mm.bing.net/th?id=OIP.ZUhRZ_yqzcCEVzQtAI10XwHaDy&pid=Api&P=0&h=180' },
  { id: '2', uri: 'https://tse4.mm.bing.net/th?id=OIP.kXBdcYAZgQX6WdYSlAvkXgHaEW&pid=Api&P=0&h=180' },
  { id: '3', uri: 'https://tse4.mm.bing.net/th?id=OIP.h7_k9_I7rRjfYgxCu0X-iwHaEi&pid=Api&P=0&h=180' },
  { id: '4', uri: 'https://tse1.mm.bing.net/th?id=OIP.-5na9roVYYQGSsHiMvHvEwHaEK&pid=Api&P=0&h=180' },
  { id: '5', uri: 'https://tse4.mm.bing.net/th?id=OIP.m76cgdFQgGQliDR0s_qfxQHaE2&pid=Api&P=0&h=180' },
];

const ProductScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.uri }} style={styles.image} />
    </View>
  );

  const handleViewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  };

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50, // Adjust as needed
  };

  const renderDots = () => {
    return (
      <View style={styles.dotsContainer}>
        {productImages.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { backgroundColor: index === activeIndex ? 'black' : 'lightgray' },
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={productImages}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={screenWidth} // Snap to item width
        decelerationRate="fast"
        pagingEnabled
        onViewableItemsChanged={handleViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      {renderDots()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#f5f5f5',
  },
  item: {
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '95%',
    height: 130,
    marginTop:10,
    borderRadius: 10,
  },
  dotsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

export default ProductScreen;
