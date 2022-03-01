import React,{useState} from 'react';
import { Link, useNavigate} from "react-router-dom";
import {Alert} from "react-bootstrap";
import {FcGoogle} from 'react-icons/fc';
import {useUserAuth} from "../../contexts/UserAuthContext";

const Login =()=>{
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [error, setError] = useState("");
  const {logIn, googleSignIn} = useUserAuth();
  let navigate = useNavigate();
  const handleSubmit= async (e)=>{
    e.preventDefault();
    setError("");
    try{
      await logIn(email,password)
       navigate('/Home');
     
    }catch(err){
      setError(err.message);
    }
   
  }
  const handleGoogleSignIn = async (e)=>{
    e.preventDefault();
    try{
     await googleSignIn();
     navigate('/Home');
    }catch (err){
      setError(err.message);
    }
    
  };
	return(

		<div>
		 
			<form className="w-50 mx-auto shadow p-5" onSubmit={handleSubmit}>
			<h1>LOGIN</h1>
      {error && <Alert variant="danger">{error}</Alert>}
          <div className="form-group mb-3 mr-sm-2">
            <input
              type="text"
              className="form-control form-control-lg "
              placeholder="Enter Email"
              name="email"
              onChange={(e)=>setEmail(e.target.value)}
              
            />
          </div>
          <div className="form-group mb-3 mr-sm-2">
            <input
              type="Password"
              className="form-control form-control-lg "
              placeholder="Enter Password"
              name="password"
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-lg btn-block btn-primary text-uppercase btn-outline" >Login</button>
                  <div className="or-container">
                                <div className="line-separator"></div>
                                <div className="or-label">or</div>
                                <div className="line-separator"></div>
                  </div>
          <div className="col-md-12"> <button className="btn btn-lg btn-google btn-block text-uppercase btn-outline" 
               onClick={handleGoogleSignIn}
          >
          <FcGoogle/> Sign Up Using Google
          </button> </div>
          <div className="p-4 box mt-3 text-center">
            Don't have an account? 
            <Link to='/SignUp'>Sign Up</Link>
          </div>
          </form>
          		

		</div>
		)
};
export default Login;