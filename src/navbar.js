import React from "react";
import Home from "./Home.js";
import AboutUs from "./About.js";
import Blog from "./Blog.js";
import FootballM from "./Fm.js";

import { Route, Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <Link className="nav" to="/">
            Home
          </Link>
          <Link className="nav" to="/blog">
            Blog
          </Link>
          <Link className="nav" to="/fm">
            FM Challenge
          </Link>
          <Link className="nav" to="/about">
            About Us
          </Link>
        </nav>
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={AboutUs} />
          <Route path="/blog" component={Blog} />
          <Route path="/fm" component={FootballM} />
        </main>
      </div>
    );
  }
}

export default Navbar;
