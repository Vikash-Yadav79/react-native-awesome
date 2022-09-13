
import React from "react";
import {View, Text,} from 'react-native';
import FooterScreen from "./FooterScreen";


 export default function LearnScreen({navigation}) {
    return (
      <>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>LearnScreen</Text>
      </View>
       <FooterScreen navigation={navigation}/> 
      </>
    );
  }
// import React from "react";
// import {View, Text,} from 'react-native';
// import styles from "react-native-icon-badge/style";
// import { Avatar,Badge } from "react-native-paper";

// export default function LearnScreen({navigation}){
//   return (

//     <View style={styles.container}>

//       <View>
//         <Avatar
//          rounded
//          source={{
//           uri:"https://www.citypng.com/public/uploads/preview/-11594730224ty2a7hmakh.png"
//          }}
//          size="large"
//          />
//       </View>
//       <Badge
//         value="12"
//         containerStyle={{position:"absolute",right:160,top:390}}
//         />
//     </View>
//   )
// }
