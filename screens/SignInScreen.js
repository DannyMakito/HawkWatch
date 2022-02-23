import React, {useState} from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, Pressable } from 'react-native';
import Cinput from '../components/Cinput';
import Feather from 'react-native-vector-icons/Feather';
import CustomButton from '../components/CustomButton';


const SignInScreen = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword ]= useState('');
  const onSignInPressed = () => {
    console.warn('sign In')
  };
  const onForgotPasswordPressed = () => {
    console.warn('Forget password')
  };
  return (
    <View style={styles.Container}>
        <View style={styles.header}>
          <Image source={require('../assets/Hawk_Watch_Logo-removebg-preview.png')}  
            resizeMode="cover"
            style={styles.logo}
          />
        </View>
         <View style={styles.midContainer}>
           <Text  style={styles.li}> Sign In </Text> 
           
                
                <Cinput
             placeholder="email" 
             value={email} 
             setValue={ setEmail} 
             />
           
            <Cinput
             placeholder="password"
             value={password} 
             setValue={ setPassword}  
             secureTextEntry={true}
             />
             <View onPress={onForgotPasswordPressed}>
                    <Text  style={{color: "white"}}> Forgot password </Text>
                
               </View>
                  
          <CustomButton text="sign In"  onPress={onSignInPressed} />
              
               <Text style={{color: "white", marginLeft: 130, padding:20}}>or log in with</Text>
              
           
         
          <TouchableOpacity>
                <Image source={require('../assets/Wios.png')}
                style={{width: "13%",
                height: 60}}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../assets/google.png')}
                style={{width: "13%",
                height: 60}}/>
            </TouchableOpacity>
         
               
            
        <Text  style={{color: "white"}}>dont have a Account? Sign Up</Text>
      </View>
    </View>
  )
}

export default SignInScreen
;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    header: {
      flex: 0.3,
      backgroundColor: '#fff',
      alignItems: "center",
      justifyContent: "center",
    },
    midContainer :{
      backgroundColor: 'black',
      flex: 0.8,
      borderTopLeftRadius: 70,
     
    },
    li :{
      fontSize: 34 , 
      fontWeight:'800',
       marginBottom: 10, 
       marginTop: 20,
       color: '#fff',
       marginLeft: 130
      },
      logo: {
        marginTop:50,
        width: "80%",
        height: 300
      }, 
})