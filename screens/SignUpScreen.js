import React, {useState} from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import Cinput from '../components/Cinput';
import CustomButton from '../components/CustomButton';


const SignInScreen = () => {

    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword ]= useState('');
  const [confirmPassword, setConfirmPassword ]= useState('');
  const onSignUpPressed = () => {
    console.warn('sign In')
  };
  const onForgotPasswordPressed = () => {
    console.warn('Forget password')
  };
  return (
    <View style={styles.Container}>
        <View style={styles.header}>
           <Text style={{color: 'red', fontSize: 20}}>Sign Up</Text>
        </View>
         <View style={styles.midContainer}>
           <Text  style={styles.li}> create Account </Text> 
            <Cinput
             placeholder="name and surname " 
             value={name} 
             setValue={ setName} 
             />
             <Cinput
             placeholder="email" 
             value={email} 
             setValue={setEmail} 
             />

            <Cinput
             placeholder="password"
             value={password} 
             setValue={ setPassword} 
             secureTextEntry={true}
             />

              <Cinput
             placeholder="Confirmpassword"
             value={confirmPassword} 
             setValue={ setConfirmPassword} 
             secureTextEntry={true}
             />
          <CustomButton text="sign Up"  onPress={onSignUpPressed}/>

        <Text> Already have an account ? Sign In</Text>
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