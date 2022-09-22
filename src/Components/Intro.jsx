import styled from "styled-components"
import background from "../assets/Img/bank-tree.jpeg"

/**Style */

const StyleIntro = styled.div`
background-image: url(${background});
background-size: cover;
background-position: 0 -50px;
background-repeat: no-repeat;
position: relative;
height: 300px;
`
const StyleSection = styled.section`
background: white;
position: absolute;
top: 2rem;
width: 200px;
padding: 2rem;
text-align: left;
margin: 0 auto;
right: 2%;
`
const StyleH2 = styled.h2`
visibility: hidden;
margin: 0;
height: 0;
`
const StyleP = styled.p`
font-size: 1rem;
font-weight: bold;
margin: 0;
`

/****/

function Intro (){
    return(
        <StyleIntro>
            <StyleSection>
                <StyleH2>Promoted Content</StyleH2>
                <StyleP className="subtitle">No fees.</StyleP>
                <StyleP className="subtitle">No minimum deposit.</StyleP>
                <StyleP className="subtitle">High interest rates.</StyleP>
                <StyleP>Open a savings account with Argent Bank today !</StyleP>
            </StyleSection>
        </StyleIntro>
    )
}

export default Intro