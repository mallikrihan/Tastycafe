// // App.js or index.js
// import React from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, StatusBar } from 'react-native';

// export default function LoginScreen({navigation}) {
//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="dark-content" />
      
//       <View style={styles.logoContainer}>
//         <Image source={{ uri: 'https://tse1.mm.bing.net/th?id=OIP.V-iUPXL7-oSOAvR2dtdWiQHaHa&pid=Api&P=0&h=180' }} style={styles.logo} />
//         <Text style={styles.title}>Welcome Back</Text>
//         <Text style={styles.subtitle}>Please sign in to continue</Text>
//       </View>

//       <View style={styles.inputContainer}>
//         <TextInput 
//           placeholder="Email"
//           placeholderTextColor="#aaa"
//           style={styles.input}
//         />
//         <TextInput 
//           placeholder="Password"
//           placeholderTextColor="#aaa"
//           secureTextEntry
//           style={styles.input}
//         />
//         <TouchableOpacity style={styles.forgotPasswordButton}>
//           <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
//         </TouchableOpacity>
//       </View>
      
      
//        <TouchableOpacity
//           style={styles.loginButton}
//           onPress={() => navigation.navigate('SignupScreen')}
//         >
//           <Text style={styles.buttonText}>Login</Text>
//         </TouchableOpacity> 
      
//       <View style={styles.footer}>
//         <Text style={styles.footerText}>Don't have an account?</Text>
//         {/* <TouchableOpacity>
//           <Text style={styles.signUpText}>Sign Up</Text>
//         </TouchableOpacity> */}
//         <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
//         <Text style={styles.signUpText}>Sign Up</Text>
//       </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FF4040',
//     justifyContent: 'center',
//     paddingHorizontal: 24,
//   },
//   logoContainer: {
//     alignItems: 'center',
//     marginBottom: 48,
//   },
//   logo: {
//     width: 80,
//     height: 80,
//     marginBottom: 16,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: '600',
//     color: '#333',
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#888',
//     marginTop: 8,
//   },
//   inputContainer: {
//     marginBottom: 24,
//   },
//   input: {
//     height: 48,
//     backgroundColor: '#f2f2f2',
//     borderRadius: 8,
//     paddingHorizontal: 16,
//     marginBottom: 16,
//     fontSize: 16,
//   },
//   forgotPasswordButton: {
//     alignItems: 'flex-end',
//   },
//   forgotPasswordText: {
//     color: '#3b82f6',
//     fontSize: 14,
//   },
//   loginButton: {
//     backgroundColor: '#3b82f6',
//     height: 48,
//     borderRadius: 8,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 24,
//   },
//   loginButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: '500',
//   },
//   footer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 16,
//   },
//   footerText: {
//     fontSize: 16,
//     color: '#888',
//   },
//   signUpText: {
//     color: '#3b82f6',
//     fontSize: 16,
//     fontWeight: '500',
//     marginLeft: 4,
//   },
// });
// App.js or index.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, StatusBar } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Logo with shadow */}
      <View style={styles.logoContainer}>
        <View style={styles.imageShadow}>
          {/* <Image 
            source={{ uri: 'https://tse1.mm.bing.net/th?id=OIP.V-iUPXL7-oSOAvR2dtdWiQHaHa&pid=Api&P=0&h=180' }} 
            style={styles.logo} 
          /> */}
        </View>
      </View>

      {/* Title and Subtitle */}
      <Text style={styles.title}>LOGIN</Text>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput 
            placeholder="USER NAME"
            placeholderTextColor="#fff"
            style={styles.input}
          />
          <FontAwesome name="user" size={20} color="white" style={styles.icon} />
        </View>

        <View style={styles.inputWrapper}>
          <TextInput 
            placeholder="PASSWORD"
            placeholderTextColor="#fff"
            secureTextEntry
            style={styles.input}
          />
          <FontAwesome name="lock" size={20} color="white" style={styles.icon} />
        </View>

        <TouchableOpacity style={styles.forgotPasswordButton}>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
      
      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('SignupScreen')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Social Media Buttons */}
      <View style={styles.socialMediaContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="facebook" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="google" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>New user?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#FF4040',
    // backgroundColor: '#D32F2F',
    backgroundColor:"green",
    justifyContent: 'center',
    paddingHorizontal: 24,
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
    color: 'white',
    textAlign: 'center',
    marginBottom: 24,
  },
  inputContainer: {
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
  forgotPasswordButton: {
    alignItems: 'flex-end',
  },
  forgotPasswordText: {
    color: '#fff',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: 'black',
    height: 48,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  socialButton: {
    backgroundColor: '#3b82f6',
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  footerText: {
    fontSize: 14,
    color: '#fff',
  },
  signUpText: {
    color: '#FFD700',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 4,
  },
});

