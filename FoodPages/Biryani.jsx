import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet,TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const sweetsData = [
  { id: '1', name: 'Hyderabadi Biryani', image: 'https://tse3.mm.bing.net/th?id=OIP.l62xwzjz4Hd3ueArOt4lugHaHa&pid=Api&P=0&h=180' },
  { id: '2', name: 'Chicken Biryani', image: 'https://tse2.mm.bing.net/th?id=OIP.Q4f5lR46RdwAqe9hXJ7dlAHaF7&pid=Api&P=0&h=180' },
  { id: '3', name: 'Mutton Biryani', image: 'https://tse1.mm.bing.net/th?id=OIP.cJ47_OVh1HDlaqmYEqIq8wHaE6&pid=Api&P=0&h=180' },
  { id: '4', name: 'Vegetable Biryani', image: 'https://tse1.mm.bing.net/th?id=OIP.yh-lYonX_sPwlJA4vNQ6BAHaGL&pid=Api&P=0&h=180' },
  { id: '5', name: 'Egg Biryani', image: 'https://tse1.mm.bing.net/th?id=OIP.C4aVXNlwxeJcs2mam86tBgHaHa&pid=Api&P=0&h=180' },
  { id: '6', name: 'Fish Biryani', image: 'https://tse1.mm.bing.net/th?id=OIP.JH0E_Tdm3jDDF-DPUZ9v-gHaGS&pid=Api&P=0&h=180' },
  { id: '7', name: 'Prawn Biryani', image: 'https://tse2.mm.bing.net/th?id=OIP.d0bvI2aH58bCscFG79czxwHaLG&pid=Api&P=0&h=180' },
  { id: '8', name: 'Paneer Biryani', image: 'https://tse4.mm.bing.net/th?id=OIP.XKeHVV0sCJci1PE0qATTfQHaE8&pid=Api&P=0&h=180' },
  { id: '9', name: 'Kolkata Biryani', image: 'https://tse1.mm.bing.net/th?id=OIP.P9UBV8Q9a3E6SYTOcfczSQHaE8&pid=Api&P=0&h=180' },
  { id: '10', name: 'Lucknowi Biryani', image: 'https://tse2.mm.bing.net/th?id=OIP.Py8QHJxk9zrVSHAPU1-m5AHaEK&pid=Api&P=0&h=180' },
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
