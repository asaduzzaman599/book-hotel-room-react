import React from 'react';
import useFirebase from '../../useFirebse';

const Login = () => {

    const {user,error,googleSignIn} = useFirebase()

    console.log(user)
    const handleSubmit = ()=>{
    }
    return (
        <div className='w-2/6 mx-auto p-4 border'>
            <h3 className='font-semibold'>Login</h3>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                <input className='w-full border-b-2 h-8 mb-4 focus:border-blue-400 outline-none' type="email" name="" id="" />
                </div>
                <div className="input-group">
                <input className='w-full border-b-2 h-8  mb-4 focus:border-blue-400 outline-none' type="password" name="" id="" />
                </div>
               
                <input className='px-10 py-3 w-full  bg-slate-500 text-white font-semibold' type="submit" value="Login" />
            </form>
            <div className='w-full border  my-6'></div>
            <button onClick={()=>googleSignIn()} className=' py-2 w-full border  font-medium flex items-center justify-center gap-8 py-4'><img src='https://img.icons8.com/fluency/344/google-logo.png' width={25}/>Continue with Google</button>
        </div>
    );
};

export default Login;