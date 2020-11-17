import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import Header from "./components/Home/Header";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Home from "./components/Home";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

library.add(fab);

// function App() {
//   React.useEffect(() => {
//     let sidenav = document.querySelector(".sidenav");
//     M.Sidenav.init(sidenav, {});
//   });

//   return (
//     <div>
//       <Home />
//     </div>
//   );
// }

// export default App;

function App() {
  React.useEffect(() => {
    let sidenav = document.querySelector(".sidenav");
    M.Sidenav.init(sidenav, {});
  });
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="contactus" component={Contact} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
