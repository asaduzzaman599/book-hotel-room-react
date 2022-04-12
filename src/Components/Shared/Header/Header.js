import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='flex justify-between px-10 py-5 bg-blue-100'>

            <h2 className='font-bold text-2xl text-slate-600'>Book Hotel Room</h2>
            <ul className='flex gap-5'>
                <NavLink className="font-semibold text-slate-600" style={({isActive})=>isActive?{color:'goldenrod'}:{}} to='/'>Home</NavLink>
                <NavLink className="font-semibold text-slate-600" style={({isActive})=>isActive?{color:'goldenrod'}:{}}  to='/room/single'>Room</NavLink>
                <NavLink className="font-semibold text-slate-600" style={({isActive})=>isActive?{color:'goldenrod'}:{}}  to='/about'>About</NavLink>
                <NavLink className="font-semibold text-slate-600" style={({isActive})=>isActive?{color:'goldenrod'}:{}}  to='/login'>Login</NavLink>
            </ul>
        </header>
    );
};

export default Header;