import React from 'react';
import { Link } from 'react-router';

const Coffees = ({coffees}) => {
    console.log(coffees)
    return (
        <div>
            <div className="">
                <Link to ="/add-coffee">Add Coffee</Link>
            </div>
        </div>
    );
};

export default Coffees;