import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import HomeScreen from './HomeScreen';
import FooterScreen from './FooterScreen';
import ProfileScreen from './ProfileScreen';
import ContactScreen from './ContactScreen';

export default function Layout({navigation}) {
  return (
    <>
      <ScrollView>
        <HomeScreen navigation={navigation} />
        <ProfileScreen navigation={navigation} />
        <ContactScreen navigation={navigation} />
      </ScrollView>
      <FooterScreen navigation={navigation} />
    </>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  item: {
    marginTop: 30,
    borderRadius: 20,
    margin: 10,
    backgroundColor: 'red',
    justifyContent: 'center',
    // alignItems: 'center',
    padding: 20,
    height: 120,
  },
  text: {
    color: '#000000',
    fontSize: 25,
    fontStyle: 'italic',
    // padding: 20,
    // marginLeft:-150,
  },
  subtext: {
    color: '#000000',
    fontSize: 14,
    fontStyle: 'italic',
    color: 'white',
    textAlign: 'left',
  },
  big: {
    backgroundColor: '#EC7663',
  },
  small: {
    backgroundColor: '#8ED1FC',
  },
  try: {
    backgroundColor: '#FF9800',
  },
  hi: {
    backgroundColor: '#607D8B',
  },
});
