import React from "react";
import { FaEye, FaPencilAlt } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee , setCoffees, coffees}) => {
  const { photo, name, price, quantity, _id } = coffee;

  const handleDeleteCoffee = (id) => {
    // console.log("delete coffee", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
        console.log(result)
      if (result.isConfirmed) {
        
    //delete
    fetch(`http://localhost:2100/coffees/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.deletedCount){
            console.log(data);
        Swal.fire({
          title: "Deleted!",
          text: "Your Coffee is deleted.",
          icon: "success",
        });
        const remainingCoffee = coffees.filter(coffee => coffee._id !== id)
        setCoffees(remainingCoffee)
        }
      });
      }
    });
  };
  return (
    <div className="bg-base-200 rounded-xl p-4 flex justify-between items-center">
      <figure>
        <img src={photo} alt="Coffee" />
      </figure>

      <div>
        <p>Name : {name}</p>
        <p>Price : tk.{price}</p>
        <p>Quantity : {quantity}</p>
      </div>

      <div className="join join-vertical gap-4">
        <Link
          to={`/coffee-detail/${_id}`}
          className="btn join-item bg-primary text-white rounded-lg"
        >
          <FaEye size={20} />
        </Link>
        <Link
          to={`/update-coffee/${_id}`}
          className="btn join-item bg-[#3C393B] text-white rounded-lg"
        >
          <FaPencilAlt size={20} />
        </Link>
        <button
          onClick={() => handleDeleteCoffee(_id)}
          className="btn join-item bg-red-500 text-white rounded-lg"
        >
          <RiDeleteBin6Fill size={20} />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
