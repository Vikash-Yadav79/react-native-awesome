
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import Tabs from './src/screen/Tabs';
// import WelcomeScreen from './src/screen/WelcomeScreen';
//  import ProfileScreen from './src/screen/ProfileScreen';
// import Details from './src/screen/Details';
// import HomeScreen from './src/screen/HomeScreen';
// import LearnScreen from './src/screen/LearnScreen ';
// import contactScreen from './src/screen/ContactScreen';
// import dataScreen from './src/screen/DataScreen';
// import UserScreen from './src/screen/UserScreen';
// import LoginScreen from './src/screen/LoginScreen';
// import Layout from './src/screen/baseLayout';
// import SignInScreen from './src/screen/SignInScreen'; 


const App = () => {
  return(
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
  )
}




// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Welcome">
//         <Stack.Screen name="welcome" component={WelcomeScreen} />
//          <Stack.Screen name="profile" component={ProfileScreen} />
//         <Stack.Screen name="detail" component={Details} />
//         <Stack.Screen name="Home" component={HomeScreen} /> 
//          <Stack.Screen name="Learn" component={LearnScreen} />  
//          <Stack.Screen name="contact" component={contactScreen} />  
//         <Stack.Screen name="data" component={dataScreen} /> 
//         <Stack.Screen name="user" component={UserScreen} /> 
//         <Stack.Screen name="Login" component={LoginScreen} /> 
//         <Stack.Screen name="Layout" component={Layout} /> 
//         {/* <Stack.Screen name="SignIn" component={SignInScreen} />  */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

 export default App;



// import React from 'react';
// import { Text, View } from 'react-native';
// import {Ionicons} from 'react-native-vector-icons';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home! page</Text>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;

//             if (route.name === 'Home') {
//               iconName = focused
//                 ? 'ios-information-circle'
//                 : 'ios-information-circle-outline';
//             } else if (route.name === 'Settings') {
//               iconName = focused ? 'ios-list-box' : 'ios-list';
//             }

//             // You can return any component that you like here!
//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//           tabBarActiveTintColor: 'tomato',
//           tabBarInactiveTintColor: 'gray',
//         })}
//       >
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Settings" component={SettingsScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }