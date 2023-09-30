import { createContext, useReducer, useState } from "react"
import { userReducer } from "./UserReducer";


let defaultUserData = {
    jwt: ''
}

export const UserContext = createContext(defaultUserData);

export default function UserGlobalData(props){

    // let [userData, setUserData] = useState(defaultUserData);
    let [userData, userDataDispatch] = useReducer(userReducer, defaultUserData);

    return (
        <UserContext.Provider value={
            {userData: userData, 
            // setUserData: setUserData
            userDataDispatch: userDataDispatch
            }}>

            {props.children}
        </UserContext.Provider>
    ) 
    
}