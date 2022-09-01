import React from "react";
import {View, Text,} from 'react-native';
import FooterScreen from "./FooterScreen";


 export default function ContactScreen({navigation}) {
    return (
      <>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>contactScreen</Text>
      </View>
      {/* <FooterScreen navigation={navigation}/> */}
      </>
    );
  }
