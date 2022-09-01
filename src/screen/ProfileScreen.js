import React from "react";
import {View, Text,} from 'react-native';
import FooterScreen from "./FooterScreen";
import SignInScreen from "./SignInScreen";


 export default function ProfileScreen({navigation}) {
    return (
      <>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>ProfileScreen</Text>
        {/* <SignInScreen/> */}
      </View>
      {/* <FooterScreen navigation={navigation}/> */}
      </>
    );
  }