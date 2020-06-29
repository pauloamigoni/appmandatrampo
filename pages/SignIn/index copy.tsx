import React, { useCallback, useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/manda.png';
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
    const { navigate } = useNavigation();

    useEffect(() => {
        api.get('services').then((response) => {
            setServices(response.data);
        });
    }, []);

    const navigateToProfile = useCallback(() => {
        navigate('Profile');
    }, [navigate]);
    return (
        <Container>
            <Header>
                <HeaderTitle>
                    {/* Bem Vindo ao {'\n'} */}
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
