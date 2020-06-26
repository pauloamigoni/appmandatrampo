import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const ClockStyle = styled.Text`
    flex: 1;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 20px ${Platform.OS === 'android' ? 150 : 40}px;
    font-size: 16px;
    color: #f4ede8;
    font-family: 'RobotoSlab-Regular';
    margin: 0;
`;
