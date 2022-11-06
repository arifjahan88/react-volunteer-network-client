import React, { useContext } from "react";
import logo from "../../Assets/logos/Group 1329.png";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Login = () => {
  const { googlelogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const Handlegooglelogin = () => {
    googlelogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <img className="w-60" src={logo} alt="" />
      </div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center border p-0 lg:p-48 my-10 w-1/2 ">
          <p className="text-4xl font-bold">Login With</p>
          <button onClick={Handlegooglelogin} className=" btn btn-outline my-4">
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
