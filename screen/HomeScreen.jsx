// import React from 'react';
// import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';

// export default function HomeScreen({ navigation }) {
//   return (
//     <ImageBackground
//       source={{ uri: 'https://i.pinimg.com/736x/38/62/dc/3862dcbe8918254752d3d1d98d523f58.jpg' }} // Replace with your own food image URL
//       style={styles.background}
//     >
//       <View style={styles.overlay}>
//         <Text style={styles.title}>Welcome to Foodie's Paradise</Text>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => navigation.navigate('Login')}
//         >
//           <Text style={styles.buttonText}>Let’s Get Started</Text>
//         </TouchableOpacity>
//       </View>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   overlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for text contrast
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '100%',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#fff',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: '#ff6347', // Tomato color
//     paddingVertical: 15,
//     paddingHorizontal: 30,
//     borderRadius: 30,
//     marginTop: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.8,
//     shadowRadius: 5,
//     elevation: 5,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: '600',
//   },
// });
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://tse1.mm.bing.net/th?id=OIP.AfMIC_11Y8pGILrDzLbL6QHaE7&pid=Api&P=0&h=180' }} // Replace with your own food image URL
        style={styles.foodImage}
      />
      <Text style={styles.title}>Fast delivery at your doorstep</Text>
      <Text style={styles.subtitle}>Home delivery and online reservation system for restaurants & cafe</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Let's Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // #D32F2F
    backgroundColor: 'green', // Red background color
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  foodImage: {
    width: 150,
    height: 150,
    borderRadius: 75, // Make it circular
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#FFFFFF', // White color for the button
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: '#D32F2F', // Red color for the button text
    fontSize: 16,
    fontWeight: '600',
  },
});

