import React, { useCallback, useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
<<<<<<< HEAD
import logo from '../../assets/manda.png';
import logoImg from '../../assets/logoMT.png';

=======
import logoImg from '../../assets/manda.png';
>>>>>>> e7de18ba518801d66d227c8c6c0d3dc974d93e6e
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
<<<<<<< HEAD
    ImageHome,
=======
>>>>>>> e7de18ba518801d66d227c8c6c0d3dc974d93e6e
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
<<<<<<< HEAD


    const [services, setServices] = useState<Service[]>([]);
  //  const { navigate } = useNavigation();
=======
    const [services, setServices] = useState<Service[]>([]);
    const { navigate } = useNavigation();
>>>>>>> e7de18ba518801d66d227c8c6c0d3dc974d93e6e

    useEffect(() => {
        api.get('services').then((response) => {
            setServices(response.data);
        });
    }, []);

<<<<<<< HEAD
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
=======
    const navigateToProfile = useCallback(() => {
        navigate('Profile');
    }, [navigate]);
    return (
        <Container>
            <Header>
                <HeaderTitle>
                    Bem Vindo ao {'\n'}
                    <UserName>MANDATRAMPO </UserName>
                    <Icon name="heart" size={18} color="#6C63FF" />
                </HeaderTitle>
                <ProfileButton onPress={navigateToProfile}>
                    <UserAvatar source={logoImg} />
                </ProfileButton>
            </Header>
            <ServiceBannerText>
                Busque currículos e serviços manda um trampo pra alguém que
                precisa .
            </ServiceBannerText>
            <UserAvatar source={logoImg} />
>>>>>>> e7de18ba518801d66d227c8c6c0d3dc974d93e6e
        </Container>
    );
};

export default Dashboard;
