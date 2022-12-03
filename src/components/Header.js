import styled from "styled-components";
import logo from "..//assets/img/logo.png"

export default function Header(){
    return(
        <LogoContainer>
            <img src={logo}></img>
            <h1>Zaprecall</h1>
        </LogoContainer>
    )
}

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 40px 40px 40px;
    img {
        width: 52px;
    }
    h1 {
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        color: #FFFFFF;
        margin-left: 20px;
    }
`