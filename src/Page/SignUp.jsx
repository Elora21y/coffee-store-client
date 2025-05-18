import React, { use } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import logo2 from "../assets/2.png";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const SignUp = () => {
  const { createUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleSinUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    // const { password, ...userProfile } = Object.fromEntries(formData.entries());
    // const email = formData.get('email');
    // const password = formData.get('password');

    const { password, email, ...restFormData } = Object.fromEntries(
      formData.entries()
    );
    // console.log({email, password , ...restFormData});

    // create user in firebase
    createUser(email, password)
      .then((result) => {
        console.log(result);
        const userProfile = {
          email,
          ...restFormData,
          creationTime: result.user?.metadata?.creationTime,
          lastSignIn: result.user?.metadata?.lastSignInTime,
        };
        //save profile info in the DB
        fetch("https://coffee-store-server-amber-zeta.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              console.log("after profile save", data);
              toast.success("Your Account is created");
            }
            navigate("/");
            form.reset();
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("This Email Already Use");
      });
  };

  return (
    <div>
      <Link to="/" className="flex items-center gap-2 text-lg font-medium">
        <FaLongArrowAltLeft /> Back to Home
      </Link>
      <div className=" bg-base-200 rounded-xl py-4">
        <div className="hero-content flex-col lg:flex-row gap-20">
          <div className="text-center lg:text-left">
            <img src={logo2} alt="" className="w-fit" />
          </div>
          <div>
            <h1 className="text-6xl font-bold mb-5 text-secondary rancho text-center">
              Please SignUp now!
            </h1>
            <div className="card bg-primary w-[350px] md:w-[400px] shadow-2xl">
              <div className="card-body">
                <form onSubmit={handleSinUp} className="fieldset">
                  {/* name */}
                  <label className="label">User Name</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="name"
                    name="name"
                    required
                  />
                  {/* email */}
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input"
                    placeholder="Email"
                    name="email"
                  />
                  {/* Address */}
                  <label className="label">Address</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Address"
                    name="address"
                    required
                  />
                  {/* Phone  */}
                  <label className="label">Phone</label>
                  <input
                    type="tel"
                    className="input"
                    placeholder="Phone Number"
                    name="phone"
                    required
                  />
                  {/* photo */}
                  <label className="label">Photo URL</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Photo URL"
                    name="photo"
                    required
                  />
                  {/* //password */}
                  <label className="label">Password</label>
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    name="password"
                  />
                  <div></div>
                  <button className="btn mt-4 btn-secondary" type="submit">
                    SignUp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
