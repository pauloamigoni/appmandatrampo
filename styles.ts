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
<<<<<<< HEAD
=======



>>>>>>> e7de18ba518801d66d227c8c6c0d3dc974d93e6e
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


<<<<<<< HEAD




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
=======
export const TextServico = styled.Text`
    position: absolute;
    width: 196px;
    height: 48px;
    left: 76px;
    top: 8px;

    /* font-family: Poppins; */
    font-style: normal;
    font-weight: normal;
    font-size: 28px;

    color: #fff;
   
`;


export const ImgServico = styled.Image`
  position: absolute;
  width: 70px;
  height: 70px;
  left: -35px;
  top: -25px;

  border-top-right-radius: 50px;   
  border-bottom-right-radius: 50px;
  border-top-left-radius: 50px;   
  border-bottom-left-radius: 50px;

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

export const TextCv = styled.Text`
    position: absolute;
    width: 196px;
    height: 48px;
    left: 46px;
    top: 8px;

    /* font-family: Poppins; */
    font-style: normal;
    font-weight: normal;
    font-size: 28px;

    color: #eee;
   
`;


export const ImgCv = styled.Image`
  position: absolute;
  width: 270px;
  height: 270px;
  left: 50px;
  top: 50px;
 
  border-top-right-radius: 135px;   
  border-bottom-right-radius: 135px;
  border-top-left-radius: 135px;   
  border-bottom-left-radius: 135px; 
`;


export const ImgService = styled.Image`
  position: absolute;
  width: 270px;
  height: 270px;
  left: 50px;
  top: 370px;
 
  border-top-right-radius: 135px;   
  border-bottom-right-radius: 135px;
  border-top-left-radius: 135px;   
  border-bottom-left-radius: 135px; 
>>>>>>> e7de18ba518801d66d227c8c6c0d3dc974d93e6e
`;




<<<<<<< HEAD
=======













>>>>>>> e7de18ba518801d66d227c8c6c0d3dc974d93e6e
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

<<<<<<< HEAD

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

    
=======
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
>>>>>>> e7de18ba518801d66d227c8c6c0d3dc974d93e6e
`;

export const TextFatec = styled.Text`
    color: #000;
    font-size: 14px;
    font-family: 'Roboto';
    padding: 5px;
    top:200px;  
    transform: rotate(90deg);
`;

<<<<<<< HEAD
=======
export const ImgJuntos = styled.Image`
    width: 90px;
    height: 90px;
    border-radius: 6px;
`;
>>>>>>> e7de18ba518801d66d227c8c6c0d3dc974d93e6e




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






<<<<<<< HEAD
=======
export const Union = styled.View`

position: absolute;
width: 375px;
height: 326px;
left: 0px;
top: 0px;

background: #eee;

`;

>>>>>>> e7de18ba518801d66d227c8c6c0d3dc974d93e6e

export const Subtract = styled.View`

position: absolute;
width: 80px;
height: 80px;
left: 0px;
<<<<<<< HEAD
top: 376px;
=======
top: 246px;
>>>>>>> e7de18ba518801d66d227c8c6c0d3dc974d93e6e
background: #eee;
border-bottom-left-radius: 150px; 
`;


export const Subtract2 = styled.View`

position: absolute;
width: 80px;
height: 80px;
left: 0px;
<<<<<<< HEAD
top: 376px;
=======
top: 246px;
>>>>>>> e7de18ba518801d66d227c8c6c0d3dc974d93e6e
background: #D3D3D3;

`;


export const Subtract3 = styled.View`

position: absolute;
width: 80px;
height: 80px;
right: 0px;
<<<<<<< HEAD
top: 406px;
=======
top: 306px;
>>>>>>> e7de18ba518801d66d227c8c6c0d3dc974d93e6e
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
