// FoodCategoryScreen.jsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const FoodCategoryScreen = ({ route }) => {
  const { category } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category.label}</Text>
      <Image source={{ uri: category.image }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
});

export default FoodCategoryScreen;
