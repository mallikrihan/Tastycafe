import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const foodItems = [
  {
    id: '1',
    name: "Domino's Chicken Fiesta",
    rating: 'NEW',
    time: '20-25 mins',
    type: 'Pizzas, Italian, Pastas',
    location: 'Urban Oasis Mall',
    distance: '2.5 km',
    offer: '30% OFF',
    offerDetails: 'UPTO ₹75',
    image: 'https://tse3.mm.bing.net/th?id=OIP.RcXC8FXwSgbmG6XaeiKnNgGQHZ&pid=Api&P=0&h=180',
    foodItems: [
      {
        id: '1',
        menuName: 'Pizza',
        desc: 'Big size pizza',
        rating: 'NEW',
        time: '20-25 mins',
        type: 'Pizzas, Italian, Pastas',
        location: 'Urban Oasis Mall',
        distance: '2.5 km',
        offer: '30% OFF',
        offerDetails: 'UPTO ₹75',
        image:'https://tse4.mm.bing.net/th?id=OIP.8gMkiU4Nzvv5T0LwAFPd5AHaEK&pid=Api&P=0&h=180',
      },
      {
        id: '2',
        menuName: 'Burger',
        desc: 'Big size pizza',
        rating: '4.0 (16)',
        time: '30-35 mins',
        type: 'Kebabs, Mughlai, Beverages',
        location: 'Lingraj Nagar',
        distance: '5.0 km',
        offer: 'BUY 1 GET 1',
      },
      {
        id: '3',
        menuName: 'Frid Chicken',
        desc: 'Big size pizza',
        rating: '4.3 (1.3K+)',
        time: '30-35 mins',
        type: 'Kebabs, Fast Food, Snacks',
        location: 'Vidya Nagar',
        distance: '5.0 km',
        offer: '₹125 OFF',
        offerDetails: 'Above ₹199',
      },
      {
        id: '4',
        menuName: 'Pizza',
        desc: 'Big size pizza',
        rating: 'NEW',
        time: '20-25 mins',
        type: 'Pizzas, Italian, Pastas',
        location: 'Urban Oasis Mall',
        distance: '2.5 km',
        offer: '30% OFF',
        offerDetails: 'UPTO ₹75',
      },
      {
        id: '5',
        menuName: 'Pizza',
        desc: 'Big size pizza',
        rating: 'NEW',
        time: '20-25 mins',
        type: 'Pizzas, Italian, Pastas',
        location: 'Urban Oasis Mall',
        distance: '2.5 km',
        offer: '30% OFF',
        offerDetails: 'UPTO ₹75',
      },
      {
        id: '6',
        menuName: 'Pizza',
        desc: 'Big size pizza',
        rating: 'NEW',
        time: '20-25 mins',
        type: 'Pizzas, Italian, Pastas',
        location: 'Urban Oasis Mall',
        distance: '2.5 km',
        offer: '30% OFF',
        offerDetails: 'UPTO ₹75',
      },

    ],
  },
  {
    id: '2',
    name: 'Makhani Darbar',
    rating: '4.0 (16)',
    time: '30-35 mins',
    type: 'Kebabs, Mughlai, Beverages',
    location: 'Lingraj Nagar',
    distance: '5.0 km',
    offer: 'BUY 1 GET 1',
    image: 'https://tse2.mm.bing.net/th?id=OIP.soNXYtniBQygOExClZzcvgHaD8&pid=Api&P=0&h=180',
    foodItems: [
      {
        id: '1',
        menuName: 'Pizza1',
        desc: 'Big size pizza1',
        rating: 'NEW1',
        time: '20-25 mins',
        type: 'Pizzas, Italian, Pastas',
        location: 'Urban Oasis Mall',
        distance: '2.5 km',
        offer: '30% OFF',
        offerDetails: 'UPTO ₹75',
      },
      {
        id: '2',
        menuName: 'Burger1',
        desc: 'Big size pizza1',
        rating: '4.0 (16)',
        time: '30-35 mins',
        type: 'Kebabs, Mughlai, Beverages',
        location: 'Lingraj Nagar',
        distance: '5.0 km',
        offer: 'BUY 1 GET 1',
      },
      {
        id: '3',
        menuName: 'Frid Chicken1',
        desc: 'Big size pizza',
        rating: '4.3 (1.3K+)',
        time: '30-35 mins',
        type: 'Kebabs, Fast Food, Snacks',
        location: 'Vidya Nagar',
        distance: '5.0 km',
        offer: '₹125 OFF',
        offerDetails: 'Above ₹199',
      },

    ],
  },
  {
    id: '3',
    name: 'Faasos - Wraps',
    rating: '4.3 (1.3K+)',
    time: '30-35 mins',
    type: 'Kebabs, Fast Food, Snacks',
    location: 'Vidya Nagar',
    distance: '5.0 km',
    offer: '₹125 OFF',
    offerDetails: 'Above ₹199',
    image: 'https://tse4.mm.bing.net/th?id=OIP.V677T2hcXRN9PAacxn_vFAHaE8&pid=Api&P=0&h=180',
    foodItems: [
      {
        id: '3',
        menuName: 'Frid Chicken1',
        desc: 'Big size pizza',
        rating: '4.3 (1.3K+)',
        time: '30-35 mins',
        type: 'Kebabs, Fast Food, Snacks',
        location: 'Vidya Nagar',
        distance: '5.0 km',
        offer: '₹125 OFF',
        offerDetails: 'Above ₹199',
      },
      {
        id: '3',
        menuName: 'Frid Chicken1',
        desc: 'Big size pizza',
        rating: '4.3 (1.3K+)',
        time: '30-35 mins',
        type: 'Kebabs, Fast Food, Snacks',
        location: 'Vidya Nagar',
        distance: '5.0 km',
        offer: '₹125 OFF',
        offerDetails: 'Above ₹199',
      },
      {
        id: '3',
        menuName: 'Frid Chicken1',
        desc: 'Big size pizza',
        rating: '4.3 (1.3K+)',
        time: '30-35 mins',
        type: 'Kebabs, Fast Food, Snacks',
        location: 'Vidya Nagar',
        distance: '5.0 km',
        offer: '₹125 OFF',
        offerDetails: 'Above ₹199',
      },


    ],
  },
  {
    id: '4',
    name: 'The Good Bowl',
    rating: '4.3 (612)',
    time: '30-35 mins',
    type: 'Biryani, North Indian, Pasta',
    location: 'Vidya Nagar',
    distance: '5.0 km',
    offer: 'FLAT DEAL',
    image: 'https://tse3.mm.bing.net/th?id=OIP.hY6_EhFkGW0EwNvSzpKp2AHaDt&pid=Api&P=0&h=180',
    foodItems: [
      {
        id: '3',
        menuName: 'Frid Chicken1',
        desc: 'Big size pizza',
        rating: '4.3 (1.3K+)',
        time: '30-35 mins',
        type: 'Kebabs, Fast Food, Snacks',
        location: 'Vidya Nagar',
        distance: '5.0 km',
        offer: '₹125 OFF',
        offerDetails: 'Above ₹199',
      },
    ]
  },
  {
    id: '5',
    name: 'Spicy Wok',
    rating: '4.5 (100)',
    time: '25-30 mins',
    type: 'Chinese, Noodles, Rice',
    location: 'Downtown Plaza',
    distance: '3.0 km',
    offer: '15% OFF',
    image: 'https://tse1.mm.bing.net/th?id=OIP.hwPo-b_MF-8uxkuvX5CNlwHaHa&pid=Api&P=0&h=180',
    foodItems:[
      {
        id: '3',
        menuName: 'Frid Chicken1',
        desc: 'Big size pizza',
        rating: '4.3 (1.3K+)',
        time: '30-35 mins',
        type: 'Kebabs, Fast Food, Snacks',
        location: 'Vidya Nagar',
        distance: '5.0 km',
        offer: '₹125 OFF',
        offerDetails: 'Above ₹199',
      },
    ]
  },
  {
    id: '6',
    name: 'Sushi World',
    rating: '4.7 (250)',
    time: '40-45 mins',
    type: 'Japanese, Sushi, Asian',
    location: 'Greenwood Avenue',
    distance: '6.0 km',
    offer: 'FREE MISO SOUP',
    image: 'https://tse1.mm.bing.net/th?id=OIP.N_5mGZnctOlSF4zOqSNkHwHaHa&pid=Api&P=0&h=180',
    foodItems:[
      {
        id: '3',
        menuName: 'Frid Chicken1',
        desc: 'Big size pizza',
        rating: '4.3 (1.3K+)',
        time: '30-35 mins',
        type: 'Kebabs, Fast Food, Snacks',
        location: 'Vidya Nagar',
        distance: '5.0 km',
        offer: '₹125 OFF',
        offerDetails: 'Above ₹199',
      },
    ]
  },
  {
    id: '7',
    name: 'Cafe Mocha',
    rating: '4.2 (400)',
    time: '15-20 mins',
    type: 'Coffee, Desserts, Snacks',
    location: 'Central Park',
    distance: '1.5 km',
    offer: '20% OFF',
    image: 'https://tse4.mm.bing.net/th?id=OIP.q4MCd0-XhYc2pf2Cji5kkgHaEo&pid=Api&P=0&h=180',
    foodItems:[
      {
        id: '3',
        menuName: 'Frid Chicken1',
        desc: 'Big size pizza',
        rating: '4.3 (1.3K+)',
        time: '30-35 mins',
        type: 'Kebabs, Fast Food, Snacks',
        location: 'Vidya Nagar',
        distance: '5.0 km',
        offer: '₹125 OFF',
        offerDetails: 'Above ₹199',
      },
    ]
  },
  {
    id: '8',
    name: 'Burger King',
    rating: '4.4 (500)',
    time: '25-30 mins',
    type: 'Burgers, Fast Food',
    location: 'Market Square',
    distance: '4.0 km',
    offer: 'BUY 2 GET 1',
    image: 'https://tse1.mm.bing.net/th?id=OIP.2mHUEm6G2AkJu2UG86kshQHaEK&pid=Api&P=0&h=180',
    foodItems:[
      {
        id: '3',
        menuName: 'Frid Chicken1',
        desc: 'Big size pizza',
        rating: '4.3 (1.3K+)',
        time: '30-35 mins',
        type: 'Kebabs, Fast Food, Snacks',
        location: 'Vidya Nagar',
        distance: '5.0 km',
        offer: '₹125 OFF',
        offerDetails: 'Above ₹199',
      },
    ]
  },
  {
    id: '9',
    name: 'Sweet Tooth Bakery',
    rating: '4.6 (80)',
    time: '10-15 mins',
    type: 'Bakery, Desserts',
    location: 'Riverfront Road',
    distance: '2.0 km',
    offer: 'FREE DELIVERY',
    image: 'https://tse2.mm.bing.net/th?id=OIP.u9sO_328Rxl9POB6l9rJkAHaHa&pid=Api&P=0&h=180',
    foodItems:[
      {
        id: '3',
        menuName: 'Frid Chicken1',
        desc: 'Big size pizza',
        rating: '4.3 (1.3K+)',
        time: '30-35 mins',
        type: 'Kebabs, Fast Food, Snacks',
        location: 'Vidya Nagar',
        distance: '5.0 km',
        offer: '₹125 OFF',
        offerDetails: 'Above ₹199',
      },
    ]
  },
  {
    id: '10',
    name: 'Grill House',
    rating: '4.1 (300)',
    time: '35-40 mins',
    type: 'Grilled Food, BBQ',
    location: 'Hilltop Road',
    distance: '7.0 km',
    offer: '10% OFF',
    image: 'https://tse4.mm.bing.net/th?id=OIP.8gMkiU4Nzvv5T0LwAFPd5AHaEK&pid=Api&P=0&h=180',
    foodItems:[
      {
        id: '3',
        menuName: 'Frid Chicken1',
        desc: 'Big size pizza',
        rating: '4.3 (1.3K+)',
        time: '30-35 mins',
        type: 'Kebabs, Fast Food, Snacks',
        location: 'Vidya Nagar',
        distance: '5.0 km',
        offer: '₹125 OFF',
        offerDetails: 'Above ₹199',
      },
    ]
  },
  {
    id: '11',
    name: 'Grill House',
    rating: '4.1 (300)',
    time: '35-40 mins',
    type: 'Grilled Food, BBQ',
    location: 'Hilltop Road',
    distance: '7.0 km',
    offer: '10% OFF',
    image: 'https://tse4.mm.bing.net/th?id=OIP.8gMkiU4Nzvv5T0LwAFPd5AHaEK&pid=Api&P=0&h=180',
    foodItems:[
      {
        id: '3',
        menuName: 'Frid Chicken1',
        desc: 'Big size pizza',
        rating: '4.3 (1.3K+)',
        time: '30-35 mins',
        type: 'Kebabs, Fast Food, Snacks',
        location: 'Vidya Nagar',
        distance: '5.0 km',
        offer: '₹125 OFF',
        offerDetails: 'Above ₹199',
      },
    ]
  },
  {
    id: '12',
    name: 'Grill House',
    rating: '4.1 (300)',
    time: '35-40 mins',
    type: 'Grilled Food, BBQ',
    location: 'Hilltop Road',
    distance: '7.0 km',
    offer: '10% OFF',
    image: 'https://tse4.mm.bing.net/th?id=OIP.8gMkiU4Nzvv5T0LwAFPd5AHaEK&pid=Api&P=0&h=180',
    foodItems:[
      {
        id: '3',
        menuName: 'Frid Chicken1',
        desc: 'Big size pizza',
        rating: '4.3 (1.3K+)',
        time: '30-35 mins',
        type: 'Kebabs, Fast Food, Snacks',
        location: 'Vidya Nagar',
        distance: '5.0 km',
        offer: '₹125 OFF',
        offerDetails: 'Above ₹199',
      },
    ]
  },
];

