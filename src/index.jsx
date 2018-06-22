import "./style.scss";
import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { render } from "react-dom";

render(
  <BrowserRouter>
    <h1>Boilerplate for React + SASS + Webpack</h1>
    {/* Routes and components here */}
  </BrowserRouter>,
  document.getElementById("app-container")
);
