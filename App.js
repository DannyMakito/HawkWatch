import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SignInScreen from './screens/SignInScreen';
import RootStack from './components/RootStack';
import Home from './screens/Home';

const App = () => {
  return (
    <NavigationContainer>
        <RootStack />
    </NavigationContainer>
  )
}

export default App