const FoodItem = ({ item, navigation }) => {
  const handlePress = () => {
    navigation.navigate('FoodDetailScreen', { item })
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.details}>{item.rating} • {item.time}</Text>
          <Text style={styles.type}>{item.type}</Text>
          <Text style={styles.location}>{item.location} • {item.distance}</Text>
          <View style={styles.offerContainer}>
            <Text style={styles.offerText}>{item.offer}</Text>
            {item.offerDetails && <Text style={styles.offerDetails}>{item.offerDetails}</Text>}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function FoodList() {
  const navigation = useNavigation();

  return (
    <FlatList
      data={foodItems}
      renderItem={({ item }) => <FoodItem item={item} navigation={navigation} />}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.listContainer}
      showsVerticalScrollIndicator={false}
    />
  );
}



const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
    backgroundColor: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 3, // Android shadow effect
    shadowColor: '#000', // iOS shadow effect
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: 110,
    height: 125,
    borderRadius: 8,
  },
  infoContainer: {
    flex: 1,
    paddingLeft: 16,
    paddingVertical: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  details: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  type: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  location: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
  offerContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  offerText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#d32f2f',
  },
  offerDetails: {
    fontSize: 12,
    color: '#d32f2f',
    marginLeft: 4,
  },
});


// import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

// const foodItems = [
//   {
//     id: '1',
//     name: "Domino's Chicken Fiesta",
//     rating: 'NEW',
//     time: '20-25 mins',
//     type: 'Pizzas, Italian, Pastas',
//     location: 'Urban Oasis Mall',
//     distance: '2.5 km',
//     offer: '30% OFF',
//     offerDetails: 'UPTO ₹75',
//     image: 'https://tse3.mm.bing.net/th?id=OIP.RcXC8FXwSgbmG6XaeiKnNgGQHZ&pid=Api&P=0&h=180',
//   },
//   {
//     id: '2',
//     name: 'Makhani Darbar',
//     rating: '4.0 (16)',
//     time: '30-35 mins',
//     type: 'Kebabs, Mughlai, Beverages',
//     location: 'Lingraj Nagar',
//     distance: '5.0 km',
//     offer: 'BUY 1 GET 1',
//     image: 'https://tse2.mm.bing.net/th?id=OIP.soNXYtniBQygOExClZzcvgHaD8&pid=Api&P=0&h=180',
//   },
//   {
//     id: '3',
//     name: 'Faasos - Wraps',
//     rating: '4.3 (1.3K+)',
//     time: '30-35 mins',
//     type: 'Kebabs, Fast Food, Snacks',
//     location: 'Vidya Nagar',
//     distance: '5.0 km',
//     offer: '₹125 OFF',
//     offerDetails: 'Above ₹199',
//     image: 'https://tse4.mm.bing.net/th?id=OIP.V677T2hcXRN9PAacxn_vFAHaE8&pid=Api&P=0&h=180',
//   },
//   {
//     id: '4',
//     name: 'The Good Bowl',
//     rating: '4.3 (612)',
//     time: '30-35 mins',
//     type: 'Biryani, North Indian, Pasta',
//     location: 'Vidya Nagar',
//     distance: '5.0 km',
//     offer: 'FLAT DEAL',
//     image: 'https://tse3.mm.bing.net/th?id=OIP.hY6_EhFkGW0EwNvSzpKp2AHaDt&pid=Api&P=0&h=180',
//   },
//   {
//     id: '5',
//     name: 'Spicy Wok',
//     rating: '4.5 (100)',
//     time: '25-30 mins',
//     type: 'Chinese, Noodles, Rice',
//     location: 'Downtown Plaza',
//     distance: '3.0 km',
//     offer: '15% OFF',
//     image: 'https://tse1.mm.bing.net/th?id=OIP.hwPo-b_MF-8uxkuvX5CNlwHaHa&pid=Api&P=0&h=180',
//   },
//   {
//     id: '6',
//     name: 'Sushi World',
//     rating: '4.7 (250)',
//     time: '40-45 mins',
//     type: 'Japanese, Sushi, Asian',
//     location: 'Greenwood Avenue',
//     distance: '6.0 km',
//     offer: 'FREE MISO SOUP',
//     image: 'https://tse1.mm.bing.net/th?id=OIP.N_5mGZnctOlSF4zOqSNkHwHaHa&pid=Api&P=0&h=180',
//   },
//   {
//     id: '7',
//     name: 'Cafe Mocha',
//     rating: '4.2 (400)',
//     time: '15-20 mins',
//     type: 'Coffee, Desserts, Snacks',
//     location: 'Central Park',
//     distance: '1.5 km',
//     offer: '20% OFF',
//     image: 'https://tse4.mm.bing.net/th?id=OIP.q4MCd0-XhYc2pf2Cji5kkgHaEo&pid=Api&P=0&h=180',
//   },
//   {
//     id: '8',
//     name: 'Burger King',
//     rating: '4.4 (500)',
//     time: '25-30 mins',
//     type: 'Burgers, Fast Food',
//     location: 'Market Square',
//     distance: '4.0 km',
//     offer: 'BUY 2 GET 1',
//     image: 'https://tse1.mm.bing.net/th?id=OIP.2mHUEm6G2AkJu2UG86kshQHaEK&pid=Api&P=0&h=180',
//   },
//   {
//     id: '9',
//     name: 'Sweet Tooth Bakery',
//     rating: '4.6 (80)',
//     time: '10-15 mins',
//     type: 'Bakery, Desserts',
//     location: 'Riverfront Road',
//     distance: '2.0 km',
//     offer: 'FREE DELIVERY',
//     image: 'https://tse2.mm.bing.net/th?id=OIP.u9sO_328Rxl9POB6l9rJkAHaHa&pid=Api&P=0&h=180',
//   },
//   {
//     id: '10',
//     name: 'Grill House',
//     rating: '4.1 (300)',
//     time: '35-40 mins',
//     type: 'Grilled Food, BBQ',
//     location: 'Hilltop Road',
//     distance: '7.0 km',
//     offer: '10% OFF',
//     image: 'https://tse4.mm.bing.net/th?id=OIP.8gMkiU4Nzvv5T0LwAFPd5AHaEK&pid=Api&P=0&h=180',
//   },
// ];


