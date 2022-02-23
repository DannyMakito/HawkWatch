import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';

const CustomButton = ({onPress, text, type}) => {
  return (
    <Pressable onPress={onPress} style={[styles.sbtn ,styles['fbtn_${type}'] ]}>
      <Text style={{fontSize: 20,   color: '#fff', fontWeight: 'bold'}}>{text}</Text>
    </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    sbtn: {
        width: "80%",
        height: 50,
        borderWidth: 1,
        borderRadius: 16,
        backgroundColor: "#0E86D4",
        justifyContent: "center",
        alignItems: 'center',
        marginLeft: 50
      },
      fbtn:{
        backgroundColor: 'grey',

      }
})