import React from 'react'
import { NavLink } from 'react-router-dom'

function Error() {
    return (
        <div>
            <div>
                <h1>Error</h1>
                <h2>Oops !</h2>
                <p>This page doesn't exist.</p>
                <NavLink to='/'> Return to Home</NavLink>
            </div>
        </div>
    )
}

export default Error