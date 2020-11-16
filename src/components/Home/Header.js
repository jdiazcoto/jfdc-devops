import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Jfdc from "../../assets/img/jfdc.jpg";

function Header() {
  return (
    <div className="collection">
      <div className="collection-item avatar">
        <img src={Jfdc} alt="Jorge F. Diaz Coto" className="circle" />
        <span className="title">
          Hey my friends...welcome to the JfdcDevops Blog
        </span>
        <p>
          I will share my story from the ground up, specifically in the last 5
          years from knowing little to knowing a little more about fullstack
          programming. I will also share personal topics where I try to keep
          motivated, learning, reading, and growing. My one goal becoming a high
          earning full stack serverless programmer....back with another one of
          those block rockin' beats...here we go.
        </p>
        <FontAwesomeIcon icon={["fab", "facebook"]} />
        <FontAwesomeIcon icon={["fab", "instagram"]} />
        <FontAwesomeIcon icon={["fab", "twitter"]} />
        <FontAwesomeIcon icon={["fab", "youtube"]} />
        <FontAwesomeIcon icon={["fab", "github"]} />
      </div>
    </div>
  );
}

export default Header;
