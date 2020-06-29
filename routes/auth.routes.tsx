import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

<<<<<<< HEAD
import { Feather as Icon } from '@expo/vector-icons';

import Home from '../pages/Home';
import Servicos from '../pages/Servicos';
import Curricullum from '../pages/Curricullum';
import About from '../pages/About';


import TabBar from '../src/components/Tabbar';

const Auth = createStackNavigator();

=======
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Servicos from '../pages/Servicos';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
    <Auth.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: '#312e38' },
        }}
    >

        <Auth.Screen name="Servicos" component={Servicos} />
        <Auth.Screen name="SignIn" component={SignIn} />
        <Auth.Screen name="SignUp" component={SignUp} />
    </Auth.Navigator>
);
>>>>>>> e7de18ba518801d66d227c8c6c0d3dc974d93e6e

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
