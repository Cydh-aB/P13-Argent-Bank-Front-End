import styled from "styled-components"
import React, { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { fetchToken, fetchUserProfile, login, remember } from "../Feature/loginSlice"

/**
 * Create Form Html
 * 
 * @param LoginSubmit
 * @return user login
 * @return html - form
 */

const Form = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [email, setEmail] = useState("tony@stark.com")
    const [password, setPassword] = useState("password123")

    const logged = useSelector(state => state.login.loggedIn)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await dispatch(fetchToken(email, password))
        const request = await dispatch(fetchUserProfile(response.token))
            dispatch(login(true))
            navigate(`/profile`)
        console.log(request)
    }

    return (
        <StyleSection>
            <i className='fa fa-user-circle sign-in-icon'/>
            <h1> Sign In </h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <StyleWrapper>
                    <label htmlFor="email">Username</label>
                    <input value={email} name={email} onChange={e => setEmail(e.target.value)} type='text' id='username'/>
                </StyleWrapper>
                <StyleWrapper>
                    <label htmlFor="password">Password</label>
                    <input onChange={e => setPassword(e.target.value)} type="password" id='password'/>
                </StyleWrapper>
                <StyleRemember className="input-remember">
                    <input type='checkbox' id='remember-me' onChange={(e) => dispatch(remember(e.target.checked))} />
                    <label htmlFor="remember-me">Remember Me</label>
                </StyleRemember>
                <div>
                <StyleBtn >Sign In</StyleBtn>
                </div>
            </form>
        </StyleSection>
    )
}

export default Form

/**Style */

const StyleSection = styled.section`
box-sizing: border-box;
background-color: white;
width: 300px;
margin: 0 auto;
margin-top: 3rem;
padding: 2rem;
`

const StyleWrapper = styled.div`
display:flex;
flex-direction: column;
text-align: left;
margin-bottom: 1rem;

label{
    font-weight: bold;
}

input{
    padding: 5px;
    font-size: 1.2rem;
}
`
const StyleRemember = styled.div`
display: flex;

label{
    margin-left: 4px;
}
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
/****/