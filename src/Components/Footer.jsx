import styled from "styled-components"

/**Style */

const StyleFooter= styled.footer`
display: flex;
justify-content: center;
border-top: 2px solid #ccc;
padding: 32px 0 24px;

p{
    margin: 0;
    padding: 0;
}
`
/****/

export default function Footer() {
    return (
        <StyleFooter>
            <p> Copyright 2020 Argent Bank </p>
        </StyleFooter>
    )
}

