import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './ProfileScreen';
import DataScreen from './DataScreen';
import ContactScreen from './ContactScreen';
import LearnScreen from './LearnScreen ';
import Details from './Details';
import {View, Text,Image} from 'react-native';



const Tab = createBottomTabNavigator();


const Tabs = () =>{
    return(
        <Tab.Navigator
        tabBarOption={{
            showLabel:false,
            style:{
                position:'absolute',
                bottom:25,
                left:20,
                right:20,
                elevation:0,
                backgroundColor:'#ffffff',
                borderRadious:15,
                height:90,

            }
        }}
        >
            <Tab.Screen name='Profile' component={ProfileScreen}
                options={{
                    tabBarIcon:({focused}) => (
                        <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                        <Image
                         source={require('../../Images/home.png')}
                          resizeMode='contain'
                         style={{
                            width:55,
                            height:40,
                            // tintColor:focused ? '#748c94' : '#748c94'
                          }}
                        />
                        <Text style={{color:focused ? '#748c94' : '#748c94', fontSize:12}}>Home</Text>
                        </View>
                    ),
                    
                }} />
             
             {/* <Tab.Screen name='Contact' component={ContactScreen}/> */}
            <Tab.Screen name='Data' component={DataScreen}
                options={{
                    tabBarIcon:({focused}) => (
                        <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                        <Image
                         source={require('../../Images/learn.png')}
                         resizeMode='contain'
                         style={{
                            width:25,
                            height:25,
                            // tintColor:focused ? '#748c94' : '#748c94'
                          }}
                        />
                        <Text >Home</Text>
                        </View>
                    ),
                    
                }}
            /> 
            <Tab.Screen name='Learn' component={LearnScreen}
                options={{
                    tabBarIcon:({focused}) => (
                        <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                        <Image
                         source={require('../../Images/profile.png')}
                         resizeMode='contain'
                         style={{
                            width:55,
                            height:25,
                            // tintColor:focused ? '#748c94' : '#748c94'
                          }}
                        />
                        <Text style={{color:focused ? '#748c94' : '#748c94', fontSize:12}}>profile</Text>
                        </View>
                    ),
                    
                }}
            /> 
            <Tab.Screen name='Details' component={Details}
                options={{
                    tabBarIcon:({focused}) => (
                        <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                        <Image
                         source={require('../../Images/mail2.png')}
                        //   resizeMode='contain'
                         style={{
                            width:25,
                            height:25,
                            // tintColor:focused ? '#748c94' : '#748c94'
                          }}
                        />
                        <Text style={{color:focused ? '#748c94' : '#748c94', fontSize:12}}>Contact</Text>
                        </View>
                    ),
                    
                }}
            /> 
            
        </Tab.Navigator>

    )
}

export default Tabs;