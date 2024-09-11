import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Menu, X } from 'lucide-react';
import { navItems } from '../constants/input';

function Navbar() {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    return (
        <>
            <div className='sticky py-3 top-0 backdrop-blur-lg z-50 border-b border-neutral-700/80'>
                <div className='container px-4 mx-auto relative text-sm'>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center flex-shrink-0">
                            <img className='h-10 w-10 mr-2' src={logo} alt="logo" />
                            <span className='text-xl tracking-tight'>VirtualR</span>
                        </div>
                        <ul className='hidden lg:flex ml-14 space-x-12'>
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div className='hidden lg:flex ml-12 space-x-12 items-center'>
                            <a href="#" className='px-3 py-2 rounded-md border'>Sign In</a>
                            <a href="#" className='px-3 py-2 bg-gradient-to-r from-orange-500 to-orange-800 rounded-md'>Create an account</a>
                        </div>
                        {/* Mobile menu button */}
                        <div className='lg:hidden'>
                            <button onClick={toggleNavbar}>
                                {mobileDrawerOpen ? <X /> : <Menu />}
                            </button>
                        </div>
                    </div>
                    {/* Mobile drawer */}
                    {mobileDrawerOpen && (
                        <div className='fixed right-0 bg-neutral-900 w-full z-20 p-12 flex flex-col justify-center items-center lg:hidden'>
                            <ul>
                                {navItems.map((item, index) => (
                                    <li className='py-4' key={index}>
                                        <a href={item.href}>{item.label}</a>
                                    </li>
                                ))}
                            </ul>
                            <div>
                                <a href="#" className='px-3 py-2 rounded-md border'>Sign In</a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Navbar;
