import React, { useCallback, useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Feather';
//import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import logoImg from './assets/manda.png';

import Tabbar from './src/components/Tabbar';

 import api from './services/api';

 import {
  Container,
  Header,
  ServiceBannerText,
  HeaderTitle,
  UserName,
  ProfileButton,
  UserAvatar,
  ServicesList,
  ServiceListName,
  ServiceContainer,
  ServiceAvatar,
  ServiceInfo,
  ServiceName,
  ServiceMeta,
  ServiceMetaText,
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

            <ServicesList
                data={services}
                keyExtractor={(service) => service.id}
                ListHeaderComponent={
                    <ServiceListName>
                        Serviços <Icon name="heart" size={28} color="#6C63FF" />{' '}
                        Curriculum
                    </ServiceListName>
                }
                renderItem={({ item: service }) => (
                  <ServiceContainer onPress={() => {}}>
                      <ServiceAvatar source={logoImg} />
                      <ServiceInfo>
                          <ServiceName>{service.name}</ServiceName>
                          <ServiceMeta>
                              <Icon name="info" size={14} color="#6C63FF" />
                              <ServiceMetaText>
                                  {service.description}
                                  {'\n'}
                              </ServiceMetaText>
                          </ServiceMeta>
                      
                          <View
                              style={{
                                borderBottomColor: '#fff',
                                borderBottomWidth: 1,
                              }}
                            />
                      
                          <ServiceMeta>
                              <Icon name="phone" size={14} color="#6C63FF" />
                              <ServiceMetaText>
                                  {service.celphone}
                              </ServiceMetaText>
                          </ServiceMeta>

                          <ServiceMeta>
                              <Icon name="mail" size={14} color="#6C63FF" />
                              <ServiceMetaText>
                                  {service.email}
                              </ServiceMetaText>
                          </ServiceMeta>

                          <ServiceMeta>
                              <Icon name="home" size={14} color="#6C63FF" />
                              <ServiceMetaText>
                                  {service.city} - {service.state}
                              </ServiceMetaText>
                          </ServiceMeta>
                      </ServiceInfo>
                  </ServiceContainer>
              )}
            />

    </Container>

       <Tabbar />
    </View>

      
  );
};

export default Dashboard;

