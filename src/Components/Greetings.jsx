import styled from "styled-components";

const StyleGreetings = styled.div`
color: #fff;
margin-bottom: 2rem;
`

const StyleBtn = styled.button`
border-color: #00bc77;
background-color: #00bc77;
color: #fff;
font-weight: bold;
padding: 10px;
`

function Greetings({firstName, lastName}){
    return(
        <StyleGreetings>
            <h1>Welcome back <br/> {firstName}{lastName}</h1>
            <StyleBtn>Edit Name</StyleBtn>
        </StyleGreetings>
    )
}

export default Greetings