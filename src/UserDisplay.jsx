import { useContext } from "react"
import { UserContext } from "./context/UserContext";
import LogoutButton from "./LogoutButton";


export default function UserDisplay(){


    // let globalUserData = useContext(UserContext);
    let {userData, userDataDispatch} = useContext(UserContext);

    return(
        <div>
			<h1>User JWT: {userData.jwt}</h1>
			<input 
			type="text" 
			name="" 
			id="" 
			value={userData.jwt} 
			onChange={(event) => userDataDispatch(
				{
					type:'setJWT', 
					data:{jwt:event.target.value}
				})}   
			/>
			
			<LogoutButton />
		</div>
    )
}