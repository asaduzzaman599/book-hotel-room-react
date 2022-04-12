import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user)
    return (
        <header className='flex justify-between px-10 py-5 bg-blue-100'>

            <h2 className='font-bold text-2xl text-slate-600'>Book Hotel Room</h2>
            <ul className='flex gap-5 items-center'>
                <li><NavLink className="font-semibold text-slate-600" style={({isActive})=>isActive?{color:'goldenrod'}:{}} to='/'>Home</NavLink></li>
                <li><NavLink className="font-semibold text-slate-600" style={({isActive})=>isActive?{color:'goldenrod'}:{}}  to='/room/single'>Room</NavLink></li>
                <li><NavLink className="font-semibold text-slate-600" style={({isActive})=>isActive?{color:'goldenrod'}:{}}  to='/about'>About</NavLink></li>
                {
                    user ? <li>
                        <button onClick={()=>signOut(auth)} className='px-6 py-2 rounded bg-slate-800 font-medium text-slate-600 hover:text-white'>Logout</button>
                    </li>
                    :<li><NavLink className="font-semibold text-slate-600" style={({isActive})=>isActive?{color:'goldenrod'}:{}}  to='/login'>Login</NavLink></li>
                }
            </ul>
        </header>
    );
};

export default Header;