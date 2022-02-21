import React from "react";
import {View, Text,Image,SafeAreaView,StyleSheet,Alert } from "react-native";
import {connect} from "react-redux";
import FlatButton from "./shared/button";
import SlideButton from "./shared/slideButton";
class ShowDetail extends React.Component{

render()
{
  
    return(
      
<SafeAreaView style={styles.container}>
<Text style={styles.mainTextStyle}>Your Details </Text>
<View style={styles.textViewStyle}>
     <Text style={styles.textStyle}>Hie  </Text>
       <Text style={styles.textStyle}>{this.props.userDetails.name}</Text>
         <Text style={styles.textStyle}>  {this.props.userDetails.surname}</Text>
</View>

<View style={styles.containerButton}>
<View>
<Text style={{color: 'deepskyblue'}}
           onPress={() => Linking.openURL('http://google.com')}>
              Press me
                </Text>
</View >
        <View style={{marginVertical: 10}} >
             <FlatButton   text="Press me" backgroundColor='dimgray' disabled
                onPress={() => Alert.alert('Cannot press this one')} />
                  </View>
<View style={{marginVertical: 10}}>
        <FlatButton text="Press me"  backgroundColor='deepskyblue'/>
              </View>


<SlideButton text='Slide me to Continue'
         onEndReached={() => {
            this.props.navigation.navigate("Exit")}}/>
            </View>
</SafeAreaView>
    )
}
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: "100%",
        height:"100%",
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        backgroundColor:"black",
        
        
      },
      containerButton: {
        flex: 1,
        width: "100%",
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor:"black",
        
        
        
      },
      textViewStyle:{
        flexDirection:"row", 
        paddingBottom:20,
       // marginTop:50,
        marginHorizontal:20
      },
      textStyle:{
        //width:"100%",
        height:20,
        //paddingHorizontal:15,
        textAlign:"left",
        marginTop:10,
        fontSize:15,
        color:'white'
    },
    mainTextStyle:{
      width:"100%",
      height:40,
      //paddingHorizontal:15,
      textAlign:"center",
      marginTop:10,
      marginBottom:10,
      fontSize:20,
      color:'white'
  },

})

const mapStateToProps = (state) => {
  return{
    userDetails: state.DetailReducer.userDetails
  }
}

export default connect(mapStateToProps,null)(ShowDetail)