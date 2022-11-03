import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { profilDataSelector } from "../Redux/Feature/selector";
import Account from "./Account";
import PutProfil from "../Services/PutProfil";
import { useState } from "react";

/**
 * Profile content component
 * @returns {JSX}
 */

function ProfilContent() {
    // Get user FirstName & LastName from redux
    const user = useSelector(profilDataSelector)

    // Local State for Open or Close modification form
    const [displayFormNames, setDisplayFormNames] = useState(false)

    function OpenFormNames(){
        setDisplayFormNames(true)
    }
    
    function CloseFormNames(){
        setDisplayFormNames(false)
    }

    // Local state for new FirstName & LastName from input 
    const [changeName, setChangeName] = useState({ firstName: '', lastName: ''})

    // Get new FirstName & LastName from Input
    const inputForm = (e) => {
        e.persist()
        const { name, value } = e.target
        setChangeName((state) => ({
            ...state,
            [name]: value
        }))
    }

    //Send the new FirstName & LastName to the API
    const submitForm = (e) => {
        e.preventDefault()
        PutProfil(changeName.firstName, changeName.lastName)
    }

    return (
        <>
            <StyleGreetings>
                <h1>Welcome back <br/> {user.data.firstName} {user.data.lastName} !</h1>
                <StyleBtn onClick={OpenFormNames}>Edit Name</StyleBtn>
                {displayFormNames === true ? (
                    <StyleForm onSubmit={submitForm}>
                        <p>
                            <StyleLabel htmlFor="firstName">FirstName</StyleLabel>
                            <input type="text" id="firstName" name="firstName" required placeholder={user.data.firstName} value={changeName.firstName} onChange={inputForm} />

                            <StyleLabel htmlFor="lastName">LastName</StyleLabel>
                            <input type="text" id="lastName" name="lastName" required placeholder={user.data.lastName} value={changeName.lastName} onChange={inputForm} />
                        </p>
                        <button type="submit">Save</button>
                        <button onClick={CloseFormNames} type="button">Cancel</button>
                    </StyleForm>
                ) : ( '' )
                }
            </StyleGreetings>
            <StyleHero>
                    <h2>Accounts</h2>
                    <Account title='Argent Bank Checking (x8349)' amount='$2,082.79' description='Available Balance'/>
                    <Account title='Argent Bank Savings (x6712)' amount='$10,928.42' description='Available Balance' />
                    <Account title='Argent Bank Credit Card (x8349)' amount='$184.30' description='Current Balance' />
            </StyleHero>
        </>
    )
}

export default ProfilContent

/** Style **/

const StyleGreetings = styled.div`
color: #fff;
background-color: #12002b;
text-align: center;

h1 {
    color: #fff;
    padding-top: 1.5rem;
    margin: 0;
    margin-bottom: 1rem;
}
`

const StyleForm = styled.form`
    display: flex;
    align-items: center;
    align-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: auto;
    width: 50%;

p {
    width: 100%;
}

input {
    font-size: 1rem;
    font-weight: 700;
    height: 20px;
    margin: 0 10px;
    padding: 10px;
    width: 40%;
}

button {
    border-color: #00bc77;
    background-color: #00bc77;
    color: #fff;
    font-weight: bold;
    padding: 10px;
    width: 5rem;
    margin: 0 10px;
}
`

const StyleBtn = styled.button`
border-color: #00bc77;
background-color: #00bc77;
color: #fff;
font-weight: bold;
padding: 10px;
`
const StyleHero = styled.div`
    background-color: #12002b;
    padding-top: 1rem;
    padding-bottom: 3rem;

h2 {
    color: #00bc77;
    text-align: center;
    margin-bottom:  1.5rem;
}
`

const StyleLabel = styled.label`
    display: none;
`