import React from "react";
import { useSelector } from "react-redux";
import { isLogSelector } from "../Redux/Feature/selector";
import { Navigate } from "react-router-dom";
import ProfilContent from "../Components/ProfilContent";

/**
 * User page
 * @returns {JSX}
 */
function Profil(){
    // Get log or not from redux
    const isLog = useSelector(isLogSelector)
    if (isLog === false) {
        return <Navigate to="/" />
    }
    return (
        <main>
            <ProfilContent />
        </main>
    )
}

export default Profil