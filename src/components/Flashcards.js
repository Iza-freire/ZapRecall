import { useState } from "react"
import styled from "styled-components"
import play from "../assets/img/seta_play.png"
import setaVirar from "../assets/img/seta_virar.png"
import Button from "./Button"

export default function Fleshcards({number , openCars, cardOpen, question, answer}){
    const [virada, setVirada] = useState(false)

    return (
        <>
        { cardOpen ? (
             <OpenCard>
                { virada ? (
                    <>
                     <p>{answer}</p>
                     <ButtonContainer>
                        <Button/>
                     </ButtonContainer>
                     </>
                ) : (
                    <>
                        <p>{question}</p>
                        <img onClick={() => setVirada(true)} src={setaVirar}/>
                    </>
                )}
             </OpenCard>
        ) : ( 
             <ClosedCard onClick={openCars}>
            <p>Pergunta {number}</p>
            <img src={play}></img>
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
        p {
            font-family: 'Recursive';
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            line-height: 19px;
            color: #333333;
        }
`
const ButtonContainer = styled.div`
        display: flex;
        width: 85%;
        justify-content: space-between;
        margin: 20px;
`