import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet,TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 


const sweetsData = [
  { id: '1', name: 'Classic Beef Burger', image: 'https://tse2.mm.bing.net/th?id=OIP.Z34VvdCT6bEordzT-7HgqwHaF-&pid=Api&P=0&h=180' },
  { id: '2', name: 'Cheeseburger', image: 'https://tse2.mm.bing.net/th?id=OIP.wSMH81P0r1d2xFagucH5cAHaE7&pid=Api&P=0&h=180' },
  { id: '3', name: 'Chicken Burger', image: 'https://tse3.mm.bing.net/th?id=OIP.x2vg5HgA4Rl9W12EEh1w1wHaF6&pid=Api&P=0&h=180' },
  { id: '4', name: 'Veggie Burger', image: 'https://tse3.mm.bing.net/th?id=OIP.yI5gJfLqPUelgxN5HLJOSQHaHa&pid=Api&P=0&h=180' },
  { id: '5', name: 'BBQ Bacon Burger', image: 'https://tse1.mm.bing.net/th?id=OIP.zk7WjkocPwY4_np-cbizIgAAAA&pid=Api&P=0&h=180' },
  { id: '6', name: 'Mushroom Swiss Burger', image: 'https://tse3.mm.bing.net/th?id=OIP.xogRQ9A7osenw1azFVOj0wHaFy&pid=Api&P=0&h=180' },
  { id: '7', name: 'Double Cheeseburger', image: 'https://tse2.mm.bing.net/th?id=OIP.XULephKEEE5Obq11QTSTiQHaE8&pid=Api&P=0&h=180' },
  { id: '8', name: 'Spicy Chicken Burger', image: 'https://tse2.mm.bing.net/th?id=OIP.6YcDsJ-24K_rIgRCDfDtYQHaHa&pid=Api&P=0&h=180' },
  { id: '9', name: 'Fish Burger', image: 'https://tse1.mm.bing.net/th?id=OIP.R4Mc9F2CsPLxNcibmO83mwHaF7&pid=Api&P=0&h=180' },
  { id: '10', name: 'Turkey Burger', image: 'https://tse1.mm.bing.net/th?id=OIP.ZKNRJZjk___c0h1DtAZNZQHaFj&pid=Api&P=0&h=180' },
];


const IndianSweets = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('ProductDetailsScreen', { product: item })}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.text}>{item.name}</Text>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <Ionicons onPress={() => navigation.goBack()}name="arrow-back" size={24} color="#888" />
        <TextInput 
          placeholder="Search sweets..." 
          style={styles.searchBar} 
        />
        <Ionicons name="search" size={24} color="#888" style={styles.searchIcon} />
      </View>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#f8f8f8',
  },
  searchBar: {
    flex: 1,
    backgroundColor: '#eaeaea',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
    marginLeft: 10,
  },
  searchIcon: {
    marginLeft: 10,
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
