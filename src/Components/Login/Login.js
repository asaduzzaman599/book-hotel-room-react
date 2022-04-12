import React from 'react';

const Login = () => {


    const handleSubmit = ()=>{

    }
    return (
        <div className='w-2/6 mx-auto p-4 border'>
            <h3>Login</h3>
            <form onSubmit={handleSubmit}>
                <input className='w-full border-b-2 h-8' type="email" name="" id="" />
                <input className='w-full border-b-2 h-8'  type="password" name="" id="" />
                <input type="submit" value="Login" />
            </form>
            <button className=' py-2 w-full border border-red-500 font-medium'>Continue with Google</button>
        </div>
    );
};

export default Login;