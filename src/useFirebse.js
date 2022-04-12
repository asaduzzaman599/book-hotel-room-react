import { useState } from "react"
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {auth} from './firebase.init'
const useFirebase = () =>{
    const [user,setUser]= useState({});
    const [error,setError] = useState({})


    const googleSignIn = () =>{

        const googleProvider = new GoogleAuthProvider(auth);

        signInWithPopup(auth,googleProvider)
        .then(res=>setUser(res.user))
        .catch(error=> setError(error.message))
    }

    return {user,error,googleSignIn}

}


export default useFirebase;