import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OrderDetailsScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Details</Text>
      <Text style={styles.product}>Product: {product.name}</Text>
      {/* Additional order details go here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  product: {
    fontSize: 18,
  },
});

export default OrderDetailsScreen;
