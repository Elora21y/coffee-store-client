import React from 'react';
import Banner from '../components/Home/Banner';
import Coffees from '../components/Home/Coffees';
import { useLoaderData } from 'react-router';

const Home = () => {
    const coffees = useLoaderData()
    return (
        <div>
            <Banner/>
            <Coffees initialCoffees={coffees}/>
        </div>
    );
};

export default Home;