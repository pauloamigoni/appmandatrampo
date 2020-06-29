import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';
import AppContainer from './hooks';

const App: React.FC = () => (
  <NavigationContainer>
    <AppContainer>
      <View style={{ backgroundColor: '#D3D3D3', flex: 1 }}>
          <StatusBar barStyle="light-content" backgroundColor="#8B008B" />
          <Routes />
      </View>
    </AppContainer>
  </NavigationContainer>

);

export default App;