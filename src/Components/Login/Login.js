import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../../useFirebse';

const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: { value: '' },
        password: { value: '' }
    })

    const { user, error, googleSignIn,emailAndPasswordSignIn } = useFirebase()

    const location = useLocation();
    const navigate = useNavigate()

    const from = location?.state?.from?.pathname || '/';
    if (user?.uid) {
        navigate(from);
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const {email:{value:email},password:{value:password}}= userInfo;
        if(email,password){
            emailAndPasswordSignIn(email,password);
        }
    }
    return (
        <div className='sm:w-2/6 w-full mx-auto p-4 border'>
            <h3 className='font-semibold'>Login</h3>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input onChange={(event)=>setUserInfo({
                        email:{value:event.target.value},
                        password:{value:userInfo.password.value}
                    })} className='w-full border-b-2 h-8 mb-4 focus:border-blue-400 outline-none' type="email" name="" id="" required />
                </div>
                <div className="input-group">
                    <input onChange={(event)=>setUserInfo({
                        email:{value:userInfo.email.value},
                        password:{value:event.target.value}
                    })} className='w-full border-b-2 h-8  mb-4 focus:border-blue-400 outline-none' type="password" name="" id="" required />
                </div>
                <p className='my-4'>Don't have any account? <Link to='/register' className='text-blue-400'>Register</Link></p>
                <input className='px-10 py-3 w-full  bg-slate-500 text-white font-semibold' type="submit" value="Login" />
            </form>
            <div className='w-full border  my-6'></div>
            <button onClick={() => googleSignIn()} className=' py-2 w-full border  font-medium flex items-center justify-center gap-8 py-4'><img src='https://img.icons8.com/fluency/344/google-logo.png' width={25} />Continue with Google</button>
        </div>
    );
};

export default Login;