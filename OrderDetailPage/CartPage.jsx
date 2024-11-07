import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const CartPage = ({navigation}) => {
  const [items, setItems] = useState([
    { id: 1, name: 'Bengali Sweets', price: 190, originalPrice: 200, quantity: 2, imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.gpQHitVQiP1BcoJOV7-RQgHaFR&pid=Api&P=0&h=180' },
    { id: 2, name: 'Halwa',   price: 1500, originalPrice: 2000, quantity: 1, imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.VEsW5z7JyGpmuw59h5LH6QHaFZ&pid=Api&P=0&h=180' },
  ]);

  const incrementQuantity = (id) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const calculateTotal = () => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Cart (2)</Text>
      <ScrollView style={styles.cartItemsContainer}>
        {items.map((item) => (
          <View key={item.id} style={styles.cartItem}>
            <Image source={{ uri: item.imageUrl }} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemColor}>Color: {item.color} {item.size && ` | Size: ${item.size}`}</Text>
              <Text style={styles.itemPrice}>${item.price} <Text style={styles.originalPrice}>${item.originalPrice}</Text></Text>
            </View>
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={() => decrementQuantity(item.id)} style={styles.quantityButton}>
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{item.quantity}</Text>
              <TouchableOpacity onPress={() => incrementQuantity(item.id)} style={styles.quantityButton}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.subtotalContainer}>
        <Text style={styles.subtotalText}>Subtotal:</Text>
        <Text style={styles.subtotalAmount}>${calculateTotal()}</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('CheckOutPage')}
      style={styles.checkoutButton}>
        <Text style={styles.checkoutText}>CHECK OUT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
    color: '#1a73e8',
  },
  cartItemsContainer: {
    flexGrow: 1,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemColor: {
    fontSize: 14,
    color: 'gray',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a73e8',
  },
  originalPrice: {
    fontSize: 14,
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  subtotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  subtotalText: {
    fontSize: 16,
    color: 'gray',
  },
  subtotalAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a73e8',
  },
  checkoutButton: {
    backgroundColor: 'green',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
  },
  checkoutText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CartPage;
