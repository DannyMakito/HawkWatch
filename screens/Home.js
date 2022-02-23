import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Colors from '../constants/Colors';


const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>header</Text>
      </View>
      <Text>Home</Text>

      <TouchableOpacity onPress={()=>navigation.navigate('SignIn')} >
        <Text>Signin</Text>
      </TouchableOpacity>


    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: Colors.blue,
}
})