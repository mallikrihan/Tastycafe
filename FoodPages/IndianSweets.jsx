import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importing Ionicons for icons
import { useNavigation } from 'expo-router';

const sweetsData = [
  { id: '1', name: 'Assorted Sweets', image: 'https://tse4.mm.bing.net/th?id=OIP.asvVsugO_ROSP79kq0wMrwHaE1&pid=Api&P=0&h=180' },
  { id: '2', name: 'Halwa', image: 'https://tse3.mm.bing.net/th?id=OIP.gpQHitVQiP1BcoJOV7-RQgHaFR&pid=Api&P=0&h=180' },
  { id: '3', name: 'Barfi', image: 'https://tse2.mm.bing.net/th?id=OIP.CtP38dGkIPoctOMhzkggkwHaFj&pid=Api&P=0&h=180' },
  { id: '4', name: 'Laddu', image: 'https://tse1.mm.bing.net/th?id=OIP.8cBdU_VL-4gDDP9C1KuH9AAAAA&pid=Api&P=0&h=180' },
  { id: '5', name: 'Penda', image: 'https://tse3.mm.bing.net/th?id=OIP.dyUx_dw-ZNpEbQx25LxRyAHaE8&pid=Api&P=0&h=180' },
  { id: '6', name: 'Bengali Sweets', image: 'https://tse2.mm.bing.net/th?id=OIP.VEsW5z7JyGpmuw59h5LH6QHaFZ&pid=Api&P=0&h=180' },
  { id: '1', name: 'Assorted Sweets', image: 'https://tse4.mm.bing.net/th?id=OIP.asvVsugO_ROSP79kq0wMrwHaE1&pid=Api&P=0&h=180' },
  { id: '2', name: 'Halwa', image: 'https://tse3.mm.bing.net/th?id=OIP.gpQHitVQiP1BcoJOV7-RQgHaFR&pid=Api&P=0&h=180' },
  { id: '3', name: 'Barfi', image: 'https://tse2.mm.bing.net/th?id=OIP.CtP38dGkIPoctOMhzkggkwHaFj&pid=Api&P=0&h=180' },
  { id: '4', name: 'Laddu', image: 'https://tse1.mm.bing.net/th?id=OIP.8cBdU_VL-4gDDP9C1KuH9AAAAA&pid=Api&P=0&h=180' },
  { id: '5', name: 'Penda', image: 'https://tse3.mm.bing.net/th?id=OIP.dyUx_dw-ZNpEbQx25LxRyAHaE8&pid=Api&P=0&h=180' },
  { id: '6', name: 'Bengali Sweets', image: 'https://tse2.mm.bing.net/th?id=OIP.VEsW5z7JyGpmuw59h5LH6QHaFZ&pid=Api&P=0&h=180' },

];

const IndianSweets = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('ProductDetailsScreen', { product: item })}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.text}>{item.name}</Text>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );
//  const navigation = useNavigation();

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
