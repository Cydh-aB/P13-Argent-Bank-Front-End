import { loginErrorAction } from "../Redux/Feature/loginError";
import getProfil from "./GetProfil";
import store from "../Redux/store";

const BASE_URL = 'http://localhost:3001/api/v1'

/**
 * Get Token
 * @param {string} email
 * @param {string} password
 * @returns {token} // in localStorage
 */
 export default async function getToken(email, password) {
    const requesOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ email: email, password: password })
    }
    return fetch(`${BASE_URL}/user/login`, requesOptions)
        .then((res) => res.json())
        .then((response) => {
            const {token} = response.body
            localStorage.setItem('token', token)
            getProfil()
            store.dispatch(loginErrorAction(false))
        })
        .catch(() => {
            console.log('Error ApiToken')
            store.dispatch(loginErrorAction(true))
        })
}