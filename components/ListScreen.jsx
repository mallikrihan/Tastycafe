import React from 'react';
import { View, Image, TouchableOpacity, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ListsScreen() {
  const navigation = useNavigation();

  const items = [
    { id: '1', label: 'Indian Sweets', image: 'https://tse4.mm.bing.net/th?id=OIP.8gMkiU4Nzvv5T0LwAFPd5AHaEK&pid=Api&P=0&h=180' },
    { id: '2', label: 'Pizzas', image: 'https://tse1.mm.bing.net/th?id=OIP.C5VNu-rkCHZ_aQjHxn3NLwHaEo&pid=Api&P=0&h=180' },
    { id: '3', label: 'Shake', image: 'https://tse1.mm.bing.net/th?id=OIP.qyolLDACJpGcolyTU8OPaAHaLH&pid=Api&P=0&h=180' },
    { id: '4', label: 'Burgers', image: 'https://tse2.mm.bing.net/th?id=OIP.Z34VvdCT6bEordzT-7HgqwHaF-&pid=Api&P=0&h=180' },
    { id: '5', label: 'Deepavali Gifting', image: 'https://tse4.mm.bing.net/th?id=OIP.8gMkiU4Nzvv5T0LwAFPd5AHaEK&pid=Api&P=0&h=180' },
    { id: '6', label: 'Biryani', image: 'https://tse3.mm.bing.net/th?id=OIP.l62xwzjz4Hd3ueArOt4lugHaHa&pid=Api&P=0&h=180' },
    { id: '7', label: 'Ice-Cream', image: 'https://tse2.mm.bing.net/th?id=OIP.cS-vantzMfqxGxBAvrOgLgHaHa&pid=Api&P=0&h=180' },
    { id: '8', label: 'Pasta', image: 'https://tse2.mm.bing.net/th?id=OIP.oLa_Nk8TfBWOr8BcEFE0sgHaLG&pid=Api&P=0&h=180' }
  ];

  return (
    <View style={styles.container}>
  <Text style={styles.title}>What's on your mind?</Text>
  <FlatList
    data={items}
    keyExtractor={(item) => item.id}
    numColumns={4}
    renderItem={({ item }) => (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => {
          switch (item.label) {
            case 'Indian Sweets':
              navigation.navigate('IndianSweets');
              break;
            case 'Pizzas':
              navigation.navigate('Pizza');
              break;
              case 'Shake':
        navigation.navigate('Shake');
        break;
      case 'Burgers':
       navigation.navigate('Burgers');
       break;
      case 'Deepavali Gifting':
       navigation.navigate('Deepavali');
       break;
       case 'Biryani':
         navigation.navigate('Biryani');
         break;
       case 'Ice-Cream':
         navigation.navigate('IceCream');
       break;
       case 'Pasta':
         navigation.navigate('Pasta');
        break;
      default:
        break;
            // other cases
          }
        }}
      >
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.label}>{item.label}</Text>
      </TouchableOpacity>
    )}
    showsVerticalScrollIndicator={false} // Helps remove scroll bar
  />
</View>

//     <View style={styles.container}>
//       <Text style={styles.title}>What's on your mind?</Text>
//       <FlatList
//         data={items}
//         keyExtractor={(item) => item.id}
//         numColumns={4} 
//         renderItem={({ item }) => (
//           // <TouchableOpacity
//           //   style={styles.itemContainer}
//           //   onPress={() => navigation.navigate('ItemScreen', { itemId: item.id })}
//           // >
//           //   <Image source={{ uri: item.image }} style={styles.image} />
//           //   <Text style={styles.label}>{item.label}</Text>
//           // </TouchableOpacity>

//           <TouchableOpacity
//   style={styles.itemContainer}
//   onPress={() => {
//     switch (item.label) {
//       case 'Indian Sweets':
//         navigation.navigate('IndianSweets');
//         break;
//       case 'Pizzas':
//         navigation.navigate('Pizza');
//         break;
//       case 'Shake':
//         navigation.navigate('Shake');
//         break;
//       case 'Burgers':
//         navigation.navigate('Burgers');
//         break;
//       case 'Deepavali Gifting':
//         navigation.navigate('Deepavali');
//         break;
//       case 'Biryani':
//         navigation.navigate('Biryani');
//         break;
//       case 'Ice-Cream':
//         navigation.navigate('IceCream');
//         break;
//       case 'Pasta':
//         navigation.navigate('Pasta');
//         break;
//       default:
//         break;
//     }
//   }}
// >
//   <Image source={{ uri: item.image }} style={styles.image} />
//   <Text style={styles.label}>{item.label}</Text>
// </TouchableOpacity>

//         )}
//         contentContainerStyle={styles.grid}
//       />
//     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  grid: {
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
    padding: 10,
    maxWidth: Dimensions.get('window').width / 2 - 30, // Ensures two items per row
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 40,
  },
  label: {
    marginTop: 10,
    fontSize: 12,
    textAlign: 'center',
  },
});
