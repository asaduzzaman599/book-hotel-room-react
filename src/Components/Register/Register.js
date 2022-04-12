import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../../useFirebse';

const Register = () => {
    const {user,error,googleSignIn} = useFirebase()

    const navigate = useNavigate()

    if(user?.uid){
        navigate('/');
    }
    const handleSubmit = ()=>{
    }
    return (
        <div className='sm:w-2/6 w-full mx-auto p-4 border'>
            <h3 className='font-semibold'>Login</h3>
            <form onSubmit={handleSubmit}><div className="input-group">
                <input className='w-full border-b-2 h-8 mb-4 focus:border-blue-400 outline-none' type="text" name="" id="" placeholder='Username' required/>
                </div>
                <div className="input-group">
                <input className='w-full border-b-2 h-8 mb-4 focus:border-blue-400 outline-none' type="email" name="" id="" placeholder='Your Email' required/>
                </div>
                <div className="input-group">
                <input className='w-full border-b-2 h-8  mb-4 focus:border-blue-400 outline-none' type="password" name="" id="" placeholder='Your Password' required/>
                </div>
               <p className='my-4'>Already have account? <Link className='text-blue-400' to={'/login'}>Login</Link></p>
                <input className='px-10 py-3 w-full  bg-slate-500 text-white font-semibold' type="submit" value="Login" />
            </form>
            <div className='w-full border  my-6'></div>
            <button onClick={()=>googleSignIn()} className=' py-2 w-full border  font-medium flex items-center justify-center gap-8 py-4'><img src='https://img.icons8.com/fluency/344/google-logo.png' width={25}/>Continue with Google</button>
        </div>
    );
};

export default Register;