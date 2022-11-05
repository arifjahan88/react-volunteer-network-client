import React from "react";
import logo from "../../Assets/logos/Group 1329.png";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <img className="w-60" src={logo} alt="" />
      </div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center border p-48 my-10 w-1/2 ">
          <p className="text-4xl font-bold">Login With</p>
          <button className=" btn btn-outline my-4">
            <div>
              <FcGoogle className="text-3xl"></FcGoogle>
            </div>
            <p className="mx-3">Connect With Google</p>
          </button>
          <h2>
            Don't Have an Account?{" "}
            <Link className="text-blue-700 link" to="/register">
              Create an Account
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
