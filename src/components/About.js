import React from "react";
import Navbar from "./Navbar";

function About() {
  return (
    <div>
      <Navbar />

      <h1>Who is JFDCDEVOPS</h1>
      <p>
        Simple guy, family man and aspiring programmmer and book writer. Stoic
        at heart, grateful with everything and everyone I like sponging in
        knowledge and sponging out love, I'll try my best to tell the story as
        is with programming at its heart but with many failed attempts at other
        ventures. Join me in learning and growing, falling down but always
        getting right up again.
      </p>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" class="validate" />
              <label for="email">Email</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default About;
