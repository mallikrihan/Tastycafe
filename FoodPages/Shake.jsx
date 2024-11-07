import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet,TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
const sweetsData = [
  { id: '1', name: 'Strawberry Milkshake', image: 'https://tse1.mm.bing.net/th?id=OIP.hVgMXDm8_y749JjJV9PEPgAAAA&pid=Api&P=0&h=180' },
  { id: '2', name: 'Chocolate Milkshake', image: 'https://tse4.mm.bing.net/th?id=OIP.1dT7sW1K-kEhUu58BHstYAAAAA&pid=Api&P=0&h=180' },
  { id: '3', name: 'Vanilla Milkshake', image: 'https://tse1.mm.bing.net/th?id=OIP.qyolLDACJpGcolyTU8OPaAHaLH&pid=Api&P=0&h=180' },
  { id: '4', name: 'Mango Shake', image: 'https://tse3.mm.bing.net/th?id=OIP.FxIVdyW2roZj3RR686gCVgAAAA&pid=Api&P=0&h=180' },
  { id: '5', name: 'Banana Shake', image: 'https://tse3.mm.bing.net/th?id=OIP.5cFwVRBASilXdPJCMII-dwHaLG&pid=Api&P=0&h=180' },
  { id: '6', name: 'Oreo Shake', image: 'https://tse2.mm.bing.net/th?id=OIP.ux5r-MuOYseIM3rz5gLkQAHaNK&pid=Api&P=0&h=180' },
  { id: '7', name: 'Falooda', image: 'https://tse4.mm.bing.net/th?id=OIP.7_sJ7F-IEBVdwfx8gVovegHaM3&pid=Api&P=0&h=180' },
  { id: '8', name: 'Rose Falooda', image: 'https://tse4.mm.bing.net/th?id=OIP.jGBBw5XJ7b9XVuADUeY7kgHaJQ&pid=Api&P=0&h=180' },
  { id: '9', name: 'Kesar Pista Shake', image: 'https://tse3.mm.bing.net/th?id=OIP.q5UHTL_52h-52BV78ZpNNQHaE7&pid=Api&P=0&h=180' },
  { id: '10', name: 'Butterscotch Shake', image: 'https://tse3.mm.bing.net/th?id=OIP.DS12CYe15MIjumx9upAYKgHaLH&pid=Api&P=0&h=180' },
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
