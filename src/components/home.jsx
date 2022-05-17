import React from "react";
//src="https://github.com/ijCasimbon/capstone-site/raw/main/src/components/download-logo.jpg/"
//class="img-fluid rounded mb-4 mb-lg-0"
function Home() {
  return (
    <div className="home">
    <h2 class="font-weight-light">Home</h2>
    <div class="container">
      <div class="row align-items-center my-5">
        <div class="col-lg-7">
          <img
            class="img-fluid rounded mb-4 mb-lg-0"
            src="https://github.com/ijCasimbon/capstone-site/raw/main/src/components/images/main-new.JPG"
            alt=""
          />
        </div>
        <div class="col-lg-5">
          <h2 class="font-weight-light">Main-menu</h2>
          <p>
            This is where you start your adventure.
          </p>
        </div>
      </div>
    </div>
  </div>
);
}

export default Home;
