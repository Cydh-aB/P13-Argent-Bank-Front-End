import styled from "styled-components"
import React, { useState } from "react"
// import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate } from "react-router-dom"
// import { fetchToken, fetchUserProfile, login, remember } from "../Feature/loginSlice"
import getToken from '../Services/GetToken'
import { ErrorDisplay } from "../Redux/Feature/selector"

/**
 * Form component for login page
 * @returns {JSX}
 */

const Form = () => {
    // const navigate = useNavigate()
    // const dispatch = useDispatch()

    // const [email, setEmail] = useState("tony@stark.com")
    // const [password, setPassword] = useState("password123")

    // const logged = useSelector(state => state.login.loggedIn)

    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     const response = await dispatch(fetchToken(email, password))
    //     const request = await dispatch(fetchUserProfile(response.token))
    //         dispatch(login(true))
    //         navigate(`/profile`)
    //     console.log(request)
    // }

    // Local State for email & password from the input
    const [signInData, setSignInData] = useState({ email: '', password: ''})

    // Get email & password from the input
    const inputForm = (e) => {
        e.persist()
        const {name, value} = e.target
        setSignInData((state) => ({
            ...state,
            [name]: value
        }))
    }

    // Send email & password to the API
    const submitForm = (e) => {
        e.preventDefault()
        getToken(signInData.email, signInData.password)
    }

    return (
        <StyleSection>
            <StyleIcon className='fa fa-user-circle sign-in-icon'/>
            <h1> Sign In </h1>
            <form onSubmit={submitForm}>
                <StyleWrapper>
                    <label htmlFor="email">Username</label>
                    <input type='email' name="email" id='username' required placeholder="Username" value={signInData.email} onChange={inputForm} />
                </StyleWrapper>
                <StyleWrapper>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" autoComplete="current-password" required placeholder="Pasword" onChange={inputForm} value={signInData.password}/>
                </StyleWrapper>
                <StyleRemember className="input-remember">
                    <input type='checkbox' id='remember-me'/>
                    <label htmlFor="remember-me">Remember Me</label>
                </StyleRemember>
                <StyleBtn >Sign In</StyleBtn>
                <ErrorDisplay />
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

h1 {
    text-align: center;
}
`

const StyleIcon = styled.i`
display: flex;
justify-content: center;
font-size: 5rem;
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