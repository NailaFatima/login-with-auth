import {createContext,useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, 
		  signInWithEmailAndPassword,
		  onAuthStateChanged,
		  signOut,
		  GoogleAuthProvider,
		  signInWithPopup
		} from 'firebase/auth';
import {auth} from '../firebase';


const userAuthContext= createContext();
export function UserAuthContextProvider({children}){
     const [user, setUser]= useState('');
     // const [isgooglesigned,setIsgooglesigned]=useState(false);
    
	function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
	  }
	  function logIn(email,password){
	   return signInWithEmailAndPassword(auth,email,password);
	  }

	 function googleSignIn ()
	  {
	  	
	  	    const googleauthProvider = new GoogleAuthProvider();
	  		return signInWithPopup(auth,googleauthProvider);
	  		

	  		
	  }

	  function logOut()
	  {
	  	
	  		signOut(auth);

	  		
	  	
	  }
	  useEffect(()=>{
	  	const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
	  		setUser(currentUser);
	  	})
	  	return ()=>{
	  		unsubscribe();
	  	}
	  },[]);

	return (
		<userAuthContext.Provider value={{user,signUp,logIn,logOut,googleSignIn}}> {children} </userAuthContext.Provider>
		)

};


  
export function useUserAuth(){
	return useContext(userAuthContext);
}
