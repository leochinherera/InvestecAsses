import React from "react";
import {View, Text,TouchableOpacity,StyleSheet} from "react-native";
export default function FlatButton({text,onPress,backgroundColor}){

    return(
        <TouchableOpacity onPress={onPress} >
 <View style={styles.button} backgroundColor={backgroundColor}>
     <Text style={styles.buttonText}>
     {text}
     </Text>
 </View>
        </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
    button:{
        borderRadius:8,
        paddingVertical:15,
        paddingHorizontal:140,
       
        
        
    },
    buttonText:{
 color:'white',
 fontWeight:'bold',

 fontSize:18,
 textAlign:'center',


    }
})