import React from "react";
import UnitFeatBlogPost from "./UnitFeatBlogPost";
import "./HomeStyles.css";

function FeaturedBlogPost() {
  return (
    <div>
      <h4>Featured Stories</h4>
      <div className="row">
        <UnitFeatBlogPost />
        <UnitFeatBlogPost />
        <UnitFeatBlogPost />
        <UnitFeatBlogPost />
        <UnitFeatBlogPost />
        <UnitFeatBlogPost />
      </div>
    </div>
  );
}

export default FeaturedBlogPost;
