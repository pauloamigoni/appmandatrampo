import React, { useCallback, useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Feather';
//import { useNavigation } from '@react-navigation/native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { StyleSheet, Text, View } from 'react-native';

import logoImg from '../../assets/logoMT.png';
import ImgJunto from '../../assets/juntos.gif';
import Mochila from '../../assets/mochila.png';
import Mochila2 from '../../assets/mochila2.png';

import Tabbar from '../../src/components/Tabbar';
//import Button from './src/components/Button';

 import api from '../../services/api';

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
  TextServico,
  ServiceMetaText,
  Acessos,
  Servico,
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
  TextFatec,
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
export interface Curriculum {
  id: string;
  name: string;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'flex-end',
   },
});


 
const Home: React.FC = () => {

 const [services, setServices] = useState<Service[]>([]);
 const [curriculos, setCurriculos] = useState<Curriculum[]>([]);


  useEffect(() => {
      api.get('services').then((response) => {
          setServices(response.data);
    });
}, []);

useEffect(() => {
  api.get('curriculum').then((response) => {
      setCurriculos(response.data);
});
}, []);

  return (

    <View style={styles.container}>
      <Union>
        <Header>
            <ImageHome  source={logoImg} />
        </Header>
        
     <TextHome>Devido a pandemia estabelecida ao redor do nosso planeta, 
       a turma de Sistemas para Internet está desenvolvendo 
       um jeitinho para ajudar quem está precisando, nesse momento dificil ou não. 
        {'\n\n'}<Text style={{fontWeight: "bold",}} >FATEC ARARAS</Text>
      </TextHome>
      
     

       
        </Union>
        {/* <Tabbar /> */}
    </View>
      
  );
};

export default Home;

