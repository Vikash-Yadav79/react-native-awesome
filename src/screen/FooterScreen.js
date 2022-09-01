import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function FooterScreen({navigation}) {
  return (
    <View style={{flexDirection: 'row', marginTop: 30}}>
      <TouchableOpacity>
        <Image
          source={require('../../Images/home.png')}
          style={{
            marginTop: -5,
            width: 40,
            height: 40,
            marginHorizontal: 10,
            marginLeft: 5,
          }}
        />
        <Text style={{marginBottom: -10, marginLeft: 10, marginTop: -5}}>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Learn')}>
        <Image
          source={require('../../Images/learn.png')}
          style={{marginTop: -10, width: 40, height: 40, margin: 25}}
        />
        <Text
          style={{
            marginBottom: -10,
            marginLeft: 25,
            marginTop: -26,
            marginRight: 20,
          }}>
          Learn
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('contact')}>
        <Image
          source={require('../../Images/mail2.png')}
          style={{
            marginTop: -10,
            width: 50,
            height: 40,
            margin: 15,
            marginTop: -25,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('data')}>
        <Image
          source={require('../../Images/progress.png')}
          style={{
            marginTop: -10,
            width: 40,
            height: 30,
            margin: 15,
            marginHorizontal: 25,
          }}
        />
        <Text style={{marginLeft: 30, marginTop: -10, marginRight: 10}}>
          progress
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('profile')}>
        <Image
          source={require('../../Images/profile.png')}
          style={{
            marginTop: -10,
            width: 50,
            height: 30,
            margin: 5,
            marginHorizontal: 20,
          }}
        />
        <Text style={{marginBottom: -10, marginLeft: 30, marginHorizontal: 20}}>
          profile
        </Text>
      </TouchableOpacity>
    </View>
  );
}
