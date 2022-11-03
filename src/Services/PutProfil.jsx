import { profilDataAction } from "../Redux/Feature/profilData";
import store from "../Redux/store";

const BASE_URL = 'http://localhost:3001/api/v1'

/**
 * Get Token
 * @param {string} firstName
 * @param {string} lastName
 * @returns {firstName, lastName} // New
 */

 export default async function PutProfil(firstNameNew, lastNameNew) {
    const requestOptions = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}`},
        body: JSON.stringify({ firstName: firstNameNew, lastName: lastNameNew})
    }
    return fetch(`${BASE_URL}/user/profile`, requestOptions)
        .then((res) => res.json())
        .then((response) => {
            console.log(response)
            const { firstName, lastName } = response.body
            store.dispatch(
                profilDataAction({
                    firstName: firstName,
                    lastName: lastName
                })
            )
        })
        .catch(() => {
            console.log('Error in putProfil')
        })
}