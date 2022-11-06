import React from "react";
import "./layout.css";
import logo from "../Assets/logos/Group 1329.png";
import { Link, Outlet } from "react-router-dom";
import { BsPeople, BsPlus } from "react-icons/bs";

const EventsLayout = () => {
  return (
    <div className="grid-custom">
      <div className="mx-8 my-4">
        <img className="w-2/3" src={logo} alt="" />
        <div className="my-8">
          <Link to="/registerlist">
            <div className="font-semibold flex p-3 items-center hover:bg-sky-200 hover:rounded-md">
              <BsPeople className="mr-3"></BsPeople>Volunteer Register List
            </div>
          </Link>
          <Link to="/events">
            <div className="flex items-center p-3 font-semibold my-3 hover:bg-sky-200 hover:rounded-md">
              {" "}
              <BsPlus className="mr-3"></BsPlus>Add Event
            </div>
          </Link>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold p-6 ">Add Events</h2>
        <div className="bg-slate-100 h-screen rounded-l-md p-2">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default EventsLayout;
