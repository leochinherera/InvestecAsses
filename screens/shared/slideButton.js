import React from "react";
import Slider from 'react-native-slide-to-unlock';
import {Image,StyleSheet,View,Text} from "react-native";
export default function SlideButton({text,onEndReached}){
    return(
       
      <Slider 
      
      onEndReached={onEndReached}
      containerStyle={{
        margin: 8,
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        width: '85%',
        backgroundColor: 'blue'
      }}
      sliderElement={
        <Image
          style={{
            width: 50,
            margin: 4,
            borderRadius: 5,
            height: 50,
            backgroundColor: 'red',
          }}
          source={{
            uri:
              'https://facebook.github.io/react-native/docs/assets/favicon.png',
          }}
        />
      }
    >
  <Text style={styles.buttonText}>
      {text}
      </Text>
</Slider>

    )


}
const styles=StyleSheet.create({
  
    buttonText:{
 color:'deepskyblue',
 fontWeight:'bold',

 fontSize:18,


    }
})