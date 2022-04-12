import { useState } from "react"
import {  signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from './firebase.init'
const useFirebase = () =>{
    const [user,setUser]= useState({});
    const [error,setError] = useState({})

    const emailAndPasswordSignIn = (email,password)=>{
        signInWithEmailAndPassword(auth,email,password)
        .then(res=>setUser(res.user))
        .catch(error=>setError(error.message))
    }
    const googleSignIn = () =>{

        const googleProvider = new GoogleAuthProvider(auth);

        signInWithPopup(auth,googleProvider)
        .then(res=>setUser(res.user))
        .catch(error=> setError(error.message))
    }

    return {user,error,googleSignIn}

}


export default useFirebase;