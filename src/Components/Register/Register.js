import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../../useFirebse';

const Register = () => {
    const {user,error,googleSignIn,emailAndPasswordCreateUser} = useFirebase()

    const [userInfo,setUserInfo]=useState(
        {
            name:{value:''},
            email:{value:''},
            password:{value:''}
        })

    const navigate = useNavigate()

    if(user?.uid){
        navigate('/');
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        const {name:{value:name},email:{value:email},password:{value:password}}=userInfo;
        if(email && name && password){
            if(password.length>=6){
                emailAndPasswordCreateUser(name,email,password)
            }else{
                toast.error('Password Length Must Be More Then 6')
            }
        }
        
    }
    return (
        <div className='sm:w-2/6 w-full mx-auto p-4 border'>
            <h3 className='font-semibold'>Login</h3>
            <form onSubmit={handleSubmit}><div className="input-group">
                <input className='w-full border-b-2 h-8 mb-4 focus:border-blue-400 outline-none' type="text" name="" id="" placeholder='Username' onChange={(event)=>setUserInfo(
                    {
                        name:{value:event.target.value},
                        email:{value:userInfo.email.value},
                        password:{value:userInfo.password.value}
                    }
                )}  required/>
                </div>
                <div className="input-group">
                <input className='w-full border-b-2 h-8 mb-4 focus:border-blue-400 outline-none' type="email" name="" id="" placeholder='Your Email' onChange={(event)=>setUserInfo(
                    {
                        name:{value:userInfo.name.value},
                        email:{value:event.target.value},
                        password:{value:userInfo.password.value}
                    }
                )} required/>
                </div>
                <div className="input-group">
                <input className='w-full border-b-2 h-8  mb-4 focus:border-blue-400 outline-none' type="password" name="" id="" placeholder='Your Password' onChange={(event)=>setUserInfo(
                    {
                        name:{value:userInfo.name.value},
                        email:{value:userInfo.email.value},
                        password:{value:event.target.value}
                    }
                )} required/>
                </div>
               <p className='my-4'>Already have account? <Link className='text-blue-400' to={'/login'}>Register</Link></p>
                <input className='px-10 py-3 w-full  bg-slate-500 text-white font-semibold' type="submit" value="Login" />
            </form>
            <div className='w-full border  my-6'></div>
            <button onClick={()=>googleSignIn()} className=' py-2 w-full border  font-medium flex items-center justify-center gap-8 py-4'><img src='https://img.icons8.com/fluency/344/google-logo.png' width={25}/>Continue with Google</button>
        </div>
    );
};

export default Register;