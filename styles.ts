import styled from 'styled-components/native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Service } from './App';





export const Container = styled.View`

    flex: 1;
    background: #eee;

`;

export const Servico = styled.View`
  position: absolute;
  width: 380px;
  height: 124px;
  left: 0px;
  top: 0px;
`;


export const ListServico = styled.View`
    position: absolute;
    width: 300px;
    height: 200px;
    left: 80px;
    top: 180px;
    background: #666;
    border-top-left-radius: 50px;   
    border-bottom-left-radius: 50px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
    
   
`;






export const Cv = styled.View`
  position: absolute;
  width: 380px;
  height: 124px;
  left: 0px;
  top: 0px;
`;


export const ListCv = styled.View`
    position: absolute;
    width: 300px;
    height: 200px;
    left: 0px;
    top: 430px;
    background: #999;
    border-top-right-radius: 50px;   
    border-bottom-right-radius: 50px;
   
`;



export const Mtexto = styled.Text`
    
    left: 0px;
    top: 300px;
    font-size: 38px;
    color: #6C63FF;
    text-align: center;
    font-family: 'Roboto';
    
`;

















export const Union = styled.View`
    position: absolute;
    width: 100%;
    /* height: 426px; */
    left: 0px;
    top: 0px;
    background: #eee;
`;




export const Header = styled.View`
    width: 100%;
    height: 110px;
    padding-top: ${getStatusBarHeight() + 3}px;
    background: #8B008B;
    border-bottom-left-radius: 34px;
    border-bottom-right-radius: 30px;
`;

export const ImageHome = styled.Image`
   display: flex;
   width: 60%;
   height: 60px;
   left: 60px ;
   top:10px;
`;


export const TextCv = styled.Text`
    position: absolute;
    width: 100%;
    text-align:center;
    height: 48px;
    top: 465px;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    color: #8B008B;
   
`;

export const TextServico = styled.Text`
    position: absolute;
    width: 100%;
    text-align:center;
    height: 48px;
    top: 417px;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    color: #8B008B;
   
`;




export const ImgCv = styled.Image`
  position: absolute;
  width: 150px;
  height: 150px;
  left: 100px;
  top: 270px;
 
  border-top-right-radius: 135px;   
  border-bottom-right-radius: 135px;
  border-top-left-radius: 135px;   
  border-bottom-left-radius: 135px; 

  transform: rotateY(180deg); 
`;


export const ImgService = styled.Image`
  position: absolute;
  width: 150px;
  height: 150px;
  left: 100px;
  top: 500px;
  border-top-right-radius: 135px;   
  border-bottom-right-radius: 135px;
  border-top-left-radius: 135px;   
  border-bottom-left-radius: 135px; 
`;


export const ServiceBannerText = styled.Text`
margin-top: 28px;
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


export const TextHome = styled.Text`
    color: #666;
    margin: 5px 6px 0px 9px;
    font-size: 14px;
    font-family: 'Roboto';
    line-height: 18px;
    padding: 25px;
    text-align: justify;
    background: #FFE4E1;
    border-radius: 18px;

    
`;

export const TextFatec = styled.Text`
    color: #000;
    font-size: 14px;
    font-family: 'Roboto';
    padding: 5px;
    top:200px;  
    transform: rotate(90deg);
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







export const Subtract = styled.View`

position: absolute;
width: 80px;
height: 80px;
left: 0px;
top: 376px;
background: #eee;
border-bottom-left-radius: 150px; 
`;


export const Subtract2 = styled.View`

position: absolute;
width: 80px;
height: 80px;
left: 0px;
top: 376px;
background: #D3D3D3;

`;


export const Subtract3 = styled.View`

position: absolute;
width: 80px;
height: 80px;
right: 0px;
top: 406px;
background: #eee;

`;


export const Rectangle4 = styled.View`

position: absolute;
width: 375px;
height: 220px;
left: 375px;
top: 466px;

background: #eee;
transform: rotate(-180deg);
border-top-left-radius: 150px; 

`;


export const Rectangle5 = styled.View`

position: absolute;
width: 83px;
height: 83px;
left: 0px;
top: 246px;

background: #eee;
border-top-left-radius: 150px; 

`;




export const Rectangle = styled.View`

position: absolute;
width: 375px;
height: 602px;
left: 0px;
top: 80px;
background: #D3D3D3;
border-top-right-radius: 100px;   
`;
