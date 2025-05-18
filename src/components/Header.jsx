import React from 'react';
import { NavLink } from 'react-router';
import logo1 from '/logo1.png'

const Header = () => {
    return (
        <div className='bg-secondary text-white flex justify-between items-center px-3 py-2'>
            <div></div>
            <div className="flex items-center gap-1">
                <img src={logo1} alt="" className='w-12'/>
            <h2 className='text-3xl font-medium rancho'>Espresso Emporium</h2>
            </div>
              <nav>
                <ul className='flex gap-4'>
                    <li><NavLink to='/login' className='btn'> Login</NavLink></li>
                    <li><NavLink to='/signup' className='btn'> SignUp</NavLink></li>
                </ul>
              </nav>
        </div>
    );
};

export default Header;