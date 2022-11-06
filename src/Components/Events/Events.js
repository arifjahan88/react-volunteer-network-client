import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Events = () => {
  const { user } = useContext(AuthContext);

  const HandleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const date = form.date.value;
    const description = form.description.value;
    const eventsDetails = {
      title,
      date,
      description,
      email: user.email,
    };
    if (!title) {
      alert("Please fill up title field");
    } else {
      fetch("http://localhost:5000/events", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(eventsDetails),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            console.log(data);
            alert("Events is Published");
            form.reset();
          }
        })
        .catch((err) => console.error(err));
    }
  };
  return (
    <form onSubmit={HandleSubmit} className="m-7 p-8 bg-white rounded-md">
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Event Title</span>
          </label>
          <input
            type="name"
            name="title"
            placeholder="Event Title"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Event Date</span>
          </label>
          <input
            type="date"
            name="date"
            placeholder="date"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            name="description"
            className="textarea textarea-bordered h-40"
            placeholder="Description"
          ></textarea>
        </div>
        <div>
          <label className="label">
            <span className="label-text">Upload Your Banner</span>
          </label>
          <div className="flex items-center space-x-6 ml-5 mt-2">
            <div className="shrink-0">
              <img
                className="h-16 w-16 object-cover rounded-full"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
                alt=""
              />
            </div>
            <label className="block">
              <input
                name="photo"
                type="file"
                className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700hover:file:bg-violet-100"
              />
            </label>
          </div>
        </div>
      </div>
      <button className="btn btn-primary mt-5">Submit</button>
      <Link to="/">
        <button className="ml-3 btn btn-secondary">Back To Home</button>
      </Link>
    </form>
  );
};

export default Events;
