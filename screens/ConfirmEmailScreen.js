import React, {useState} from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import Cinput from '../components/Cinput';
import CustomButton from '../components/CustomButton';


const   ConfirmEmailScreen = () => {

    const [code, setCode] = useState('');
    const [resendCode, setResendCode] = useState('');

  

  return (
    <View style={styles.Container}>
        <View style={styles.header}>
           <Text style={{color: 'red', fontSize: 50}}>Confirm Email</Text>
        </View>
         <View style={styles.midContainer}>
            <Cinput
             placeholder="Enter Code " 
             value={code} 
             setValue={ setCode} 
             />
        
      </View>
    </View>
  )
}

export default  ConfirmEmailScreen;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    header: {
      flex: 0.2,
      backgroundColor: '#fff',
      alignItems: "center",
      justifyContent: "center",
    },
    midContainer :{
      backgroundColor: 'black',
      flex: 0.8,
      borderTopLeftRadius: 70,
      alignItems: "center"
    },
    li :{
      fontSize: 34 , 
      fontWeight:'800',
       marginBottom: 20, 
       marginTop: 40,
       color: '#fff'
      },
     
})