import styled from "styled-components";

/**Style */

const StyleAccount = styled.section`
display: flex;
justify-content: space-between;
align-items: center;
border: 1px solid black;
background-color: #fff;
width: 80%;
margin: 0 auto;
flex-direction: column;
padding: 1.5rem;
box-sizing: border-box;
text-align: left;
margin-bottom: 2rem;

@media (min-width: 720px) {
    flex-direction: row;
}
`
const StyleAmount = styled.p`
margin: 0;
font-size: 2.5rem;
font-weight: bold;
`
const StyleDescription = styled.p`
margin: 0;
`
const StyleContainer = styled.div`
width: 100%;
flex:1;
color: #2c3e50;
`
const StyleTitle = styled.h3`
margin: 0;
padding: 0;
font-size: 1rem;
font-weight: normal;
`

const StyleBtn = styled.button`
display: block;
width: 100%;
padding: 8px;
font-size: 1.1rem;
font-weight: bold;
margin-top: 1rem;
border-color: #00bc77;
background-color: #00bc77;
color: #fff;
`

const StyleTransaction = styled.div`
    flex: 0;
`
/****/

function Account({title, amount, description}){
    return(
        <StyleAccount>
            <StyleContainer>
                <StyleTitle>{title}</StyleTitle>
                <StyleAmount>{amount}</StyleAmount>
                <StyleDescription>{description}</StyleDescription>
            </StyleContainer>
            <StyleTransaction>
                <StyleBtn>View Transactions</StyleBtn>
            </StyleTransaction>
        </StyleAccount>
    )
}

export default Account