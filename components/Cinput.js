import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../constants/Colors';

const Cinput = ( {value, setValue, placeholder, secureTextEntry}) => {
    const [,] = useState();
  return (
    <View style={styles.container}>
      <TextInput 
      value={value}
      onChangeText={setValue}
      placeholder={placeholder}
      placeholderTextColor="grey" 
      secureTextEntry={secureTextEntry}
      style={styles.input}/>
    </View>
  )
}

export default Cinput;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        width: "70%",
        borderColor: 'white',
        borderRadius: 12,
        borderWidth: 1, 
        marginVertical: 20,
        paddingHirizontal: 40,
        marginLeft: 50

    },
    input: {
     marginLeft: 20,
    color: "white",
    
    }
})