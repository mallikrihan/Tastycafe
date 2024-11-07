import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet,TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const sweetsData = [
  { id: '1', name: 'Margherita', image: 'https://tse2.mm.bing.net/th?id=OIP.OZoxhKB9OR4dals4dI_7nAHaFs&pid=Api&P=0&h=180' },
  { id: '2', name: 'Pepperoni', image: 'https://tse1.mm.bing.net/th?id=OIP.C5VNu-rkCHZ_aQjHxn3NLwHaEo&pid=Api&P=0&h=180' },
  { id: '3', name: 'BBQ Chicken', image: 'https://tse2.mm.bing.net/th?id=OIP.aRVEDF7qfHYyCb1SBW0fIQHaEK&pid=Api&P=0&h=180' },
  { id: '4', name: 'Hawaiian', image: 'https://tse3.mm.bing.net/th?id=OIP.fZyPaYIt5--QCwKTwTz6xgHaLH&pid=Api&P=0&h=180' },
  { id: '5', name: 'Veggie Supreme', image: 'https://tse4.mm.bing.net/th?id=OIP.YWNAHPBRjeayunSfpAkhTAHaEJ&pid=Api&P=0&h=180' },
  { id: '6', name: 'Buffalo Chicken', image: 'https://tse4.mm.bing.net/th?id=OIP.6DqRdlyek60ET2y5MHQ0agHaJE&pid=Api&P=0&h=180' },
  { id: '7', name: 'Meat Lover’s', image: 'https://tse3.mm.bing.net/th?id=OIP.uz3bUjiGWN8bL_9YT4xOFQHaFj&pid=Api&P=0&h=180' },
  { id: '8', name: 'Four Cheese', image: 'https://tse4.mm.bing.net/th?id=OIP.ByvmoAn5-q2oMdwbqB7uPgHaEK&pid=Api&P=0&h=180' },
  { id: '9', name: 'Mexican Green Wave', image: 'https://tse4.mm.bing.net/th?id=OIP.XREz8rP6k8-K6IJ3ePDnsgHaE6&pid=Api&P=0&h=180' },
  { id: '10', name: 'Spicy Italian', image: 'https://tse1.mm.bing.net/th?id=OIP.2dhr5Ln6cMHIu9SmwE_uBgHaE7&pid=Api&P=0&h=180' },
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