// const FoodItem = ({ item }) => (
//   <View style={styles.itemContainer}>
//     <Image source={{ uri: item.image }} style={styles.image} />
//     <View style={styles.infoContainer}>
//       <Text style={styles.name}>{item.name}</Text>
//       <Text style={styles.details}>{item.rating} • {item.time}</Text>
//       <Text style={styles.type}>{item.type}</Text>
//       <Text style={styles.location}>{item.location} • {item.distance}</Text>
//       <View style={styles.offerContainer}>
//         <Text style={styles.offerText}>{item.offer}</Text>
//         {item.offerDetails && <Text style={styles.offerDetails}>{item.offerDetails}</Text>}
//       </View>
//     </View>
//   </View>
// );

// export default function FoodList() {
//   return (
//     <FlatList
//       data={foodItems}
//       renderItem={({ item }) => <FoodItem item={item} />}
//       keyExtractor={item => item.id}
//       contentContainerStyle={styles.listContainer}
//       showsVerticalScrollIndicator={false} // Remove vertical scrollbar
//     />
//   );
// }

// const styles = StyleSheet.create({
//   listContainer: {
//     padding: 16,
//   },
//   itemContainer: {
//     flexDirection: 'row',
//     marginBottom: 16,
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     overflow: 'hidden',
//     elevation: 3, // Android shadow effect
//     shadowColor: '#000', // iOS shadow effect
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   image: {
//     width: 110,
//     height: 125,
//     borderRadius: 8,
//   },
//   infoContainer: {
//     flex: 1,
//     paddingLeft: 16,
//     paddingVertical: 8,
//   },
//   name: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   details: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 2,
//   },
//   type: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 2,
//   },
//   location: {
//     fontSize: 12,
//     color: '#999',
//     marginTop: 2,
//   },
//   offerContainer: {
//     flexDirection: 'row',
//     marginTop: 8,
//   },
//   offerText: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#d32f2f',
//   },
//   offerDetails: {
//     fontSize: 12,
//     color: '#d32f2f',
//     marginLeft: 4,
//   },
// });