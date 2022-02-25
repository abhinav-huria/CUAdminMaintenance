import React from "react";
import { Navigate, Route, Outlet } from "react-router-dom";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  console.log("this", isAuthenticated);

  
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;


    
    // <Route
    //   {...restOfProps}
    //   render={(props) =>
    //     isAuthenticated ? <Component {...props} /> : <Navigate to="/login" />
    //   }
    // />
  
}

export default ProtectedRoute;