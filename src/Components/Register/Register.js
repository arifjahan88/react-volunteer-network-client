import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/logos/Group 1329.png";

const Register = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <img className="w-60" src={logo} alt="" />
      </div>
      <div className="flex justify-center my-10">
        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                placeholder="date"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="description"
                placeholder="description"
                className="input input-bordered"
              />
              <label className="label">
                <p className="label-text-alt">
                  Already Have an account!{" "}
                  <Link
                    to="/login"
                    className="label-text-alt link text-blue-700"
                  >
                    Please Log In
                  </Link>
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
