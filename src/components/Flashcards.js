import { useState } from "react"
import styled from "styled-components"
import setaVirar from "../assets/img/seta_virar.png"
import cores from "../assets/css/Cores"
import Imagens from "./Imagens"

const { VERMELHO, AMARELO, VERDE, CINZA} = cores;

export default function Fleshcards({number , openCars, cardOpen, question, new2, answer, status}){
    const [virada, setVirada] = useState(false)

    function abrir(){
          if (status === "status não definido" ){
            openCars()

          } 
    }

    function definindoCores(){
        switch (status) {
            case "erro":
                return VERMELHO
            case "meioAcerto":
                return AMARELO
            case "acerto":
                return VERDE
            default: 
                return CINZA

        }
    }


    return (
        <>
            { cardOpen ? (
                <OpenCard  data-test="flashcard">
                    {virada ? (
                        <>
                            <p data-test="flashcard-text">{answer}</p>
                            <ButtonContainer>
                                <ButtonFlascards onClick={() => new2("erro")} cor={VERMELHO} data-test="no-btn"> Não Lembrei </ButtonFlascards>
                                <ButtonFlascards onClick={() => new2("meioAcerto")} cor={AMARELO} data-test="partial-btn">Quase esqueci</ButtonFlascards>
                                <ButtonFlascards onClick={() => new2("acerto")} cor={VERDE}  data-test="zap-btn" >Zap!</ButtonFlascards>
                            </ButtonContainer>
                        </>
                    ) : (
                        <>
                            <p data-test="flashcard-text">{question}</p>
                            <img onClick={() => setVirada(true)} src={setaVirar} alt="Virar Flashcard" />
                        </>
                    )}
                </OpenCard>
            ) : (
                <ClosedCard  data-test="flashcard" >
                    <ClosedCardTexto cor={definindoCores} status={status} data-test="flashcard-text">Pergunta {number}</ClosedCardTexto>
                    <Imagens status={status} abrir={abrir}/>
                </ClosedCard>
            )}

        </>
    )
}

const OpenCard = styled.div`
        width: 300px;
        margin: 20px;
        padding: 15px;
        min-height: 100px;
        background: #FFFFD5;
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        img{
            position: absolute;
            bottom: 10px;
            right: 10px;
        }
  
`
const ClosedCard = styled.div`
        width: 300px;
        height: 35px;
        background-color: #FFFFFF;
        margin: 12px;
        padding: 15px;
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
`
const ClosedCardTexto = styled.p`
            font-family: 'Recursive';
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            line-height: 19px;
            color:${props => props.cor};
            text-decoration: ${props => props.status === "status não definido" ? "none" : "line-through"};
`

const ButtonContainer = styled.div`
        display: flex;
        width: 85%;
        justify-content: space-between;
        margin: 20px;
`

const ButtonFlascards = styled.div`
        width: 100px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #FFFFFF;
       background: ${props => props.cor};
        border-radius: 5px;
        border: 1px solid ${props => props.cor};
        padding:5px;
        margin-left: 10px;//
`