import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Form from '../Components/Form'
import { isLogSelector } from '../Redux/Feature/selector'
import styled from 'styled-components'

export default function SignIn() {
    //Get log or not from redux
    const isLog = useSelector(isLogSelector)
    if(isLog) {
        return <Navigate to="/profile"/>
    }
    
    return (
        <div>
            <StyleMain>
                <Form />
            </StyleMain>
        </div>
    )
}

const StyleMain = styled.main`
background-color:  #12002b;
padding-top: 1rem;
`