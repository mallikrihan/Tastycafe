// ExploreScreen.jsx
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ExploreScreen = () => {
  const navigation = useNavigation();

  const foodCategories = [
    { label: 'Pizza', image: 'https://tse2.mm.bing.net/th?id=OIP.whxJyvOFUxVXA4YjWmy-TwHaE8&pid=Api&P=0&h=180' },
    { label: 'Burgers', image: 'https://tse3.mm.bing.net/th?id=OIP.XEh_-wsbPoVHZKHpv9Q_8gHaEi&pid=Api&P=0&h=180' },
    { label: 'Sushi', image: 'https://tse1.mm.bing.net/th?id=OIP.O1HGvA_-Ut4WlrcuMc3K5wHaE6&pid=Api&P=0&h=180' },
    { label: 'Pasta', image: 'https://tse1.mm.bing.net/th?id=OIP.vCcZCMcXk7T65H8J0xvaVAHaGj&pid=Api&P=0&h=180' },
    { label: 'Salads', image: 'https://tse3.mm.bing.net/th?id=OIP.G3SgERe0PAPJDZsNRl7q4AHaFj&pid=Api&P=0&h=180' },
    { label: 'Desserts', image: 'https://tse2.mm.bing.net/th?id=OIP.mVTmjUF5RNODfm04tFkg1QHaGc&pid=Api&P=0&h=180' },
    { label: 'Shakes', image: 'https://tse1.mm.bing.net/th?id=OIP.lUQn2jSutVZD9WfkNDwzfwHaE7&pid=Api&P=0&h=180' },
    { label: 'Seafood', image: 'https://tse1.mm.bing.net/th?id=OIP.4nWJREtFXdVMvW3FQT_RvgHaHa&pid=Api&P=0&h=180' },
    { label: 'Steak', image: 'https://tse2.mm.bing.net/th?id=OIP.zptQcSYUNYzCmP9-XXKYiQHaEK&pid=Api&P=0&h=180' },
    { label: 'Tacos', image: 'https://tse3.mm.bing.net/th?id=OIP.mXQ9uPSZGGPWyB4LUpNVeQHaE8&pid=Api&P=0&h=180' },
    { label: 'Soup', image: 'https://tse1.mm.bing.net/th?id=OIP.hzDMLssRTRdPxbl4q9h6RgHaE8&pid=Api&P=0&h=180' },
    { label: 'Noodles', image: 'https://tse3.mm.bing.net/th?id=OIP.BfAuP0_qWySDMK8vl1tHNAHaE7&pid=Api&P=0&h=180' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore Food Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
        {foodCategories.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.itemContainer}
            onPress={() => navigation.navigate('FoodCategoryScreen', { category: item })}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.label}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
    
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    color: 'black',
  },
  scrollView: {
    flexDirection: 'row',
  },
  itemContainer: {
    marginRight: 15,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 15,
    padding: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
  },
  label: {
    marginTop: 8,
    fontSize: 13,
    color: '#333',
  },
});

export default ExploreScreen;
