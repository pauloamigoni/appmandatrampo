import React, { useCallback } from 'react';
// import { View, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
    Container,
    Header,
    HeaderTitle,
    UserName,
    ProfileButton,
    UserAvatar,
} from './styles';

const Dashboard: React.FC = () => {
    const { navigate } = useNavigation();

    const navigateToProfile = useCallback(() => {
        navigate('Profile');
    }, [navigate]);
    return (
        <Container>
            <Header>
                <HeaderTitle>
                    Bem Vindo, {'\n'}
                    <UserName>Amigoni</UserName>
                </HeaderTitle>
                <ProfileButton onPress={navigateToProfile}>
                    <UserAvatar source={{ uri: '' }} />
                </ProfileButton>
            </Header>
        </Container>
    );
};

export default Dashboard;
