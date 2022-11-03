import { profilDataAction } from "../Redux/Feature/profilData"
import { isLogAction } from "../Redux/Feature/isLog"
import store from "../Redux/store"

const BASE_URL = 'http://localhost:3001/api/v1'

/**
 * Get profil informations
 * @returns {firstName, lastName}
 */

 export default async function getProfil() {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }

    return fetch(`${BASE_URL}/user/profile`, requestOptions)
        .then((res) => res.json())
        .then((response) => {
            console.log(response)
            const {firstName, lastName} = response.body
            store.dispatch(
                profilDataAction({
                    firstName: firstName,
                    lastName: lastName
                })
            )
            store.dispatch(isLogAction())
        })
        .catch(() => {
            console.log('Error in getProfil')
        })
}