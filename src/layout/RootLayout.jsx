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
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default RootLayout;