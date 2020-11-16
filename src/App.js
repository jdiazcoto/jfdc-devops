import React from "react";
import Navbar from "./components/Navbar";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import Header from "./components/Home/Header";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import FeaturedBlogPost from "./components/Home/FeaturedBlogPost";

library.add(fab);

function App() {
  React.useEffect(() => {
    let sidenav = document.querySelector(".sidenav");
    M.Sidenav.init(sidenav, {});
  });

  return (
    <div>
      <Navbar />
      <Header />
      <FeaturedBlogPost />
    </div>
  );
}

export default App;
