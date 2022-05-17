import React from "react";
import { Link, animateScroll as scroll } from "react-scroll/modules";
function Download() {
  
  return (
    <div className="download">
    <div class="container">
      <div class="row align-items-center my-5">
        <div class="col-lg-7">
          <img
            class="img-fluid rounded mb-4 mb-lg-0"
            src="https://github.com/ijCasimbon/capstone-site/raw/main/src/components/download-logo.jpg/"
            alt=""
          />
        </div>
        <div class="col-lg-5">
            <h1 class="font-weight-light">Download</h1>
            <p> OS: Windows 10 or later </p>
            <p> Processor: 2.6 GHz Quad Core or similar </p>
            <p> Memory: 8 GB RAM </p>
            <p> Storage: 1 GB available space</p>
              
            <p><a href="https://onedrive.live.com/download?cid=D8CCFBE118E7FB56&resid=D8CCFBE118E7FB56%21106&authkey=AFUnJmDb-Jkq5k8" className="btn btn-dark btn-lg" role="button" aria-pressed="true" id="button" download>Game</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Download;