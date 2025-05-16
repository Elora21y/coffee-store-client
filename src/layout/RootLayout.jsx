import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RootLayout = () => {
    return (
        <div>
            <header>
                <Header/>
            </header>
            <main className='max-w-7xl mx-auto px-5 md:px-10 my-10'> 
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default RootLayout;