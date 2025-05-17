import React, { useState } from 'react';
import { Link } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Coffees = ({initialCoffees}) => {
    const [coffees , setCoffees] = useState(initialCoffees)
    // console.log(coffees)
    return (
        <div>
            <div className="text-center space-y-4 mb-10">
                <p className='text-xl'>--- Sip & Savor ---</p>
                <h3 className='rancho text-5xl font-semibold text-[#331A15]' 
                style={{
                    textShadow: '2px -4px 4px #331A1530'
                }}>Our Popular Products</h3>
                <Link to ="/add-coffee" className='btn bg-primary text-secondary border-2 border-secondary'>Add Coffee</Link>
                    </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {
                        coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} setCoffees={setCoffees} coffees={coffees}></CoffeeCard>)
                    }
                </div>
        </div>
    );
};

export default Coffees;