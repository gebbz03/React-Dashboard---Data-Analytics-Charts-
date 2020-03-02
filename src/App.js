import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ResponsiveNavigation from "./components/ResponsiveNavigation";
import "./scss/base.scss";
import { Router } from "@reach/router";
import Home from "./pages/Home";
import axios from "axios";
import DashboardSelector from "./pages/DashboardSelector";
import Dashboard from "./pages/Dashboard";

function App() {
  const navLinks = [
    {
      text: "Home",
      path: "/",
      icon: "ion-ios-home"
    },
    {
      text: "Analytics",
      path: "/analytics",
      icon: "ion-ios-analytics"
    }
  ];
  return (
    <div className="App">
      <ResponsiveNavigation
        navLinks={navLinks}
        logo={logo}
        background="#fff"
        hoverBackground="#ddd"
        linkColor="#777"
      />

      <Router>
        <Home path="/" />
        <DashboardSelector path="/analytics" axios={axios} />
        <Dashboard path="/analytics/:dashboardName" axios={axios} />
      </Router>
    </div>
  );
}

export default App;
