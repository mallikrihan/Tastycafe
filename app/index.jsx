import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen';
import Splash from '../screen/Splash';
import LoginScreen from '../screen/LoginScreen';
import MainScreen from '../screen/MainScreen';
import SignupScreen from '../screen/SignupScreen';
import NavbarScreen from '.././components/NavbarScreen';
import UserPage from '.././components/UserPage';
import ListsScreen from '../components/ListScreen';
//import ListsScreen from '../components/ListScreen';
//import ItemScreen from '.././FoodPages/ItemScreen';
import IndianSweets from '.././FoodPages/IndianSweets';
import Pizza from '.././FoodPages/Pizza';
import Shake from '.././FoodPages/Shake';
import Biryani from '.././FoodPages/Biryani';
import Burgers from '.././FoodPages/Burgers';
import Pasta from '.././FoodPages/Pasta';
import IceCream from '.././FoodPages/IceCream';
import Deepavali from '.././FoodPages/Deepavali';
import Dominos from '.././FoodCategory/Dominos';
import Makhani from '.././FoodCategory/Makhani';
import FoodDetailScreen from '../FoodCategory/FoodDetailScreen';
//import OffersScreen from '.././explore/OffersScreen';
import ExploreScreen from '.././explore/ExploreScreen';
import FoodCategoryScreen from '../explore/FoodCategoryScreen';
import OrderDetailScreen from '../OrderDetailPage/OrderDetailsScreen';
import ProductDetailsScreen from '../ProductDetailsPage/ProductDetailScreen';
import CartPage from '../OrderDetailPage/CartPage';
import CheckOutPage from '../OrderDetailPage/CheckOutPage';
function App() {
  const Stack = createNativeStackNavigator();


  return (
    <>
      <Stack.Navigator initialRouteName="Splash" 
      screenOptions={{ headerShown: false }}
        // screenOptions={{
        //   headerStyle: { backgroundColor: '#4CAF50' }, // Set your color here
        //   headerTintColor: '#fff', // Set color for back button and title text
        //   headerTitleStyle: { fontWeight: 'bold' }, // Customize title text style
        // }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ title: 'MainScreen' }}
        />
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{ title: 'SignupScreen' }}
        />
        <Stack.Screen
          name="NavbarScreen"
          component={NavbarScreen}
          options={{ title: 'NavbarScreen' }}
        />
        <Stack.Screen
          name="UserPage"
          component={UserPage}
          options={{ title: 'UserPage' }}
        />
        {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
        <Stack.Screen name="Lists" component={ListsScreen} />
        {/* <Stack.Screen name="ItemScreen" component={ItemScreen} /> */}
        <Stack.Screen name="IndianSweets" component={IndianSweets} />
        <Stack.Screen name="Pizza" component={Pizza} />
        <Stack.Screen name="Shake" component={Shake} />
        <Stack.Screen name="Biryani" component={Biryani} />
        <Stack.Screen name="Burgers" component={Burgers} />
        <Stack.Screen name="Pasta" component={Pasta} />
        <Stack.Screen name="IceCream" component={IceCream} />
        <Stack.Screen name="Deepavali" component={Deepavali} />
        
        <Stack.Screen name="FoodDetailScreen" component={FoodDetailScreen} />

        <Stack.Screen name="Dominos" component={Dominos} options={{ title: "Domino's Chicken Fiesta" }} />
        {/* <Stack.Screen name="OffersScreen" component={OffersScreen} /> */}
        <Stack.Screen name="explore" component={ExploreScreen} />
        <Stack.Screen name="FoodCategoryScreen" component={FoodCategoryScreen} />
        <Stack.Screen name="ProductDetailsScreen" component={ProductDetailsScreen} />
        <Stack.Screen name="OrderDetailScreen" component={OrderDetailScreen} />
       <Stack.Screen name="CartPage" component={CartPage}/>
       <Stack.Screen name="CheckOutPage" component={CheckOutPage}/>
      </Stack.Navigator>
    </>

  );
}

export default App;
