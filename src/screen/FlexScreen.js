

import React from "react";
import { StyleSheet, Text, View,TouchableOpacity } from "react-native";
import { CardStyleInterpolators } from "react-navigation-stack";

const FlexScreen = () => {
  return (
    <View style={[styles.container, {
      flexDirection: "row"
    }]}>
    
      <View style={{ padding: 20,flex: 1, backgroundColor: "#006B76", margin:5, borderRadius:20}}>
       <Text style={styles.item}> Straighten Your Back</Text> 
      </View>
      <View style={{ padding: 20, flex: 1, backgroundColor: "#00BCD4" ,borderRadius:20,margin:5}}>
      <Text style={styles.item}>Drink A Glass of Water</Text>
      {/* <TouchableOpacity>
        readMore
      </TouchableOpacity> */}
      </View> 
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item:{
    color:'white',
    // marginTop:100,
    fontSize:20,
    fontWeight:'bold',
    marginRight:20,
  }
 
});

export default FlexScreen;