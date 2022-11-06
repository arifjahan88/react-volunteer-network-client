import React from "react";

const EventsCard = ({ evnt, HandleStatus }) => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img src="https://placeimg.com/200/280/arch" alt="Movie" />
          </figure>
          <div className="card-body justify-between">
            <div>
              <h2 className="card-title">Title : {evnt.title}</h2>
              <p>Date : {evnt.date}</p>
              <p>Description : {evnt.description}</p>
            </div>
            <div className="card-actions justify-end">
              <button
                onClick={() => HandleStatus(evnt._id)}
                className="btn btn-ghost btn-xs"
              >
                {evnt.status ? evnt.status : "Pending"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
