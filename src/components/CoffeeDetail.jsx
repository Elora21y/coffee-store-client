import React from "react";
import { useLoaderData } from "react-router";

const CoffeeDetail = () => {
  const { photo, name, price, quantity, _id, category, taste, details } =
    useLoaderData();
  return (
    <div className="flex flex-col lg:flex-row justify-evenly bg-base-200 p-12 rounded-lg">
      <img src={photo} alt="" className="w-fit mx-auto lg:mx-0"/>
      <div className="">
        <h3 className="text-4xl font-bold  mb-6 rancho" 
        style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)', color: '#3e2723' }}>Niceties</h3>
        <div className="space-y-3 text-gray-700 text-base">
          <p>
            <span className="font-bold">Name:</span> {name}
          </p>
          <p>
            <span className="font-bold">Price:</span> {price}
          </p>
          <p>
            <span className="font-bold">Quantity:</span> {quantity}
          </p>
          <p>
            <span className="font-bold">Taste:</span> {taste}
          </p>
          <p>
            <span className="font-bold">Category:</span> {category}
          </p>
          <p>
            <span className="font-bold">Details:</span> {details}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetail;
