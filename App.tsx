<<<<<<< HEAD
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
=======
import React, { useCallback, useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Feather';
//import { useNavigation } from '@react-navigation/native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { StyleSheet, Text, View } from 'react-native';

import logoImg from './assets/manda.png';
import ImgJunto from './assets/juntos.gif';
import Mochila from './assets/mochila.png';
import Mochila2 from './assets/mochila2.png';

import Tabbar from './src/components/Tabbar';
//import Button from './src/components/Button';

 import api from './services/api';

 import {
  Container,
  Header,
  ServiceBannerText,
  HeaderTitle,
  UserName,
  ProfileButton,
  UserAvatar,
  ImageHome,
  TextHome,
  ServicesList,
  ListServico,
  TextServico,
  ServiceListName,
  ServiceContainer,
  ServiceAvatar,
  ServiceInfo,
  ServiceName,
  ServiceMeta,
  ServiceMetaText,
  Acessos,
  ImgJuntos,
  Servico,
  ImgServico,
  ImgService,
  Mtexto,
  Cv,
  ImgCv,
  ListCv,
  TextCv,
  Union,
  Subtract,
  Subtract2,
  Subtract3,
  Rectangle,
  Rectangle4,
  Rectangle5,
} from './styles';


export interface Service {
  id: string;
  description: string;
  celphone: string;
  email: string;
  city: string;
  state: string;
  name: string;
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'flex-end',
  },
});


 
const Dashboard: React.FC = () => {

  

   const [services, setServices] = useState<Service[]>([]);
 
  useEffect(() => {
      api.get('services').then((response) => {
          setServices(response.data);
      });
  }, []);



  return (


    <View style={styles.container}>

         
      <Union>
{/* 
      <ServiceBannerText>
                Busque currículos e serviços manda um trampo pra alguém que
                precisa .
            </ServiceBannerText> */}

      <ImgCv  source={Mochila2} />
      <Subtract2/>
      <Subtract3/>
         <Subtract>
          <Rectangle4></Rectangle4>
          <Rectangle5></Rectangle5>
     
          <Rectangle/>
     
        </Subtract>

        <ImgService  source={Mochila} />

        <Mtexto>MANDATRAMPO</Mtexto>

        
        </Union>

        <Tabbar />
    </View>
  


      
  );
};

export default Dashboard;

>>>>>>> e7de18ba518801d66d227c8c6c0d3dc974d93e6e
