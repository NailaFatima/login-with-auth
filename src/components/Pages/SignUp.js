import React,{useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import {Alert} from "react-bootstrap";
import {useUserAuth} from "../../contexts/UserAuthContext";

const SignUp =()=>{
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [error, setError] = useState("");
  const {signUp} = useUserAuth();
  let navigate= useNavigate();
  const handleSubmit= async (e)=>{
    e.preventDefault();
    setError("");
    try{
      await signUp(email,password);
      navigate("/");
    }catch(err){
      setError(err.message);
    }
   
  }
	return(

		<div>
		 
			<form className="w-50 mx-auto shadow p-5"onSubmit={handleSubmit}>
			<h1>SIGNUP</h1>
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
          <button type="submit" className="btn btn-lg btn-block btn-primary text-uppercase btn-outline" >Sign Up</button>
          <div className="p-4 box mt-3 text-center">
            Already have an account? 
            <Link to='/'>Log In</Link>
          </div>
          </form>
          		

		</div>
		)
};
export default SignUp;