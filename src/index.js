import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Contact,
  Download,
  LeaderBoard,
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/capstone-site/about" element={<About />} />
      <Route path="/capstone-site/leaderBoard" element={<LeaderBoard />} />
      <Route path="/capstone-site/download" element={<Download />} />
      <Route path="/capstone-site/contact" element={<Contact />} />
      <Route path="/capstone-site/" element={<Home />} />
      </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);
