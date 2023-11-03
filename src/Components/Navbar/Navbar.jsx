import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navOptions =
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About Us</Link></li>
            <li><Link to="/">Destinations</Link></li>
            <li><Link to="/">Tours</Link></li>
            <li><Link to="/">Shop</Link></li>
            <li><Link to="/">Blogs</Link></li>
        </>

    return (
        <>
            <div className="navbar fixed z-50 max-w-screen-4xl bg-black bg-opacity-40 font-semibold text-white lg:px-10 top-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <p className="lg:ms-36 lg:text-2xl text-center bg px-2 py-2 rounded-lg font-serif font-semibold ms-3 ">CrazyTraveller</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>

                <div className="navbar-end lg:me-36">
                    {/* <img className="w-16 h-16 rounded-full" alt="" /> */}
                    <Link to='/'>Sign In</Link>
                    <Link to="/"><button className='btn ms-4 lg:ms-7'>SingUp</button></Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;