import logo from '../assets/Img/argentBankLogo.png'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getFirstName, getLastName, getToken, login } from '../Feature/loginSlice'
import styled from 'styled-components'



function Header() {

    const dispatch = useDispatch()
    const loggedIn = useSelector(state => state.login.isLoggedIn)
    const firstName = useSelector(state => state.login.firstName)

    const handleLogout = () => {
        dispatch(getFirstName(""))
        dispatch(getLastName())
        dispatch(getToken(""))
        dispatch(login(false))
    }

    return(
        <header>
            <StyleH1> Argent Bank Logo </StyleH1>
            <StyleNav>
                <StyleLink to='/'>
                    <img src={logo} alt='Argent Bank Logo'/>
                </StyleLink>
                <StyleLink to='/login'>
                    <StyleIcon className='fa fa-user-circle'/>
                    <p> {firstName ? firstName : "Sign In"} </p>
                </StyleLink>
                {
                    loggedIn &&
                    <Link to='/' onClick={handleLogout}>
                        <p>Sign Out</p>
                    </Link>
                }
            </StyleNav>
        </header>
    )
}

export default Header

/**Style */

const StyleH1 = styled.h1`
visibility: hidden;
height: 0;
width: 0;
`
const StyleNav = styled.nav`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 5px 20px;

img{
    max-width: 100%;
    width: 200px;
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
`
/****/