import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Menu from '../pages/menu';
import NewGame from '../pages/menu/newGame';
import EditPlayers from '../pages/players/editPlayers'; 
import Players from '../pages/players';

const Stack = createStackNavigator();

function MenuStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Menu" 
        component={Menu} 
        options={{ 
          title: ''
        }} 
      />
      <Stack.Screen 
        name="NewGame" 
        component={NewGame} 
        options={{ 
          title: 'Novo Jogo'
        }}         
      />
      {/* <Stack.Screen 
        name="EditPlayers" 
        component={EditPlayers} 
      /> */}
    </Stack.Navigator>
  );
}

export default MenuStack;
