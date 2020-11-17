import React from "react";
import Navbar from "./Navbar";
import Header from "../components/Home/Header";
import FeaturedBlogPost from "../components/Home/FeaturedBlogPost";
import LatestBlogPost from "../components/Home/LatestBlogPost";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <FeaturedBlogPost />
      <LatestBlogPost />
    </div>
  );
}

export default Home;
