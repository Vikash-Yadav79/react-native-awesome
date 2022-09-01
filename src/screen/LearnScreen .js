
import React from "react";
import {View, Text,} from 'react-native';
import FooterScreen from "./FooterScreen";


 export default function LearnScreen({navigation}) {
    return (
      <>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>LearnScreen</Text>
      </View>
      {/* <FooterScreen navigation={navigation}/> */}
      </>
    );
  }






























// import React from 'react'
// import{View, Text, StyleSheet, TouchableOpacity} from 'react-native'

// export default function LoginScreen (navigation) {
//   return (
//     <View style={styles.container}>
//             <Text style={{fontSize:40,fontWeight:'bold'}}>Welcome to MyMose</Text>
//         <View>
//             <Image
//              style={{ width:"100%", height: 300 }}
//             source={require('../../Images/guitor.png')}
//             />
//              <View style={{ flexDirection: 'row', margin: 20, paddingVertical: 20 }}>
//           <TouchableOpacity
//           onPress={ () => navigation.navigate('Login') }
//             style={{ backgroundColor: '#0d47a1', padding: 10, width:150, borderRadius: 30, marginHorizontal: 2 }}
//           >
//             <Text style={{ textAlign: 'center', color: '#FFF', fontSize: 18 }}>Login</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={{ backgroundColor: 'Orange', padding: 10, width:150, borderRadius: 30, marginHorizontal: 2, borderWidth: 1, borderColor: '#0d47a1' }}
//           >
//             <Text style={{  flex: 1 ,textAlign: 'flex-end', color: '#0d47a1', marginBottom: 30 }}>Continue with email</Text>
//           </TouchableOpacity>
          
//         </View>
//         </View>
//     </View>
//   )
// }


// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         backgroundColor:'#fff',
//         alignItems:'center',
//         justifyContent:'center'
//     },
// });



