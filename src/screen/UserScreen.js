import React from "react";
import {View, Text,Image,StyleSheet} from 'react-native';
import FooterScreen from "./FooterScreen";
import FlexScreen from "./FlexScreen";


 export default function UserScreen({ navigation }) {
    return (
      <>
      <Text style={{fontWeight:'bold',fontSize:15,marginHorizontal:20}}>Tuesday, 23 Aug</Text>
     <Image
             style={{ width:"10%", height: 25,marginHorizontal:350,marginTop:-15}}
            source={require('../../Images/notification.png')}
            />
            <Text style= {{fontWeight:'bold',fontSize:55, color:'black',marginHorizontal:20}} >Hi, Arthur!</Text>
            <Text style={{color:'black',fontWeight:'bold', fontSize:20,marginHorizontal:25}}>Hope you are  well today</Text>
            <Text style={{margin:30, color:'black',fontWeight:'bold'}}>Time Tracker</Text>
            
          <View style={styles.card}>
          <Text>
                Playing...
              </Text>
              <Image
             style={{ width:"15%", height: 50, backgroundColor: 'red'}}
             source={require('../../Images/music-icon-7.png')}
            />
          </View>
          <View style={{ marginLeft: 40 }}>
          
          </View>
           <FlexScreen/>
            <FooterScreen navigation={navigation}/> 
            </>
    );
  }





  const styles = StyleSheet.create({
    card: {
      // fontSize: 25,
      fontStyle: 'italic',
      borderRadius:20,
      //  marginTop:-10,
      borderRadius:20,
      margin: 10,
      backgroundColor: '#D4C4FB',
      justifyContent: 'center',
      //  textAlign: 'left', 
      padding: 30,
      height:100,
      color:'black',
    },
    container:{
      // marginTop:30,
    borderRadius:20,
    margin: 50,
    backgroundColor: 'red',
    justifyContent: 'center',
    // alignItems: 'center',
    padding: 20,
    height:120,
    flexDirection: 'column'
    }
  })