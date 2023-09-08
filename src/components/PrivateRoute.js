import { Route, Redirect, useNavigate, Navigate } from "react-router-dom";

export default function PrivateRoute(props) {
  //   var navigate = useNavigate();
  var { Component } = props;
  //   console.log(Component);
  const check_sessionStorage_value = sessionStorage.getItem("name");
  if (check_sessionStorage_value != null) {
    return <Component />;
  } else {
    return <Navigate to={"/"}></Navigate>;
  }
}
