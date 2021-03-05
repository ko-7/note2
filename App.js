import React, { useState } from 'react';
import { View, Text, Button,TouchableOpacity } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import DirView from './src/screens/DirView'
import FileView from './src/screens/FileView'
import Setting from './src/screens/Setting'
import AddFile from './src/screens/AddFile'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DirView"
        component={DirView} 
        initialParams={{homeStatus: 'Home'}}
        options={({route,navigation}) => ({
          headerTitle: route.params.homeStatus,
          headerRight: () => (
            // <TouchableOpacity
            //   onPress={() => navigation.popToTop()}
            // >
            //   <Icon name='home' style={{fontSize:'26'}} />
            // </TouchableOpacity>
            <Button
              onPress={() => navigation.popToTop()}
              title='top'
              color="#5f0"
            >
            </Button>
          )
        })}
      />
      <Stack.Screen name="FileView" component={FileView} options={{headerTitle: 'ファイル',}} />
    </Stack.Navigator>
  );
}
function AddFileTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AddFile" component={AddFile} />
    </Stack.Navigator>
  );
}
function SettingTab() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={Setting} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"             //ルーティングに使う任意の文字
          component={HomeTab}   //ルーティング先のコンポーネント名
          options={{
            tabBarLabel: 'Home',  //タブ（ボタン）に表示する文字
            tabBarIcon:() => (
              <Icon name='home' color='blue' size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="AddFile" 
          component={AddFileTab}
          options={{
            tabBarLabel: 'AddFile',
            tabBarIcon:() => (
              <Icon name='add' color='blue' size={26} />
            ),
          }} 
        />
        <Tab.Screen
          name="Setting" 
          component={SettingTab}
          options={{
            tabBarLabel: 'Setting',
            tabBarIcon:() => (
              <Icon name='build' color='blue' size={26} />
            ),
          }}  
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}