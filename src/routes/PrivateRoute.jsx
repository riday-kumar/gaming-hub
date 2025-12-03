import React, { useContext } from "react";
import { AuthContext } from "../authContext/AuthContext";
import { Navigate, useLocation, useNavigate } from "react-router";
import Loading from "../components/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const currentLocation = location.pathname;
  // console.log(location);
  // console.log(currentLocation);
  const navigate = useNavigate();

  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate to="/auth/login" state={currentLocation}></Navigate>;
  } else {
    return children;
  }
};

export default PrivateRoute;
