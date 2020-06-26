import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Service } from './App';


export const Container = styled.View`
    flex: 1;
    background: #eee;
`;

export const Header = styled.View`
    padding: 18px;
    margin-top:10px;
    padding-top: ${getStatusBarHeight() + 3}px;
    background: #eee;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
`;

export const ServiceBannerText = styled.Text`
    color: #eee;
    background-color: #444;
    padding: 5px;
    font-size: 16px;
    /* font-family: 'RobotoSlab-Regular'; */
    text-align: center;
`;

export const HeaderTitle = styled.Text`
    color: #666;
    font-size: 18px;
    /* font-family: 'RobotoSlab-Regular'; */
    line-height: 20px;
`;

export const UserName = styled.Text`
    color: #6c63ff;
    /* font-family: 'RobotoSlab-Medium'; */
`;

export const ProfileButton = styled.TouchableOpacity``;

export const UserAvatar = styled.Image`
    width: 36px;
    height: 36px;
    border-radius: 18px;
`;

export const ServicesList = styled(FlatList as new () => FlatList<Service>)`
    padding: 15px 24px 16px;
`;

export const ServiceListName = styled.Text`
    font-size: 24px;
    margin-bottom: 16px;
    color: #6c63ff;
    /* font-family: 'RobotoSlab-Medium'; */
    text-align: center;
`;

export const ServiceContainer = styled(RectButton)`
    background: #DCDCDC;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 16px;
    flex-direction: row;
    align-items: center;
`;

export const ServiceAvatar = styled.Image`
    width: 90px;
    height: 90px;
    border-radius: 6px;
`;

export const ServiceInfo = styled.View`
    flex: 1;
    margin-left: 20px;
`;

export const ServiceName = styled.Text`
    /* font-family: 'RobotoSlab-Medium'; */
    font-size: 14px;
    color: #000;
`;

export const ServiceMeta = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 4px;
`;

export const ServiceMetaText = styled.Text`
    margin-left: 8px;
    font-size: 12px;
    color: #666;
    /* font-family: 'RobotoSlab-Regular'; */
`;
