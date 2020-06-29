import React, { useCallback, useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import {View, Image, Text, TouchableOpacity, Linking, ScrollView } from 'react-native';
import logo from '../../assets/manda.png';
import logoImg from '../../assets/logoMT.png';

import styles from './styles';


import api from '../../services/api';
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
    ImageHome,
} from './styles';

export interface Service {
    id: string;
    description: string;
    user: {
      name: string,
      email: string;
      city: string;
      state: string;
      celphone: string;
      iswhats: boolean;
    }
    professions: {
      name: string;
    }
}

const Dashboard: React.FC = () => {


    const [services, setServices] = useState<Service[]>([]);
  //  const { navigate } = useNavigation();

    useEffect(() => {
        api.get('curriculum').then((response) => {
            setServices(response.data);
        });
    }, []);


    return (
        <Container>
            <Header>
                 <ImageHome  source={logoImg} />
             </Header>
      
            <ServicesList
                data={services}
                keyExtractor={(service) => service.id}
         
                renderItem={({ item: service }) => (
                    <ServiceContainer onPress={() => {}}>
                        <ServiceAvatar source={logo} />
                        <ServiceInfo>
                            <ServiceName>{service.user.name}</ServiceName>
                            <ServiceMeta>
                                <Icon name="user" size={14} color="#6C63FF" />
                                <ServiceMetaText>
                                    {service.professions.name}
                                </ServiceMetaText>
                            </ServiceMeta>

                            <ServiceMeta>
                                <Icon name="mail" size={14} color="#6C63FF" />
                                <ServiceMetaText>
                                    {service.user.email}
                                </ServiceMetaText>
                            </ServiceMeta>

                            <ServiceMeta>
                                <Icon name="home" size={14} color="#6C63FF" />
                                <ServiceMetaText>
                                    {service.user.city} - {service.user.state}
                                </ServiceMetaText>
                            </ServiceMeta>

                        </ServiceInfo>
                    </ServiceContainer>
                )}
            />
        </Container>
    );
};

export default Dashboard;
