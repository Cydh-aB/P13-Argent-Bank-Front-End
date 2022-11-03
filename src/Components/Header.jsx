import logo from '../assets/Img/argentBankLogo.png'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import store from '../Redux/store'
import { isLogAction } from '../Redux/Feature/isLog'
import { isLogSelector, profilDataSelector } from '../Redux/Feature/selector'

/**
 * Header component
 * @returns {JSX}
 */

function Header() {

    //Get user firstName and lastName from redux
    const user = useSelector(profilDataSelector)
    
    //Get log or not from redux
    const isLog = useSelector(isLogSelector)

    return(
        <StyleHead>
            <StyleLink to='/'>
                    <img src={logo} alt='Argent Bank Logo'/>
                    <StyleH1>Argent Bank</StyleH1>
            </StyleLink>
            {user.data != null && isLog === true ? (
                <StyleNav>
                <StyleLink to='/profile'>
                    <StyleIcon className='fa fa-user-circle'/>
                    <p>{user.data.firstName} {user.data.lastName}</p>
                </StyleLink>
                <StyleLink to="/" onClick={() => store.dispatch(isLogAction())}>
                    <i className="fa fa-sign-out" />
                    Sign Out
                </StyleLink> 
            </StyleNav>
            ) : (
                <div>
                    <StyleLink to="/login">
                    <i className="fa fa-user-circle" />
                        Sign In
                    </StyleLink>
                </div>
            )}
        </StyleHead>
    )
}

export default Header

/** Style **/

const StyleHead = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: 5px 20px;
`

const StyleH1 = styled.h1`
border: 0 !important;
clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
-webkit-clip-path: inset(50%) !important;
clip-path: inset(50%) !important; /* 2 */
height: 1px !important;
margin: -1px !important;
overflow: hidden !important;
padding: 0 !important;
position: absolute !important;
width: 1px !important;
white-space: nowrap !important; /* 3 */
`

const StyleNav = styled.nav`
display: flex;
flex-direction: row;
align-items: center;
padding: 5px 20px;

p {
    margin-right: 3rem;
}
`
const StyleIcon = styled.i`
margin-right: 10px;
font-size: 20px;
`
const StyleLink = styled(Link)`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
text-align: center;
text-decoration: none;
color: #2c3e50;
font-weight: bold;
margin-right: 8px;

i {
margin-right: 8px;
}

img {
    max-width: 100%;
    width: 200px;
}
`
/****/