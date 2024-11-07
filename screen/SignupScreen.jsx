// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

// export default function SignUpScreen({navigation}) {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignUp = () => {
//     // handle signup logic here
//     console.log('Sign Up with', { name, email, password });
//   };

//   return (
//     <View style={styles.container}>
//       <Image source={{ uri: 'https://your-image-url.com/logo.png' }} style={styles.logo} />
//       <Text style={styles.title}>Create an Account</Text>
      
//       <TextInput
//         style={styles.input}
//         placeholder="Full Name"
//         placeholderTextColor="#888"
//         value={name}
//         onChangeText={setName}
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         placeholderTextColor="#888"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//         autoCapitalize="none"
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         placeholderTextColor="#888"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />

//       {/* <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
//         <Text style={styles.signUpButtonText}>Sign Up</Text>
//       </TouchableOpacity> */}
//        <TouchableOpacity
//           style={styles.signUpButton}
//           onPress={() => navigation.navigate('NavbarScreen')}
//         >
//           <Text style={styles.signUpButtonText}>Sign up</Text>
//         </TouchableOpacity> 

//       <Text style={styles.signInText}>
//         Already have an account? <Text style={styles.signInLink}>Sign In</Text>
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'black',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//   },
//   logo: {
//     width: 120,
//     height: 120,
//     marginBottom: 30,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 20,
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     backgroundColor: '#e8e8e8',
//     borderRadius: 8,
//     paddingHorizontal: 15,
//     marginBottom: 15,
//     fontSize: 16,
//     color: '#333',
//   },
//   signUpButton: {
//     width: '100%',
//     height: 50,
//     backgroundColor: '#3b82f6',
//     borderRadius: 8,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 20,
//   },
//   signUpButtonText: {
//     fontSize: 18,
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   signInText: {
//     marginTop: 20,
//     fontSize: 16,
//     color: '#333',
//   },
// })
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function SignUpScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    console.log('Sign Up with', { name, email, password });
  };

  return (
    <View style={styles.container}>
      {/* Central image with shadow */}
      <View style={styles.logoContainer}>
        <View style={styles.imageShadow}>
          {/* <Image 
            source={{ uri: 'https://tse1.mm.bing.net/th?id=OIP.V-iUPXL7-oSOAvR2dtdWiQHaHa&pid=Api&P=0&h=180' }} 
            style={styles.logo} 
          /> */}
        </View>
      </View>

      {/* Title */}
      <Text style={styles.title}>Create an Account</Text>
      
      {/* Input Fields with Icons */}
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Full Name"
            placeholderTextColor="#fff"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
          <FontAwesome name="user" size={20} color="white" style={styles.icon} />
        </View>

        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#fff"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
          />
          <FontAwesome name="envelope" size={20} color="white" style={styles.icon} />
        </View>

        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Password"
            placeholderTextColor="#fff"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />
          <FontAwesome name="lock" size={20} color="white" style={styles.icon} />
        </View>
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('NavbarScreen')}>
        <Text style={styles.signUpButtonText}>Sign up</Text>
      </TouchableOpacity>

      {/* Sign In Link */}
      <Text style={styles.signInText}>
        Already have an account? <Text style={styles.signInLink}>Sign In</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#FF4040',
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  // imageShadow: {
  //   width: 120,
  //   height: 120,
  //   borderRadius: 60,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   shadowColor: '#000',
  //   shadowOffset: { width: 0, height: 4 },
  //   shadowOpacity: 0.3,
  //   shadowRadius: 10,
  // },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 24,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 25,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    height: 48,
    color: '#fff',
    fontSize: 16,
  },
  icon: {
    marginLeft: 8,
  },
  signUpButton: {
    width: '100%',
    height: 50,
    backgroundColor: 'black',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  signUpButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  signInText: {
    marginTop: 20,
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  signInLink: {
    color: '#FFD700',
    fontWeight: 'bold',
  },
});
