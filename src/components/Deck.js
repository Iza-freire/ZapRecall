import { useState } from "react";
import styled from "styled-components";
import Fleshcards from "./Flashcards";
import Header from "./Header";


export default function Deck({cards}){
    const [open, setOpen] = useState(false)
    return (
        <>
            <Header/>
            {cards.map((card, indice) => (<Fleshcards key={indice} number={indice + 1} openCars={() => setOpen(indice)} cardOpen={indice === open} question={card.question} answer={card.answer}/>))}
            <FooterContainer>
               0/{cards.length} CONCLUÍDOS
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