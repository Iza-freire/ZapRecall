import styled from "styled-components";
import Fleshcards from "./Flashcards";
import Header from "./Header";


export default function Deck(){
    return (
        <>
            <Header/>
            <Fleshcards/>
            <Fleshcards/>
            <FooterContainer>
               0/4 CONCLUÍDOS
            </FooterContainer>

        </>
    )
}

const  FooterContainer = styled.div`
        width: 100%;
        min-height: 54px;
        background-color: #ffffff;
        position: fixed;
        bottom: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: 'Recursive';
        font-weight: 400;
        font-size: 18px;
        color: #333333;
        padding: 10px;
        left: 0;
`