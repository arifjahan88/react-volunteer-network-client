import React from "react";
import HomeCards from "./HomeCards";

const Home = () => {
  return (
    <div>
      <p className="text-4xl font-bold text-center">
        I GOW BY HELPING PEOPLE IN NEED.
      </p>
      <div className="flex justify-center py-10">
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered"
            />
            <button className="btn bg-blue-600 border-blue-600 text-white rounded-r-lg">
              Search
            </button>
          </div>
        </div>
      </div>
      <HomeCards></HomeCards>
    </div>
  );
};

export default Home;
