import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Players from '../pages/players';
import Movement from '../pages/players/movements';
import EditPlayers from '../pages/players/editPlayers';

const Stack = createStackNavigator();

function GamerStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Players" 
        component={Players}
        options={{ 
          title: ''
        }} 
       />
      <Stack.Screen 
        name="Movement" 
        component={Movement}
        options={{ 
          title: ''
        }} 
        />
      <Stack.Screen 
        name="EditPlayers" 
        component={EditPlayers}
        options={{ 
          title: ''
        }} 
       />
    </Stack.Navigator>
  );
}

export default GamerStack;
