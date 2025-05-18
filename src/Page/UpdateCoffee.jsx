import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router';

const UpdateCoffee = () => {
    const { photo, name, price, quantity, _id ,category, taste, details} = useLoaderData()
    const handleUpdateCoffee = (e) =>{
      e.preventDefault()
      const form = e.target
      const formData = new FormData(form)
      const newCoffee = Object.fromEntries(formData.entries())
        console.log('update')
        //update
        fetch(`https://coffee-store-server-amber-zeta.vercel.app/coffees/${_id}`, {
          method : 'PUT',
          headers : {
            'content-type' : 'application/json'
          },
          body : JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data =>{
        if(data.modifiedCount){
          console.log(data)
          toast.success('Updated Coffee Successfully')
        }
        })

    }
    return (
        <div className="space-y-6">
      <Link to="/" className="flex items-center gap-2">
        <FaLongArrowAltLeft /> Back to Home
      </Link>

      <div className="bg-base-200 rounded-lg px-6 md:px-12 lg:px-24 py-16">
        <div className="text-center space-y-4" >
          <h2 className="text-4xl text-[#374151] font-bold rancho">Update Existing Coffee Details</h2>
          <p className="text-accent max-w-[932px] mx-auto">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>

       <form onSubmit={handleUpdateCoffee}>
         <div className="grid lg:grid-cols-2 lg:gap-6 mt-8">
            
          <fieldset className="fieldset rounded-box ">
            <label className="label font-semibold text-lg">Name</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter coffee name"
              name="name"
              defaultValue={name}
            />
          </fieldset>
          <fieldset className="fieldset rounded-box ">
            <label className="label font-semibold text-lg">Quantity</label>
            <input
              type="number"
              className="input w-full"
              placeholder="Enter coffee quantity"
              name="quantity"
              defaultValue={quantity}
            />
          </fieldset>
          <fieldset className="fieldset rounded-box ">
            <label className="label font-semibold text-lg">Price</label>
            <input
              type="number"
              className="input w-full"
              placeholder="Enter coffee price"
              name="price"
              defaultValue={price}
            />
          </fieldset>
          <fieldset className="fieldset rounded-box ">
            <label className="label font-semibold text-lg">Taste</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter coffee taste"
              name="taste"
              defaultValue={taste}
            />
          </fieldset>
          <fieldset className="fieldset rounded-box ">
            <label className="label font-semibold text-lg">Category</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter coffee category"
              name="category"
              defaultValue={category}
            />
          </fieldset>
          <fieldset className="fieldset rounded-box ">
            <label className="label font-semibold text-lg">Details</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter coffee details"
              name="details"
              defaultValue={details}
            />
          </fieldset>
        </div>
          <fieldset className="fieldset rounded-box ">
            <label className="label font-semibold text-lg">Photo</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter photo URL"
              name="photo"
              defaultValue={photo}
            />
          </fieldset>
          <button type="submit" className="btn btn-block bg-primary border-2 border-secondary  mt-6 text-secondary rancho text-lg">Update Coffee Details</button>
       </form>
      </div>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </div>
    );
};

export default UpdateCoffee;