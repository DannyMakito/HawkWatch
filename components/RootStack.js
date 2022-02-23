import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Store from '../screens/Store';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import TabNavigator from '../components/TabNavigator';


const Stack = createStackNavigator();

const RootStack = () => {
  return (
      <Stack.Navigator>
          <Stack.Screen name='TabNav' component={TabNavigator} options={{headerShown: false}} />
          <Stack.Screen name='SignIn' component={SignInScreen} />
      </Stack.Navigator>
  )
}

export default RootStack;

