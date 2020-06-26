import React, { useCallback, useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Feather';
//import { useNavigation } from '@react-navigation/native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { StyleSheet, Text, View } from 'react-native';

import logoImg from './assets/mandahome.png';
import ImgJunto from './assets/juntos.gif';

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
  ServiceListName,
  ServiceContainer,
  ServiceAvatar,
  ServiceInfo,
  ServiceName,
  ServiceMeta,
  ServiceMetaText,
  Acessos,
  ImgJuntos,
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



<Container>
    <Header>
        <HeaderTitle>
            <UserName>MANDATRAMPO </UserName>
            <Icon name="heart" size={18} color="#6C63FF" />
    
        </HeaderTitle>
              
                    <UserAvatar source={logoImg} />
                  
              
    </Header>

    <ServiceBannerText>
                Busque currículos e serviços manda um trampo pra alguém que
                precisa .
            </ServiceBannerText>

          
   
             <Acessos>
                  <ServiceContainer>
                    <TextHome>
                     Devido a pandemia estabelecida ao redor do nosso planeta,
                     a turma de Sistemas para Internet está desenvolvendo um 
                     jeitinho para ajudar quem está precisando, 
                     nesse momento dificil ou não.
                    </TextHome>

            
                  </ServiceContainer>
              </Acessos>

         
     
            
              <Grid>
    <Col>
        <Text>
        <ImgJuntos source={ImgJunto} />
</Text>
    </Col>
    <Col>
        <Text>   <TextHome>
                     Devido a pandemia estabelecida ao redor do nosso planeta,
                     a turma de Sistemas para Internet está desenvolvendo um 
                     jeitinho para ajudar quem está precisando, 
                     nesse momento dificil ou não.
                    </TextHome></Text>
    </Col>
</Grid>

    </Container>

       <Tabbar />
    </View>

      
  );
};

export default Dashboard;

