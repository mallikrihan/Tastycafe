import { StyleSheet, View, Image, StatusBar } from 'react-native';
import React, { useEffect } from 'react';

const Splash = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
        {/* <StatusBar hidden={true} /> */}
      <Image
        source={require('../assets/Icon1.png')} // Replace with your image path
        style={styles.image}
        resizeMode="contain" // Adjust based on how you want the image to scale
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  
         container:{
             flex:1,
             justifyContent:"center",
            alignItems:"center",
            backgroundColor:"green",
       },
    image:{
            width:100,
             height:100,
            resizeMode:"cover",
    borderRadius: 10,
       }
});

// import { StyleSheet, Text, View, Image } from 'react-native'
// import React from 'react'
// import Icon  from "./assets/Icon.png";
// const SplashScreenView = () => {
//   return (
//     <View style={styles.container}>
//      <View>
//         <Image source={Icon} style={styles.image}/>
//      </View>
//     </View>
//   )
// }
// export default SplashScreenView
// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         justifyContent:"center",
//         alignItems:"center",
//         backgroundColor:"#1e1e1e",
//     },
//     image:{
//         width:100,
//         height:100,
//         resizeMode:"cover",
//         borderRadius: 10,
//     }
// })
