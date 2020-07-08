import React, {Component} from 'react';

import {View,
        StyleSheet
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ColorList from './components/ColorList';
import ColorInfo from './components/ColorInfo';
import WebPage from './components/WebPage';

const Stack= createStackNavigator();

function App(){
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
          name="Home"
          component={ColorList}
          options={{title:'Available Colors'}}
          />
          <Stack.Screen
          name="Details"
          component={ColorInfo}
          options={({route})=>({title: route.params.item.key})}
          />
          <Stack.Screen
          name="Web"
          component={WebPage}
          options={{title: 'All Colors'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default App;