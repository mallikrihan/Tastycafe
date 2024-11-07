import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
const UserProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons onPress={() => navigation.navigate('NavbarScreen')} name="arrow-back" size={24} color="black" style={styles.backIcon} />
        <Text style={styles.headerText}>MALLIK RIHAN</Text>
        <Text style={styles.phoneNumber}>+91-8951427756</Text>
        <TouchableOpacity>
          <Text style={styles.editText}>EDIT</Text>
        </TouchableOpacity>
      </View>

      {/* Options List */}
      <View style={styles.optionsContainer}>
        <OptionItem icon="clipboard-list" text="My Orders" />
        <OptionItem icon="wallet" text="LP Rewards" />
        <OptionItem icon="location-on" text="Manage Addresses" />
        <OptionItem icon="gift" text="Refer & Earn" />
        <OptionItem icon="help" text="FAQs" />
        <OptionItem icon="receipt" text="How to track my Refund?" />
        <OptionItem icon="report-problem" text="Raise a Concern" />
        <OptionItem icon="share" text="Share this App" />
        <OptionItem icon="star" text="Rate Us" />
        <OptionItem icon="policy" text="Privacy Policy" />
        <OptionItem icon="description" text="Terms & Conditions" />
      </View>

      {/* Address and Buttons */}
      <View style={styles.addressContainer}>
        <Text style={styles.addressTitle}>Food Club Dubai</Text>
        <Text style={styles.addressDetails}>
          NEHRU NAGAR SIRSI
        </Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.callButton}>
            <MaterialIcons name="call" size={20} color="black" />
            <Text style={styles.buttonText}>Call Outlet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.directionButton}>
            <MaterialIcons name="directions" size={20} color="black" />
            <Text style={styles.buttonText}>Get Directions</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

// Reusable Option Item Component
const OptionItem = ({ icon, text }) => (
  <TouchableOpacity style={styles.optionItem}>
    <FontAwesome5 name={icon} size={18} color="black" />
    <Text style={styles.optionText}>{text}</Text>
  </TouchableOpacity>
);

export default UserProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    backgroundColor: 'white',
    padding: 20,
    paddingTop: 50,
    alignItems: 'center',
    position: 'relative',
  },
  backIcon: {
    position: 'absolute',
    left: 10,
    top: 50,
  },
  headerText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  phoneNumber: {
    color: 'black',
    fontSize: 14,
    marginVertical: 5,
  },
  editText: {
    color: 'black',
    position: 'absolute',
    right: 10,
    top: 50,
  },
  optionsContainer: {
    backgroundColor: 'white',
    paddingVertical: 10,
    marginVertical: 10,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  optionText: {
    marginLeft: 20,
    fontSize: 16,
    color: '#333',
  },
  addressContainer: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 10,
  },
  addressTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  addressDetails: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  callButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFEBB7',
    padding: 10,
    borderRadius: 10,
    flex: 1,
    marginRight: 5,
    justifyContent: 'center',
  },
  directionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFEBB7',
    padding: 10,
    borderRadius: 10,
    flex: 1,
    marginLeft: 5,
    justifyContent: 'center',
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 14,
    color: 'black',
  },
});
