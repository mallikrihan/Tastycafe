import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet,TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const sweetsData = [
  { id: '1', name: 'Spaghetti Bolognese', image: 'https://tse2.mm.bing.net/th?id=OIP.h6ueYmIlQK8SGF_RzBpNpAHaE8&pid=Api&P=0&h=180' },
  { id: '2', name: 'Penne Arrabbiata', image: 'https://tse2.mm.bing.net/th?id=OIP.eJuNHUuI2DnYzZHO1_XcEQHaLH&pid=Api&P=0&h=180' },
  { id: '3', name: 'Fettuccine Alfredo', image: 'https://tse4.mm.bing.net/th?id=OIP.5FQVYGqITkzhh7HCIClCcAHaHT&pid=Api&P=0&h=180' },
  { id: '4', name: 'Lasagna', image: 'https://tse4.mm.bing.net/th?id=OIP.TsYH1c4KWAjcJtgLKh2i7AHaE8&pid=Api&P=0&h=180' },
  { id: '5', name: 'Macaroni and Cheese', image: 'https://tse2.mm.bing.net/th?id=OIP.oLa_Nk8TfBWOr8BcEFE0sgHaLG&pid=Api&P=0&h=180' },
  { id: '6', name: 'Pasta Carbonara', image: 'https://tse2.mm.bing.net/th?id=OIP.YLRgZ2i9mHrq5qz5jHJDOAHaE8&pid=Api&P=0&h=180' },
  { id: '7', name: 'Ravioli', image: 'https://tse4.mm.bing.net/th?id=OIP.R6WQ_m2FKjSZlAlGtqxBqgAAAA&pid=Api&P=0&h=180' },
  { id: '8', name: 'Tortellini', image: 'https://tse3.mm.bing.net/th?id=OIP.-PUZGMwUBf0xGf_i2Ej0OQHaJQ&pid=Api&P=0&h=180' },
  { id: '9', name: 'Pesto Pasta', image: 'https://tse3.mm.bing.net/th?id=OIP.iCG_CktMSS-VhhRbB3CKrQHaHa&pid=Api&P=0&h=180' },
  { id: '10', name: 'Gnocchi', image: 'https://tse1.mm.bing.net/th?id=OIP.eL7ZEr8oawExxwCI1cUdRwHaHa&pid=Api&P=0&h=180' },
];


const Pasta = ({ navigation }) => {
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

export default Pasta;
