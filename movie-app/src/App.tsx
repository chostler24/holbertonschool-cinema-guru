import "bootstrap";
import Input from "./components/Input";
import React, { useState, useEffect } from "react";
import "./App.css";
import Authentication from "./routes/auth/Authentication.js";
import Dashboard from "./routes/dashboard/Dashboard.js";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState("");

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      fetch("/api/auth/", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setIsLoggedIn(true);
          setUserUsername(data.username);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  return (
    <div className="App">{isLoggedIn ? <Dashboard /> : <Authentication />}</div>
  );
}

export default App;
