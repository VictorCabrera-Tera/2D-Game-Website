import React, { useEffect, useState } from "react"
import * as ReactBootStrap from 'react-bootstrap'
import { Button } from 'react-bootstrap'

function Contact() {
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://github.com/ijCasimbon/capstone-site/raw/main/src/components/images/clipper.png/"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Our Githubs!</h1>
            <p><a href="https://github.com/EricZheng121?tab=repositories">Eric's Repo</a></p>
            <p><a href="https://github.com/ijCasimbon?tab=repositories">Ianne's Repo</a></p>
            <p><a href="https://github.com/Stevenh825-git?tab=repositories">Steven's Repo</a></p>
            <p><a href="https://github.com/VictorCabrera-Tera?tab=repositories">Victor's Repo</a></p>

            <h2 class="font-weight-light">Music Used! </h2>
            <p><a href="https://opengameart.org/content/on-my-way-8-bit-loop">Main music</a></p>
            <p><a href="https://opengameart.org/content/8-bit-lofi-ice-cave">level 1 music</a></p>
            <p><a href="https://opengameart.org/content/8-bit-lofi-cactu-sama-2">level 2 music</a></p>
            <p><a href="https://opengameart.org/content/8-bit-lofi-peractorum">level 3 music</a></p>
          </div>   
        </div>
      </div>
    </div>
  );
}

export default Contact;
