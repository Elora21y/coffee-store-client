import React, { use } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router";
import logo2 from "../assets/2.png";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { LoginUser } = use(AuthContext);
  // console.log(name)
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password)

    LoginUser(email, password)
      .then((result) => {
        // console.log(result)
        const userInfo = {
          email,
          lastSignIn: result.user?.metadata?.lastSignInTime,
        };
        fetch("https://coffee-store-server-amber-zeta.vercel.app/users", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
        .then(res => res.json())
        .then(data => console.log(data))
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <Link to="/" className="flex items-center gap-2">
        <FaLongArrowAltLeft /> Back to Home
      </Link>
      <div className=" bg-base-200 rounded-xl py-4">
        <div className="hero-content flex-col lg:flex-row gap-20">
          <div className="text-center lg:text-left">
            <img src={logo2} alt="" className="w-fit" />
          </div>
          <div>
            <h1 className="text-6xl font-bold mb-5 text-secondary rancho text-center">
              Please Login now!
            </h1>
            <div className="card bg-primary w-[350px] md:w-[400px] shadow-2xl">
              <div className="card-body">
                <form onSubmit={handleLogin} className="fieldset">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input"
                    placeholder="Email"
                    name="email"
                  />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    name="password"
                  />
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn mt-4 btn-secondary">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
