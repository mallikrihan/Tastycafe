// import React from 'react';
// import { View, Text } from 'react-native';

// export default function FoodDetailScreen({ route }) {
//   const { item } = route.params;

//   return (
//     <View>
//       <Text>{item.name}</Text>
//       <Text>mallik</Text>
//     </View>
//   );
// }

import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';

const hotels = [
  {
    id: '1',
    name: 'Dominos Chicken Fiesta',
    distance: '3.9 km',
    time: '25-30 mins',
    rating: 3.9,
    ratingsCount: '5.9K+ ratings',
    tags: ['Pizzas, Italian', 'Pastas'],
    offer: 'Extra 10% off above ₹400 + Free Delivery',
    category: 'Top Picks',
    image:'https://tse4.mm.bing.net/th?id=OIP.8gMkiU4Nzvv5T0LwAFPd5AHaEK&pid=Api&P=0&h=180',

  },
  // Add more hotel items here
];


const HotelItem = ({ item, }) => (
  <View style={styles.hotelContainer}>
    {/* <Image source={{ uri: foodItems.image }} style={styles.image} /> */}
    <View style={styles.header}>
      <Text style={styles.hotelName}>{item.name}</Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>{item.rating}</Text>
        <Text style={styles.ratingsCount}>{item.ratingsCount}</Text>
        {/* <Text style={styles.image}>{item.image}</Text> */}
        
      </View>
    </View>
    <Text style={styles.details}>{item.time} • {item.distance}</Text>
    {/* <Text style={styles.tags}>{item.tags.join(', ')}</Text>  */}
    <Text style={styles.offer}>{item.offer}</Text>
  </View>
);

export default function FoodDetailScreen({ route }) {
  const { item } = route.params;
  const navigation = useNavigation();
 
  const hotelMenu = item.foodItems;
  console.log(hotelMenu);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons onPress={() => navigation.goBack()} name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        <Text style={styles.headerText}>{item.name}</Text>
        <TouchableOpacity
        onPress={() => navigation.navigate('CartPage')}
        >
          <Ionicons name="cart-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput placeholder="Search for dishes" style={styles.searchInput} />
        <Ionicons name="search" size={20} color="gray" style={styles.searchIcon} />
        <Ionicons name="mic" size={20} color="gray" style={styles.voiceIcon} />
      </View>

      {/* Filter Buttons */}
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton}>
          <FontAwesome name="circle" size={12} color="green" />
          <Text style={styles.filterText}>Veg</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <FontAwesome name="circle" size={12} color="red" />
          <Text style={styles.filterText}>Non-Veg</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Ratings 4.0+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Bestseller</Text>
        </TouchableOpacity>
      </View>


{/* new cart page */}

      

    {/* cart add new end */}





      {/* Hotel List */}
      <FlatList
        data={hotelMenu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <HotelItem item={item} />}
        ListHeaderComponent={<Text style={styles.categoryHeader}>Top Picks</Text>}
        contentContainerStyle={styles.hotelList}
      />
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 10 },
  headerText: { fontSize: 20, fontWeight: 'bold' },
  searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f2f2f2', borderRadius: 10, paddingHorizontal: 10, marginVertical: 10 },
  searchInput: { flex: 1, padding: 8 },
  searchIcon: { marginLeft: 10 },
  voiceIcon: { marginLeft: 10 },
  filterContainer: { flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 10 },
  filterButton: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 20, backgroundColor: '#f5f5f5' },
  filterText: { marginLeft: 4, fontSize: 12, color: '#333' },
  hotelList: { paddingTop: 10 },
  hotelContainer: { padding: 15, borderRadius: 10, backgroundColor: '#fff', elevation: 3, marginBottom: 15 },
  hotelName: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  ratingContainer: { flexDirection: 'row', alignItems: 'center' },
  rating: { color: 'green', fontWeight: 'bold', marginRight: 5 },
  ratingsCount: { color: '#666', fontSize: 12 },
  details: { color: '#777', fontSize: 12, marginVertical: 5 },
  tags: { color: '#777', fontSize: 12 },
  offer: { color: 'orange', fontSize: 12, marginTop: 5 },
  categoryHeader: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
});
