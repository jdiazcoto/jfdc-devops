import React from "react";
import Jfdc from "../../assets/img/jfdc.jpg";
import "./HomeStyles.css";

function UnitLatestBlogPost() {
  return (
    <div className="valign-wrapper">
      <div className="card card-small col s4 m4 l2 offset-l1 ">
        <div className="card-content center">
          <h1>16</h1>
          <p>Nov</p>
        </div>
      </div>

      <div className="col s4 m6 l7 offset-l1">
        <p>#intro #pathway #letsdothis</p>
        <h2>And this is where it allllll got started...........</h2>
        <p>
          1998 graduating from high school at 17 heading out to the east coast
          to study, entering into the engineering program of Lehigh University.
          A dear friend, planting a seed, study computer science you can live in
          an island and work.... Well if you think about every continent is a
          major island so kind of, but then boom not graduating and having with
          my rock strong wife a beautiful girl, entering the workforce and
          revisiting programming some 12 years later......
        </p>
        <p>
          {" "}
          <a href="">Read More</a>{" "}
        </p>
      </div>
    </div>
  );
}

export default UnitLatestBlogPost;
