import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ForgetPassword,
  SignupScreen,
  LoginScreen,
} from '../../../screens/RootScreen';
import {HomeScreen} from '../../../screens/MainScreen';
const Stack = createNativeStackNavigator();
const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;
