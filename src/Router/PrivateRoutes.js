import React, { Children, useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (user) {
    return Children;
  }
  if (loading) {
    return <h2 className="text-3xl">loading . . .</h2>;
  }
  return <Navigate state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
