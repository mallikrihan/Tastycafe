import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet ,TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 


const sweetsData = [
  { id: '1', name: 'Vanilla Ice Cream', image: 'https://tse2.mm.bing.net/th?id=OIP.cS-vantzMfqxGxBAvrOgLgHaHa&pid=Api&P=0&h=180' },
  { id: '2', name: 'Chocolate Ice Cream', image: 'https://tse4.mm.bing.net/th?id=OIP.YuZmbxhvO1ACWLFf8S78XQHaKn&pid=Api&P=0&h=180' },
  { id: '3', name: 'Strawberry Ice Cream', image: 'https://tse1.mm.bing.net/th?id=OIP.-f26eNtg6Zs3ioaiG-lYEQHaHa&pid=Api&P=0&h=180' },
  { id: '4', name: 'Mango Ice Cream', image: 'https://tse1.mm.bing.net/th?id=OIP.RrozASBOWJEYMKswo-bIfAHaLH&pid=Api&P=0&h=180' },
  { id: '5', name: 'Butterscotch Ice Cream', image: 'https://tse3.mm.bing.net/th?id=OIP.nu6HXQsQmS-8B35pZQjdEQHaHa&pid=Api&P=0&h=180' },
  { id: '6', name: 'Mint Chocolate Chip', image: 'https://tse3.mm.bing.net/th?id=OIP.-z5035Mn5U3f4HknACd7NwHaLH&pid=Api&P=0&h=180' },
  { id: '7', name: 'Cookies and Cream', image: 'https://tse3.mm.bing.net/th?id=OIP.-JbMKAJveP5l7P61FY6f_AHaLH&pid=Api&P=0&h=180' },
  { id: '8', name: 'Pistachio Ice Cream', image: 'https://tse3.mm.bing.net/th?id=OIP.8nm9WV8KnoRtBYt20o9GowHaFj&pid=Api&P=0&h=180' },
  { id: '9', name: 'Rocky Road', image: 'https://tse1.mm.bing.net/th?id=OIP._a2B4xbXFhleVVVhNnMCAQHaE7&pid=Api&P=0&h=180' },
  { id: '10', name: 'Bubblegum Ice Cream', image: 'https://tse1.mm.bing.net/th?id=OIP.zY0oOjZuAuAMZPgFIf-VeQHaHZ&pid=Api&P=0&h=180' },
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
