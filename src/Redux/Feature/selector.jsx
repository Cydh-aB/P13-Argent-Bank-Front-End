import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

export function ErrorDisplay() {
    const loginErrorConst = useSelector((state) => state.loginError)
    return <StyleP>{loginErrorConst.data === true ? ' Mot de passe ou Email incorrect' : ''}</StyleP>
}

export const isLogSelector = (state) => state.isLog
export const loginErrorSelector = (state) => state.loginError
export const profilDataSelector = (state) => state.profilData

/**Style**/

const StyleP = styled.p`
    color: #880b0b;
`