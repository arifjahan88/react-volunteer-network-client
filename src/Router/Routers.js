import { createBrowserRouter } from "react-router-dom";
import Events from "../Components/Events/Events";
import EventsDetails from "../Components/EventsDetails/EventsDetails";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import RegisterList from "../Components/RegisterList/RegisterList";
import EventsLayout from "../Layout/EventsLayout";
import Main from "../Layout/Main";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "register",
    element: <Register></Register>,
  },
  {
    path: "eventdetails",
    element: <EventsDetails></EventsDetails>,
  },
  {
    path: "/",
    element: <EventsLayout></EventsLayout>,
    children: [
      {
        path: "events",
        element: <Events></Events>,
      },
      {
        path: "registerlist",
        element: <RegisterList></RegisterList>,
      },
    ],
  },
]);
