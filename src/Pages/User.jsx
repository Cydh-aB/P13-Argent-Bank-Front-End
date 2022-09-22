import Account from "../Components/Account";
import Greetings from "../Components/Greetings";
import { useSelector } from "react-redux";

function UserUi(){

    const firstName = useSelector(state => state.login.firstName) 
    const lastName = useSelector(state => state.login.lastName)

    return(
        <div>
            <main>
                <Greetings firstName={firstName} lastName={lastName}/>
                <Account title='Argent Bank Checking (x8349)' amount='$2,082.79' description='Available Balance'/>
                <Account title='Argent Bank Savings (x6712)' amount='$10,928.42' description='Available Balance' />
                <Account title='Argent Bank Credit Card (x8349)' amount='$184.30' description='Current Balance' />
            </main>
        </div>
    )
}

export default UserUi