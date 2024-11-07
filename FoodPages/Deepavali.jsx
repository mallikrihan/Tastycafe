import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet,TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 


const sweetsData = [
  { id: '1', name: 'Kaju Katli', image: 'https://tse1.mm.bing.net/th?id=OIP.NUBrnKyNWYaGiMDFR0YPqAHaHa&pid=Api&P=0&h=180' },
  { id: '2', name: 'Motichoor Laddu', image: 'https://tse1.mm.bing.net/th?id=OIP.4EZom01k97kZdRs9eT9KVQHaE8&pid=Api&P=0&h=180' },
  { id: '3', name: 'Gulab Jamun', image: 'https://tse1.mm.bing.net/th?id=OIP.jHVOWwSFJmKm4WYjoOIS0QHaFk&pid=Api&P=0&h=180' },
  { id: '4', name: 'Jalebi', image: 'https://tse1.mm.bing.net/th?id=OIP.LVyYTaJakwI4hPnIngLNIwHaGo&pid=Api&P=0&h=180' },
  { id: '5', name: 'Rasgulla', image: 'https://tse3.mm.bing.net/th?id=OIP.mDroT-KJcs4gFtpduyf3yQHaHa&pid=Api&P=0&h=180' },
  { id: '6', name: 'Soan Papdi', image: 'https://tse4.mm.bing.net/th?id=OIP.S4DqudheYzIDc3sxOqh5LQHaHa&pid=Api&P=0&h=180' },
  { id: '7', name: 'Badam Halwa', image: 'https://tse3.mm.bing.net/th?id=OIP.Hh5A4EVQHHbXarYwoxq35gAAAA&pid=Api&P=0&h=180' },
  { id: '8', name: 'Besan Laddu', image: 'https://tse1.mm.bing.net/th?id=OIP.71eksLpUWS3-uwiBUHgyGAHaHa&pid=Api&P=0&h=180' },
  { id: '9', name: 'Chakli', image: 'https://tse1.mm.bing.net/th?id=OIP.efJwxKf88vYYU39jzsNMKgHaHa&pid=Api&P=0&h=180' },
  { id: '10', name: 'Namak Pare', image: 'https://tse1.mm.bing.net/th?id=OIP.iHiM35Li5qqbne9NnNdMBAHaE1&pid=Api&P=0&h=180' },
  { id: '11', name: 'Chirote', image: 'https://tse3.mm.bing.net/th?id=OIP._SzYWr6HyOA39uk-OcPUSwHaEK&pid=Api&P=0&h=180' },
  { id: '12', name: 'Shakkar Pare', image: 'https://tse1.mm.bing.net/th?id=OIP.TgZyteIEBPeAyV3olEFd6AHaFc&pid=Api&P=0&h=180' },
  { id: '13', name: 'Mathri', image: 'https://tse1.mm.bing.net/th?id=OIP.IgDx-3YKqhAUZ19umcAykQHaE8&pid=Api&P=0&h=180' },
  { id: '14', name: 'Pista Roll', image: 'https://tse4.mm.bing.net/th?id=OIP.gjexMRzNqCLa4I86pVXasgHaFj&pid=Api&P=0&h=180' },
  { id: '15', name: 'Sandesh', image: 'https://tse1.mm.bing.net/th?id=OIP.koSunlTU_dr2zod2UnMvTwHaHa&pid=Api&P=0&h=180' },
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
