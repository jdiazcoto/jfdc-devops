import React from "react";
import Jfdc from "../../assets/img/jfdc.jpg";
import "./HomeStyles.css";

function UnitFeatBlogPost() {
  return (
    <div className="card card-small col s12 m4 l2">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={Jfdc} />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          Card Title
          <i className="material-icons right">more_vert</i>
        </span>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          Card Title<i className="material-icons right">close</i>
        </span>
        <p>
          Here is some more information about this product that is only revealed
          once clicked on.
        </p>
      </div>
    </div>
  );
}

export default UnitFeatBlogPost;
