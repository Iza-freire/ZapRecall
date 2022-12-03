import styled from "styled-components"
import cores from "../assets/css/Cores"


export default function Button(){
    const { VERMELHO, AMARELO, VERDE} = cores;
    return(
        <>
        <ButtonFlascards cor={VERMELHO}>Não Lembrei </ButtonFlascards>
        <ButtonFlascards cor={AMARELO}>Quase não Lembrei</ButtonFlascards>
        <ButtonFlascards cor={VERDE}>Zap</ButtonFlascards>
        </>
        
    )
}

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
        border: 1px solid ${props => props.cor}blue;
        padding:5px;
        margin-left: 10px;
`