import React, { useCallback, useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import logo from '../../assets/manda.png';
import logoImg from '../../assets/logoMT.png';

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
    celphone: string;
    email: string;
    city: string;
    state: string;
    name: string;
}

const Dashboard: React.FC = () => {


    const [services, setServices] = useState<Service[]>([]);
  //  const { navigate } = useNavigation();

    useEffect(() => {
        api.get('services').then((response) => {
            setServices(response.data);
        });
    }, []);

    // const navigateToProfile = useCallback(() => {
    //     navigate('Profile');
    // }, [navigate]);


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
                            <ServiceName>{service.name}</ServiceName>
                            <ServiceMeta>
                                <Icon name="info" size={14} color="#6C63FF" />
                                <ServiceMetaText>
                                    {service.description}
                                </ServiceMetaText>
                            </ServiceMeta>

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
    );
};

export default Dashboard;
