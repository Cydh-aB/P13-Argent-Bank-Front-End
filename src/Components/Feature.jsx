import styled from "styled-components"

/**Style */

const StyleItem = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 33%;
padding: 40px;

img{
    width: 100px;
    border: 10px solid #00bc77;
    border-radius: 50%;
    padding: 16px;
}

h3{
    color: #222;
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 8px;
}

p{
    text-align: center;
}
`
/****/

/**
 * Create features for Index page
 * @returns html
 */

function FeatureItem({image, titre, description}){
    return(
        <StyleItem>
            <img src={image} alt="item" />
            <h3>{titre}</h3>
            <p>{description}</p>
        </StyleItem>
    )
}

export default FeatureItem