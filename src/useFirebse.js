import { useState } from "react"
import {  signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from './firebase.init'
const useFirebase = () =>{
    const [user,setUser]= useState({});
    const [error,setError] = useState({})

    const emailAndPasswordSignIn = (email,password)=>{
        signInWithEmailAndPassword(auth,email,password)
        .then(res=>setUser(res.user))
        .catch(error=>console.log(error.message))
    }
    const googleSignIn = () =>{

        const googleProvider = new GoogleAuthProvider(auth);

        signInWithPopup(auth,googleProvider)
        .then(res=>setUser(res.user))
        .catch(error=> setError(error.message))
    }

    const emailAndPasswordCreateUser = (name,email,password)=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then(res=>{
            updateProfile(auth.currentUser,{displayName:name})
            .then()
            .catch(error=>console.log(error.message))
            setUser(res.user);
            console.log(user)
        })
        .catch(error=>console.log(error.message))
    }

    return {user,error,googleSignIn,emailAndPasswordCreateUser,emailAndPasswordSignIn}

}


export default useFirebase;