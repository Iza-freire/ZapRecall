import quase from "../assets/img/icone_quase.png"
import erro from "../assets/img/icone_erro.png"
import certo from "../assets/img/icone_certo.png"
import play from "../assets/img/seta_play.png"
import styled from "styled-components"

export default function Imagens({status, abrir}){

    return( 
        <ImagensButton>
            {status === "status não definido" && <button> <img src={play} alt="seta" onClick={abrir}/> </button>}
            {status === "erro" &&  <button><img src={erro} alt="não lembrou"/> </button>}
            {status === "meioAcerto" && <button><img src={quase} alt="quase lembrou"/></button>}
            {status === "acerto" && <button><img src={certo} alt="acertou"/></button>}
        </ImagensButton>
    )
}
const ImagensButton = styled.div`
    button{
        background-color: transparent;
        border: none;
    }
`