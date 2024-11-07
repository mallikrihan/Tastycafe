// import React from 'react';
// import { View, Text, Button, Image, StyleSheet } from 'react-native';

// const ProductDetailScreen = ({ route, navigation }) => {
//   const { product } = route.params;

//   return (
//     <View style={styles.container}>
//       <Image source={{ uri: product.image }} style={styles.image} />
//       <Text style={styles.title}>{product.name}</Text>
//       <Text style={styles.description}>Detailed description of {product.name} goes here...</Text>
//       <Button title="Add to Cart" onPress={() => navigation.navigate('OrderDetailScreen', { product })} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     alignItems: 'center',
//     backgroundColor: '#FFF',
//   },
//   image: {
//     width: 200,
//     height: 200,
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   description: {
//     fontSize: 16,
//     textAlign: 'center',
//     marginVertical: 10,
//   },
// });

// export default ProductDetailScreen;

// import React from 'react';
// import { View, Text, Button, Image, StyleSheet, Alert } from 'react-native';

// const ProductDetailScreen = ({ route, navigation }) => {
//   const { product } = route.params;

//   const handleAddToCart = () => {
//     Alert.alert("Success", "Added to Cart");
//     navigation.navigate('OrderDetailScreen', { product });
//   };

//   return (
//     <View style={styles.container}>
//       <Image source={{ uri: product.image }} style={styles.image} />
//       <Text style={styles.title}>{product.name}</Text>
//       <Text style={styles.ingredientsTitle}>Ingredients:</Text>
//       <Text style={styles.ingredients}>A list of ingredients will go here...</Text>
//       <Button title="Add to Cart" onPress={handleAddToCart} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     alignItems: 'center',
//     backgroundColor: '#FFF',
//   },
//   image: {
//     width: 200,
//     height: 200,
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   ingredientsTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     marginTop: 10,
//   },
//   ingredients: {
//     fontSize: 16,
//     textAlign: 'center',
//     marginVertical: 10,
//   },
// });

// export default ProductDetailScreen;

import React ,{ useState }from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, TextInput } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProductDetailScreen = () => {
  const foodData = [
    {
      name: 'Bengali Sweets',
      originalPrice: '₹189',
      discountedPrice: '₹139',
      rating: 3.6,
      reviews: 25,
      description: 'This humble dish just became more delicious...',
      imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.gpQHitVQiP1BcoJOV7-RQgHaFR&pid=Api&P=0&h=180',
    },
    {
      name: 'Halwa',
      originalPrice: '₹179',
      discountedPrice: '₹139',
      rating: 4.3,
      reviews: 64,
      description: 'This bowl is packed with delicious surprises...',
      imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.VEsW5z7JyGpmuw59h5LH6QHaFZ&pid=Api&P=0&h=180',
    },
    {
      name: 'Namkeen / Hotmix',
      originalPrice: '₹249',
      discountedPrice: '₹139',
      rating: 4.2,
      reviews: 16,
      description: 'Here comes the... wrap...',
      imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.O3l5jxZ3dl9NFFtUWp58jwHaFj&pid=Api&P=0&h=180',
    },
  ];
  const navigation = useNavigation();
  const startVoiceSearch = () => {
    Alert.alert('Voice Search', 'Voice search feature is not implemented yet.');
  };
  const [searchText, setSearchText] = useState('');
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <MaterialIcons onPress={() => navigation.goBack()} name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <TextInput style={styles.searchBar} placeholder="Search in Faasos" />
        <TouchableOpacity onPress={startVoiceSearch}>
          <Icon name="mic" size={30} color="black" />
        </TouchableOpacity>
        {/* <FontAwesome name="microphone" size={24} color="gray" /> */}
        {/* <FontAwesome name="user" size={24} color="gray" /> */}
      </View>
      <TextInput
    style={styles.searchInput}
    placeholder="Search 'biryani'"
    placeholderTextColor="#888"
    value={searchText}
    onChangeText={setSearchText}
  />

      {/* Food List */}
      {foodData.map((item, index) => (
        <View key={index} style={styles.card}>
          <Image source={{ uri: item.imageUrl }} style={styles.image} />
          <View style={styles.details}>
            <Text style={styles.foodName}>{item.name}</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.originalPrice}>{item.originalPrice}</Text>
              <Text style={styles.discountedPrice}>{item.discountedPrice}</Text>
            </View>
            <View style={styles.ratingContainer}>
              <FontAwesome name="star" size={16} color="green" />
              <Text style={styles.rating}>{item.rating}</Text>
              <Text style={styles.reviews}>({item.reviews})</Text>
            </View>
            <Text style={styles.description}>{item.description}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('CartPage')} style={styles.addButton}>
              <Text style={styles.addText}>ADD</Text>
            </TouchableOpacity>
            <Text style={styles.customizable}>Customisable</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f8f8' },
  header: { flexDirection: 'row', alignItems: 'center', padding: 10 },
  searchBar: {
    flex: 1,
    backgroundColor: '#ededed',
    borderRadius: 10,
    padding: 8,
    marginHorizontal: 8,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  image: { width: 120, height: 150, borderRadius: 10 },
  details: { flex: 1, paddingLeft: 10 },
  foodName: { fontSize: 16, fontWeight: 'bold' },
  priceContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  originalPrice: { textDecorationLine: 'line-through', color: 'gray', marginRight: 5 },
  discountedPrice: { color: '#FF8C00', fontWeight: 'bold' },
  ratingContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  rating: { color: 'green', marginHorizontal: 5 },
  reviews: { color: 'gray' },
  description: { color: 'gray', marginVertical: 5 },
  addButton: {
    backgroundColor: '#32CD32',
    borderRadius: 5,
    alignItems: 'center',
    paddingVertical: 5,
    marginTop: 5,
  },
  addText: { color: '#fff', fontWeight: 'bold' },
  customizable: { color: 'gray', marginTop: 5, fontSize: 12 },
});

export default ProductDetailScreen;

