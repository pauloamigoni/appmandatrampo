import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Service } from './index';

export const Container = styled.View`
    flex: 1;
    background: #dddbd1;
`;

// export const Header = styled.View`
//     padding: 18px;
//     padding-top: ${getStatusBarHeight() + 1}px;
//     background: #eee;
//     flex-direction: row;
//     justify-content: space-between;
//     align-items: center;
// `;



export const Header = styled.View`
    width: 100%;
    height: 80px;
    padding-top: ${getStatusBarHeight() + 3}px;
    background: #8B008B;
    border-bottom-left-radius: 34px;
    border-bottom-right-radius: 30px;
`;

export const ImageHome = styled.Image`
   display: flex;
   width: 50%;
   height: 60px;
   left: 70px ;
   top:-15px;
`;



export const ServiceBannerText = styled.Text`
    color: #eee;
    background-color: #655;
    padding: 5px;
    font-size: 16px;
    /* font-family: 'RobotoSlab-Regular'; */
    text-align: center;
`;

export const HeaderTitle = styled.Text`
    color: #666;
    font-size: 20px;
    /* font-family: 'RobotoSlab-Regular'; */
    line-height: 28px;
`;

export const UserName = styled.Text`
    color: #6c63ff;
    /* font-family: 'RobotoSlab-Medium'; */
`;

export const ProfileButton = styled.TouchableOpacity``;

export const UserAvatar = styled.Image`
    width: 56px;
    height: 56px;
    border-radius: 28px;
`;

export const ServicesList = styled(FlatList as new () => FlatList<Service>)`
    padding: 32px 24px 16px;
`;

export const ServiceListName = styled.Text`
    font-size: 24px;
    margin-bottom: 16px;
    color: #6c63ff;
    /* font-family: 'RobotoSlab-Medium'; */
    text-align: center;
`;

export const ServiceContainer = styled(RectButton)`
    background: #eee;
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
