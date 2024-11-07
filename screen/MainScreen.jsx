// MainPage.js
import React from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

// const locations = [
//   { id: '1', name: 'Downtown' },
//   { id: '2', name: 'Uptown' },
//   { id: '3', name: 'Midtown' },
//   { id: '4', name: 'Suburbs' },
//   { id: '5', name: 'Beachside' },
// ];

const LocationCard = ({ name }) => (
  <TouchableOpacity style={styles.locationCard}>
    <Icon name="location-outline" size={24} color="#fff" />
    <Text style={styles.locationText}>{name}</Text>
  </TouchableOpacity>
);

const MainPage = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <LinearGradient colors={['#ff6f61', '#ff8c42']} style={styles.header}>
        <Icon name="location" size={24} color="#fff" />
        <Text style={styles.headerTitle}>Select Location</Text>
      </LinearGradient>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#888" />
        <TextInput
          placeholder="Search for food, location, etc."
          style={styles.searchInput}
        />
      </View>
{/* const items = [
  { name: 'Indian Sweets', image: require('../assets/sweets.png') },
  { name: 'Pizzas', image: require('../assets/pizza.png') },
  { name: 'Shake', image: require('../assets/shake.png') },
  { name: 'Burgers', image: require('../assets/Burger.png') },
  { name: 'Deepavali Gifting', image: require('../assets/Diwali.png') },
  { name: 'Biryani', image: require('../assets/Biryani.png') },
  { name: 'Ice-Cream', image: require('../assets/ice cream.png') },
  { name: 'Pasta', image: require('../assets/pasta.png') },
]; */}
      {/* Location List */}
      {/* <FlatList
        data={locations}
        renderItem={({ item }) => <LocationCard name={item.name} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.locationList}
      /> */}
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    color: '#fff',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    margin: 20,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    alignItems: 'center',
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
    fontSize: 16,
  },
  locationList: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  locationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ff6f61',
    borderRadius: 15,
    padding: 15,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },

  
  locationText: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 10,
  },
});

