// In App.js in a new project

import * as React from 'react';
import { View, Text,StyleSheet,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';

import {api} from './services/api.js';
import {StartScreen} from './screens/StartScreen';
import {ListScreen} from './screens/ListScreen';



const Stack = createStackNavigator();


function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator >
        
        <Stack.Screen name="GitHub Search" component={StartScreen} />
        <Stack.Screen name="ReposList" component={ListScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;