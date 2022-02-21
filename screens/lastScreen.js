import React from "react";
import {View, Text,Image,SafeAreaView,StyleSheet,Alert } from "react-native";
import {connect} from "react-redux";
import FlatButton from "./shared/button";
import SlideButton from "./shared/slideButton";
class lastScreen extends React.Component{

render()
{
  
    return(
      
<SafeAreaView style={styles.container}>
<Text style={styles.mainTextStyle}>Goodbye</Text>
<View style={styles.textViewStyle}>
  <Text style={styles.textStyle}>{this.props.userDetails.name}</Text>
  <Text style={styles.textStyle}>  {this.props.userDetails.surname}</Text>
</View>
<View style={styles.textViewStyle}>

<Text style={styles.textnote}>
  Thank  you  {this.props.userDetails.name}  We  Are  Done
  
  </Text>

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
        alignItems: 'center',
        backgroundColor:"black",
        
        
        
      },
      textViewStyle:{
        flexDirection:"row", 
        paddingBottom:20,
       // marginTop:50,
        marginHorizontal:20,
        marginVertical: 10
      },
      textStyle:{
        //width:"100%",
        height:20,
        //paddingHorizontal:15,
        textAlign:"right",
        marginTop:10,
        fontSize:15,
        color:'white'
    },
    textnote:{
      flex: 1,
      height:60,
      //paddingHorizontal:15,
      textAlign:"center",
      marginTop:10,
      fontSize:20,
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

export default connect(mapStateToProps,null)(lastScreen)