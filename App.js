
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import Tabs from './src/screen/Tabs';
import WelcomeScreen from './src/screen/WelcomeScreen';
 import ProfileScreen from './src/screen/ProfileScreen';
import Details from './src/screen/Details';
import HomeScreen from './src/screen/HomeScreen';
import LearnScreen from './src/screen/LearnScreen ';
import contactScreen from './src/screen/ContactScreen';
import dataScreen from './src/screen/DataScreen';
import UserScreen from './src/screen/UserScreen';
import LoginScreen from './src/screen/LoginScreen';
import Layout from './src/screen/baseLayout';
import SignInScreen from './src/screen/SignInScreen'; 
import FooterScreen from './src/screen/FooterScreen';






const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="welcome" component={WelcomeScreen} />
         <Stack.Screen name="profile" component={ProfileScreen} />
        <Stack.Screen name="detail" component={Details} />
        <Stack.Screen name="Home" component={HomeScreen} /> 
         <Stack.Screen name="Learn" component={LearnScreen} />  
         <Stack.Screen name="contact" component={contactScreen} />  
        <Stack.Screen name="data" component={dataScreen} /> 
        <Stack.Screen name="user" component={UserScreen} /> 
        <Stack.Screen name="Login" component={LoginScreen} /> 
        <Stack.Screen name="Layout" component={Layout} /> 
         <Stack.Screen name="SignIn" component={SignInScreen} />    
      </Stack.Navigator>
    </NavigationContainer>
  );
}

  export default App;


// import IconBadge from 'react-native-icon-badge';
// import React from 'react'
// import { View,Text ,Stylesheet  } from 'react-native-animatable';

// export default function App (){
//   const BadgeCount = 12
//   return (
//      <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center',}}>
//    <IconBadge
//     MainElement={
//       <View style={{backgroundColor:'blue',
//         width:50,
//         height:50,
//         margin:60
//       }}/>
//     }
//     BadgeElement={
//       <Text style={{color:'#FFFFFF'}}>{BadgeCount}</Text>
//     }
//     IconBadgeStyle={
//       {width:30,
//       height:30,
//       backgroundColor: '#FF00EE'}
//     }
//      Hidden={BadgeCount==0}
//     />
// </View>
//   )
// } 

