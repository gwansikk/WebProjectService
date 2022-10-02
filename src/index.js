import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Main from "./pages/Main";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Nav />
    <Main />
    <Footer />
  </React.StrictMode>
);
