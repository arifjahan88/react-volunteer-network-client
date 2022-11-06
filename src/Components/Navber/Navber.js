import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/logos/Group 1329.png";
import { AuthContext } from "../../Contexts/AuthProvider";

const Navber = () => {
  const { logout, user } = useContext(AuthContext);

  const navoptions = (
    <>
      <li className="font-semibold">
        <Link>Home</Link>
        <Link>Donation</Link>
        <Link to="/eventdetails">Events</Link>
        <Link>Blogs</Link>
        {user?.uid && (
          <Link className="font-bold text-orange-600">{user.displayName}</Link>
        )}
      </li>
    </>
  );
  const navbuttons = (
    <>
      {user?.uid ? (
        <button
          onClick={logout}
          className="bg-red-500 mx-1 py-2 px-8 rounded-md text-white semi-bold hover:bg-red-400"
        >
          LogOut
        </button>
      ) : (
        <>
          <Link to="/login">
            <button className="bg-blue-500 mx-1 py-2 px-8 rounded-md text-white semi-bold hover:bg-blue-400">
              Log In
            </button>
          </Link>
          <Link to="/register">
            <button className="bg-orange-500 mx-1 py-2 px-8 rounded-md text-white semi-bold hover:bg-orange-400">
              Register
            </button>
          </Link>
        </>
      )}
      <Link to="/events">
        <button className="bg-gray-800 mx-1 py-2 px-8 rounded-md text-white semi-bold hover:bg-gray-400">
          Admin
        </button>
      </Link>
    </>
  );
  return (
    <div>
      <div className="navbar p-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-1 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navoptions}
              {navbuttons}
            </ul>
          </div>
          <img className="w-48" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{navoptions}</ul>
        </div>
        <div className="navbar-end hidden lg:inline-flex ">{navbuttons}</div>
      </div>
    </div>
  );
};

export default Navber;
