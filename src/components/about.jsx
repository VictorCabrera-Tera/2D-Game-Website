import React from "react";

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-12">
            <h1>How to play the game.</h1>

            <dl class="row">
            <dt class="col-sm-2"><h3><b>↔</b></h3></dt>
            <dd class="col-sm-10">Movement</dd>

            <dt class="col-sm-2"><b>[SPACE BAR]</b></dt>
            <dd class="col-sm-10">Jump</dd>
            </dl>

            <h2> <span className="win">How to win</span></h2>
            <p>  Players must collect all 3 coins. </p>
            <p>  Grab the flag to advance to the next level.</p>
            <p>  Complete all levels for a victory screen with your score :D</p>
         
            <h3><span className="lose">How to lose</span></h3>
            <p>  If you hit blue obstacles you lose HP.</p>
            <p>  Once your HP hits zero your game ends.</p>
            <p>  you will start from level 1 again D:</p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
