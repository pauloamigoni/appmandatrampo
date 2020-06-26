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

export const ImageHome = styled.Image`
   display: flex;
   margin-top:20px;
  
`;
export const TextHome = styled.Text`
    color: #666;
    font-size: 18px;
    /* font-family: 'RobotoSlab-Regular'; */
    line-height: 20px;
    padding: 20px;
    text-align: center;
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
   
    padding: 5px 0px 0px 5px;
    flex-direction: row;
    align-items: center;
    margin: 5px 20px 0px 20px;
    background: #E1DBDB;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
`;

export const ServiceAvatar = styled.Image`
    width: 90px;
    height: 90px;
    border-radius: 6px;
`;

export const ImgJuntos = styled.Image`
    width: 90px;
    height: 90px;
    border-radius: 6px;
`;




export const ServiceInfo = styled.View`
    flex: 1;
    margin-left: 20px;
`;


export const Acessos = styled.View`
    flex: 1;
    margin: 0 auto;
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
