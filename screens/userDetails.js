import React from "react";
import {View, Text,StyleSheet, SafeAreaView,TextInput,TouchableHighlight} from "react-native";
import {connect} from "react-redux"
import DeviceInfo from 'react-native-device-info';
import {saveDetails} from "../redux/actions/saveDetailsAction"
import FlatButton from "./shared/button";

class userDetails extends React.Component
{

  
    constructor(props)
    {
        super(props)
        this.state = {
            name:"",
            surname:"",
            companyName:"",
            isEmulator: false
        }
    }
    componentDidMount(){
        DeviceInfo.isEmulator().then((isEmulator) => {
          if (isEmulator) {
            this.setState({isEmulator: true});
          }
        });
      }

    render(){
        const { isEmulator } = this.state;
        return(
           
            <SafeAreaView style={styles.container}>
                <View style={styles.mainView}>
                    <Text style={styles.mainTextStyle}>Enter Your Details</Text>
<Text style={styles.textStyle}>Enter Your Name</Text>
                <TextInput 
                    style={styles.textInputStyle}
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#cccccc"
                    placeholder="Enter Your Name"
                    onChangeText={name => {
                        this.setState({ name: name }, () => {
                        });
                      }}
                />
                <Text style={styles.textStyle}>Enter Your Surname</Text>
                <TextInput 
                    style={styles.textInputStyle}
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#cccccc"
                    placeholder="Enter Your Surname"
                    onChangeText={surname => {
                        this.setState({ surname: surname }, () => {
                        });
                      }}
                                              
                />            
                <View  style={{marginVertical: 30}}>
                    
                <FlatButton text="Login"  backgroundColor='deepskyblue'
                     onPress={() => {
                       var userDetails = {};
                        userDetails.name = this.state.name;
                        userDetails.surname = this.state.surname;
                       userDetails.dummydata = "khbdh";

       this.props.navigation.navigate("Profile", this.props.reduxSaveUserDetail(userDetails))
        }} /> 
                    
 </View> 
     <View style={{marginVertical: 30}}>
        <Text>App running in emulator {`${isEmulator}`}</Text>
          
            </View>       
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
      alignItems: 'center',
      backgroundColor:"black",
    //   paddingHorizontal:10,
      paddingBottom:50
    },
    mainView:{
      width:"100%",
      height:"50%",
      justifyContent: "flex-start",
      alignItems: "center",
      padding:20,
    },
    textInputStyle:{
        width:"100%",
        height:40,
        backgroundColor:"white",
        paddingHorizontal:15,
        marginBottom:10,
        marginTop:10,
        color:'black'
        
    },
    textStyle:{
        width:"100%",
        height:20,
        //paddingHorizontal:15,
        textAlign:"left",
        marginTop:10,
        fontSize:15
    },
    mainTextStyle:{
        width:"100%",
        height:40,
        //paddingHorizontal:15,
        textAlign:"center",
        marginTop:10,
        marginBottom:10,
        fontSize:20
    },
    buttonStyle:{
        width: "100%",
        height: 40,
        color:'black',
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "deepskyblue",
        marginTop:20 
    },
    buttonTextStyle:{
        width:"100%",
        height:"100%",
        textAlign:"center",
        marginTop:10,
        fontSize:18,
        backgroundColor:'deepskyblue'
    },
  }) 
  const mapDispatchToProps = (dispatch) => 
    {
        return{
         reduxSaveUserDetail:(employeDetails) => dispatch(saveDetails(employeDetails))
             
        }
    }
    export default connect(
        null,
          mapDispatchToProps
      )(userDetails); 