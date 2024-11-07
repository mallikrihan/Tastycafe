import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const sweetsData = [
  { id: '1', name: 'Assorted Sweets', image: 'https://tse4.mm.bing.net/th?id=OIP.asvVsugO_ROSP79kq0wMrwHaE1&pid=Api&P=0&h=180' },
  { id: '2', name: 'Halwa', image: 'https://tse4.mm.bing.net/th?id=OIP.asvVsugO_ROSP79kq0wMrwHaE1&pid=Api&P=0&h=180' },
  { id: '3', name: 'Barfi', image: 'https://tse4.mm.bing.net/th?id=OIP.asvVsugO_ROSP79kq0wMrwHaE1&pid=Api&P=0&h=180' },
  { id: '4', name: 'Laddu', image: 'https://tse4.mm.bing.net/th?id=OIP.asvVsugO_ROSP79kq0wMrwHaE1&pid=Api&P=0&h=180' },
  { id: '5', name: 'Penda', image: 'https://tse4.mm.bing.net/th?id=OIP.asvVsugO_ROSP79kq0wMrwHaE1&pid=Api&P=0&h=180' },
  { id: '6', name: 'Bengali Sweets', image: 'https://tse4.mm.bing.net/th?id=OIP.asvVsugO_ROSP79kq0wMrwHaE1&pid=Api&P=0&h=180' },
  { id: '7', name: 'Other Sweets', image: 'https://tse4.mm.bing.net/th?id=OIP.asvVsugO_ROSP79kq0wMrwHaE1&pid=Api&P=0&h=180' },
  { id: '8', name: 'Namkeen/Hotmix', image: 'https://tse4.mm.bing.net/th?id=OIP.asvVsugO_ROSP79kq0wMrwHaE1&pid=Api&P=0&h=180' },
  { id: '9', name: 'Other Sweets', image: 'https://tse4.mm.bing.net/th?id=OIP.asvVsugO_ROSP79kq0wMrwHaE1&pid=Api&P=0&h=180' },
  { id: '10', name: 'Namkeen/Hotmix', image: 'https://tse4.mm.bing.net/th?id=OIP.asvVsugO_ROSP79kq0wMrwHaE1&pid=Api&P=0&h=180' },
];

const IndianSweets = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('ProductDetail', { product: item })}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.text}>{item.name}</Text>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={sweetsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  text: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  arrow: {
    fontSize: 24,
    color: '#888',
  },
});

export default IndianSweets;
