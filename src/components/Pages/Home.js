import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useUserAuth} from "../../contexts/UserAuthContext";
const Home =()=>{
	const {logOut, user,isgooglesigned,googleSignIn}= useUserAuth();
	let navigate=useNavigate();
	const handleLogout= async ()=>{
		try{
			await logOut();
			navigate('/');
		}catch(err){
			console.log(err.message);
		}
		
	};
	return(
		<div className="w-50 mx-auto shadow p-5">
			<h3>Welcome {user && user.email}</h3>
			<button onClick={handleLogout}>Logout</button>
		</div>
		)
};
export default Home;