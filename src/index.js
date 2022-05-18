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
      <Route path="/capstone_new_site/about" element={<About />} />
      <Route path="/capstone_new_site/leaderBoard" element={<LeaderBoard />} />
      <Route path="/capstone_new_site/download" element={<Download />} />
      <Route path="/capstone_new_site/contact" element={<Contact />} />
      <Route path="/capstone_new_site/" element={<Home />} />
      </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);
