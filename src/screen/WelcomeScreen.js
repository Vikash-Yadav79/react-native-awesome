import React from 'react'
import{View, Text, Button,Image,StyleSheet,} from 'react-native';


export default function WelcomeScreen({navigation}) {

  return (
    <View>
    <Text style={{fontWeight:'bold', marginHorizontal:100, fontSize:30,marginTop:30}}>Welcome to MyMose</Text>
    <Text style ={{marginHorizontal:100,marginTop:30,color:'coral'}}>Hope you are well today</Text>
    <Image
             style={{ width:"100%", height: 300 ,marginTop:40}}
            source={require('../../Images/guitor.png')}
            />
      <View style={styles.screenContainer}>
      <Button title="Login"
       onPress={() => navigation.navigate('Login')}
        color='orange'
         />
    </View>
    
    <View style={styles.screenContainer}>
   
    <Button title="Continue with email "
    onPress={() => navigation.navigate('SignIn')}
    />
   
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    borderRadius: 30,
    justifyContent: "center",
    padding: 16,
    color: 'red'
  },
  buttonStyle: {
    background:'#000',
  }
})
