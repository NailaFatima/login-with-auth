import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB8vbQ87qRTiiXuPVMtbLeOWMHYSwuswTc",
  authDomain: "login-react-e6e79.firebaseapp.com",
  projectId: "login-react-e6e79",
  storageBucket: "login-react-e6e79.appspot.com",
  messagingSenderId: "63590643851",
  appId: "1:63590643851:web:03eab350c8b561cb83fc8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export default app;