import Intro from '../Components/Intro'
import iconChat from '../assets/Img/icon-chat.png'
import iconMoney from '../assets/Img/icon-money.png'
import iconSecurity from '../assets/Img/icon-security.png'
import styled from 'styled-components'
import FeatureItem from '../Components/Feature'

/**Style */

const StyleMain = styled.main`
flex: 1;
`

const StyleContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`

export default function Index() {
    return (
        <StyleMain>
            <Intro />
            <StyleContainer>
                <FeatureItem 
                image={iconChat} 
                titre="You are ou #1 priority" 
                description='Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'
                />
                <FeatureItem 
                image={iconMoney} 
                titre="More savings mean higher rates" 
                description='The more you save with us, the higher your interest rate will be!'
                />
                <FeatureItem 
                image={iconSecurity} 
                titre="Security you can trust" 
                description='We use top of the line encryption to make sure your data and money is always safe.'
                />
            </StyleContainer>
        </StyleMain>
    )
}