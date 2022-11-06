import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import logo from "../../Assets/logos/Group 1329.png";
import EventsCard from "./EventsCard";

const EventsDetails = () => {
  const { user } = useContext(AuthContext);
  const [event, setevent] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/events?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setevent(data));
  }, [user?.email]);

  //Handle Status Update
  const HandleStatus = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/events/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = event.filter((ev) => ev._id !== id);
          const approving = event.find((ev) => ev._id === id);
          approving.status = "Approved";

          const newEvents = [approving, ...remaining];
          setevent(newEvents);
        }
      });
  };
  const navoptions = (
    <>
      <li className="font-semibold">
        <Link to="/">Home</Link>
        <Link>Donation</Link>
        <Link>Blogs</Link>
        {user?.uid && (
          <Link className="font-bold text-orange-600">{user.displayName}</Link>
        )}
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar p-10 justify-between">
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
            </ul>
          </div>
          <img className="w-48" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{navoptions}</ul>
        </div>
      </div>
      {/* Card Details Part Here */}
      {event.length}
      <div className="grid lg:grid-cols-2 gap-14 container mx-auto">
        {event.map((evnt) => (
          <EventsCard
            evnt={evnt}
            key={evnt._id}
            HandleStatus={HandleStatus}
          ></EventsCard>
        ))}
      </div>
    </div>
  );
};

export default EventsDetails;
