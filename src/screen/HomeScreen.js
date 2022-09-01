import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import FooterScreen from './FooterScreen';


export default function HomeScreen({navigation}) {
  return (
    <>
      <Text style={{fontWeight: 'bold', fontSize: 15, marginHorizontal: 10}}>
        Tuesday, 23 Aug
      </Text>
      <Image
        style={{
          width: '10%',
          height: 20,
          marginHorizontal: 350,
          marginTop: -15,
        }}
        source={require('../../Images/search.png')}
      />
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 40,
          color: 'black',
          marginHorizontal: 10,
        }}>
        Learn
      </Text>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 20,
          color: 'black',
          marginHorizontal: 10,
        }}>
        Choose the part of the body
      </Text>

      <ScrollView>
        <TouchableOpacity style={[styles.item, styles.big]}>
          <Text style={styles.text}>Back & Neck</Text>
          <Text style={styles.subtext}>11 disease</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.item, styles.small]}>
          <Text style={styles.text}> Head & Face</Text>
          <Text style={styles.subtext}>9 disease</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.item, styles.try]}>
          <Text style={styles.text}>Elbow & Shoulder</Text>
          <Text style={styles.subtext}>12 disease</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.item, styles.hi]}>
          <Text style={styles.text}>Hand & Arm</Text>
          <Text style={styles.subtext}>2 disease</Text>
        </TouchableOpacity>
      </ScrollView>
       <FooterScreen/> 
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
