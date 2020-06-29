import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import { Feather as Icon } from '@expo/vector-icons';

import Home from '../pages/Home';
import Servicos from '../pages/Servicos';
import Curricullum from '../pages/Curricullum';
import About from '../pages/About';


import TabBar from '../src/components/Tabbar';

const Auth = createStackNavigator();


  const AuthRoutes = createAppContainer(
  createSwitchNavigator({
    Auth: createBottomTabNavigator({
  Home:{
    screen: Home,
    navigationOptions: {
      tabBarIcon: () => <Icon name='home' size={20} />
    }
  },
  Servicos:{
    screen: Servicos,
    navigationOptions: {
      title: 'Serviços',
      tabBarIcon: () => <Icon name='settings' size={20} />,
    
    }
  },
  Curricullum:{
    screen: Curricullum,
    navigationOptions: {
      title: 'CV',
      tabBarIcon: () => <Icon name='heart' size={20} />,
   
    }
  }

  ,
  About:{
    screen: About,
    navigationOptions: {
      title: 'Sobre',
      tabBarIcon: () => <Icon name='info' size={20} />,
    }
  }
    }
//,{
//   tabBarComponent: TabBar,
// }
)
})

)
export default AuthRoutes;
