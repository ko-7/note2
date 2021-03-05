import React, { Component } from 'react';
import { SafeAreaView, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import DirView from './src/screens/DirView';
import Footer from './src/components/Footer'

// const Stack = createStackNavigator();
const Stack = createStackNavigator();

export default class App extends Component {
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='top'>
          <Stack.Screen name="DirView" component={DirView} options={{ title: 'Home' }} />
        </Stack.Navigator>

        
        {/* <Footer /> */}
      </NavigationContainer>
    );
  }
}