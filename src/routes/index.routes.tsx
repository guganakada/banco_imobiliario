import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { themas } from '../global/themes';

// import Menu from '../pages/menu';
// import Gamers from '../pages/gamers';
import Dices from '../pages/dices';
import Transactions from '../pages/transactions';
import MenuStack from './menuStack.routes';
import PlayersStack from './playersStack.routes';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: string;

          switch (route.name) {
            case 'Menu':
              iconName = 'menu';
              break;
            case 'Dados':
              iconName = 'casino';
              break;
            case 'Jogadores':
              iconName = 'people';
              break;
            case 'Transações':
              iconName = 'attach-money';
              break;
            default:
              iconName = 'help-outline';
              break;
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        // tabBarActiveTintColor: 'tomato',
        tabBarActiveTintColor: '#00BD68',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Menu" component={MenuStack} />
      <Tab.Screen name="Dados" component={Dices} />
      <Tab.Screen name="Jogadores" component={PlayersStack} />
      <Tab.Screen name="Transações" component={Transactions} />
    </Tab.Navigator>

  );
}
