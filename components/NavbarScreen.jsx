import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Alert, TextInput, ScrollView, Image, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Location from 'expo-location';
import CategoryScreen from '.././components/CategoryScreen';
import ProductScreen from '.././components/ProductScreen'; ``
import ListScreen from '.././components/ListScreen';
import ExploreScreen from '.././explore/ExploreScreen';


const NavbarScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [location, setLocation] = useState('Heggeri Colony');
  const [searchText, setSearchText] = useState('');

  const toggleModal = () => setModalVisible(!modalVisible);

  // const selectLocation = (loc) => {
  //   if (loc === 'Current Location') {
  //     getCurrentLocation();
  //   } else {
  //     setLocation(loc);
  //     setModalVisible(false);
  //   }
  // };

  // const getCurrentLocation = async () => {
  //   try {
  //     const { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== 'granted') {
  //       Alert.alert('Permission Denied', 'Enable location permissions to use this feature.');
  //       return;
  //     }

  //     const currentLocation = await Location.getCurrentPositionAsync({});
  //     const [address] = await Location.reverseGeocodeAsync({
  //       latitude: currentLocation.coords.latitude,
  //       longitude: currentLocation.coords.longitude,
  //     });

  //     setLocation(`${address.street}, ${address.city}, ${address.region}`);
  //     setModalVisible(false);
  //   } catch (error) {
  //     Alert.alert('Error', 'Unable to retrieve location. Try again later.');
  //   }
  // };

  const startVoiceSearch = () => {
    Alert.alert('Voice Search', 'Voice search feature is not implemented yet.');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.locationContainer} onPress={toggleModal}>
          <Icon name="location-on" size={32} color="red" />
          <View>
            <Text style={styles.locationText}>{location}</Text>
            <Text style={styles.subLocationText}>Old Hubli, Hubballi</Text>
          </View>
        </TouchableOpacity>
        
        {/* nhikj */}

        <TouchableOpacity
          style={{ marginLeft: 90 }}
          onPress={() => Alert.alert('Notifications', 'No new notifications.')}>
          <Icon name="notifications-none" size={30} color="red" />
        </TouchableOpacity>

        {/* <TouchableOpacity 
        onPress={() => navigation.navigate('UserPage')}>
          <Icon name="person" size={30} color="black" />
        </TouchableOpacity> */}
        <TouchableOpacity
          onPress={() => navigation.navigate('UserPage')}
        >
          <View style={{
            width: 35, // Adjust size as needed
            height: 35,
            borderRadius: 25, // Half of width/height to make it circular
            backgroundColor: 'gray', // Adjust background color as needed
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Icon name="person" size={30} color="black" />
          </View>
        </TouchableOpacity>

      </View>

      {/* <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search 'biryani'"
          placeholderTextColor="#888"
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity onPress={() => Alert.alert('Search', 'Searching...')}>
          <Icon name="search" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={startVoiceSearch}>
          <Icon name="mic" size={30} color="black" />
        </TouchableOpacity>
      </View> */}

      <View style={styles.searchContainer}>
        {/* <TextInput
          style={styles.searchInput}
          placeholder="Search 'biryani'"
          placeholderTextColor="#888"
          value={searchText}
          onChangeText={setSearchText}
        /> */}
         <TextInput
    style={styles.searchInput}
    placeholder="Search 'biryani'"
    placeholderTextColor="#888"
    value={searchText}
    onChangeText={setSearchText}
  />
        <TouchableOpacity onPress={() => Alert.alert('Search', 'Searching...')}>
          <Icon name="search" size={30} color="black" />
        </TouchableOpacity>

        {/* Divider line */}
        <View style={styles.divider} />

        <TouchableOpacity onPress={startVoiceSearch}>
          <Icon name="mic" size={30} color="black" />
        </TouchableOpacity>
      </View>


      {/* <View style={styles.festiveBanner}>
        <Text style={styles.bannerText}>Happy Deepavali</Text>
      </View> */}

      {/* <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
        {['Sweets Corner', 'Gift Hampers', 'Great Offers'].map((label, index) => (
          <TouchableOpacity key={index} style={styles.categoryItem}>
            <Icon name="star" size={30} color="#ff8c00" />
            <Text style={styles.categoryLabel}>{label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView> */}

      {/* <View style={styles.exploreContainer}>
        <Text style={styles.sectionTitle}>Explore</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.exploreList}>
          {['Offers', 'Brand Packs', 'Food on Train', 'Gift Cards'].map((label, index) => (
            <TouchableOpacity key={index} style={styles.exploreItem}>
              <Icon name="local-offer" size={24} color="#ff8c00" />
              <Text>{label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View> */}
      {/* <View style={styles.exploreContainer}>
        <Text style={styles.sectionTitle}>Explore</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.exploreList}>
          {[
            {
              label: 'Offers',

              image: 'https://tse4.mm.bing.net/th?id=OIP.DglgEK9lvmuDjWeolc6cdwHaHa&pid=Api&P=0&h=180'
            },

            {
              label: 'Brand Packs',
              image: 'https://tse3.mm.bing.net/th?id=OIP.zBlspRnbDDi7MwP6AKrFpgHaHO&pid=Api&P=0&h=180'
            },

            {
              label: 'Food on Train',
              image: 'https://tse2.mm.bing.net/th?id=OIP.FQ55qrO9kMbepTNUpi_6lwAAAA&pid=Api&P=0&h=180'
            },

            {
              label: 'Gift Cards',
              image: 'https://tse4.mm.bing.net/th?id=OIP.kVlEMx66YBV94H7-xCxivQHaE7&pid=Api&P=0&h=180'
            }
          ].map((item, index) => (
            <TouchableOpacity key={index} style={styles.exploreItem}>
              <Image source={{ uri: item.image }} style={styles.exploreImage} />
              <Text>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View> */}


      {/* <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="delivery-dining" size={30} color="red" />
          <Text style={styles.footerText}>Delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="history" size={30} color="black" />
          <Text style={styles.footerText}>History</Text>
        </TouchableOpacity>
      </View> */}
      <ExploreScreen/>
      {/* 
      what your mind */}
      <ProductScreen />
      <ListScreen />
      <CategoryScreen />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#f5f5f5',
    backgroundColor: 'white',
    paddingBottom: 20,
     position: 'sticky', top: 0, zIndex: 10 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'white',
     position: 'sticky', top: 0, zIndex: 10 
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    color: 'black',
    fontSize: 16,
  },
  subLocationText: {
    color: 'blue',
    fontSize: 12,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#EBEDEF',
    marginVertical: 10,
     position: 'sticky', top: 0, zIndex: 10,
  },
  divider: {
    width: 1,
    height: 25, // Adjust height as needed
    backgroundColor: 'black',
    marginHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  festiveBanner: {
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#ffcccb',
  },
  bannerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8b0000',
  },
  categories: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 20,
  },
  categoryLabel: {
    marginTop: 5,
    fontSize: 12,
    color: 'black',
  },
  exploreContainer: {
    padding: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  exploreList: {
    flexDirection: 'row',
  },
  exploreItem: {
    alignItems: 'center',
    marginRight: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  exploreImage: {
    width: 80,   // Adjust width as needed
    height: 80,  // Adjust height as needed
    borderRadius: 50, // Half of the width/height to make it round
    marginBottom: 5,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff5e6',
    paddingVertical: 10,
  },
  footerButton: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: 'black',
  },
  
});

export default NavbarScreen;
