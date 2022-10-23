import styled from 'styled-components'
import cover from '../../assets/cover.png';

export const BannerContainer = styled.section`

background-image: url(${cover});
background-repeat: no-repeat;
background-size: cover;

.navcolor{
    background: #252B42
}

.btn1{
    padding: 10px 36px;
    width: 182px;
    height: 48px; 
    background: #D0A144;
    border-radius: 37px;
    border-style: none;
    color: white;
    font-size: 14px;
}

.btn2{
    padding: 10px 36px;
    width: 182px;
    height: 48px;
    background: none;
    border-radius: 37px;
    border-color: white;
    color: white;
    font-size: 14px;
}

.navbar{
    color:white;
}

#bannertext{
    font-size:58px;
}

h1{
    color:white;
    font-family: 'Martel', serif;
    font-weight: bold;
    font-size:58px;
    line-height: 65px;
    letter-spacing: 0.2px;
}

p{
    color:white;
    font-family: 'Montserrat', sans-serif;
    font-size:20px;
    line-height: 30px;
    letter-spacing: 0.2px;
}

#logo{
    font-family: 'Martel', serif;
    font-size:24px;
}


`;