import React from "react";
import {View, Text,} from 'react-native';
import FooterScreen from "./FooterScreen";


 export default function DataScreen({navigation}) {
    return (
      <>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>dataScreen</Text>
      </View>
      {/* <FooterScreen navigation={navigation}/> */}
      </>
    );
  }



   
