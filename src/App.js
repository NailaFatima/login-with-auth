import {Routes,Route} from 'react-router-dom';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import SignUp from './components/Pages/SignUp'
import Login from './components/Pages/Login'
import Home from './components/Pages/Home'
import ProtectedRoute from './components/Pages/ProtectedRoute'
import { UserAuthContextProvider } from "./contexts/UserAuthContext";


function App() {
  return (
    <div className="App">
    <UserAuthContextProvider>
    <Routes>
    <Route path='/Home' element={
      <ProtectedRoute>
      <Home/>
      </ProtectedRoute>
    }/>
    <Route path='/' element={<Login/>}/>

      <Route path='/SignUp' element={<SignUp/>}/>
      
    </Routes>
    </UserAuthContextProvider>
    
    </div>
  );
}

export default App;
