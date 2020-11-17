import React from "react";
import UnitFeatBlogPost from "./UnitFeatBlogPost";

function FeaturedBlogPost() {
  return (
    <div>
      <h4>Featured Blog Posts</h4>
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
