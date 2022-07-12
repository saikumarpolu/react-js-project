import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Register from "./routes/Register";

const App = () => {
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("myUserDb"));
    if (user) {
      setUserDetails(user);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Navigate replace to={!!userDetails ? "/login" : "/register"} />
          }
        />
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/home" exact element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
