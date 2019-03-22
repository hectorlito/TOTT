import React from "react";
import Contact from "./ContactUs.js";
class AboutUs extends React.Component {
  render() {
    return (
      <div>
        <h1> Hector ali Guevara </h1>
        <h4>Creative Director/Founder</h4>
        <p>
          Huge football fanatic, created this site as a way of getting all my
          news source on one page. Now I just love sharing everything I have
          learned. Check out the FM Challenge as well and if you would like to
          participate in one let me know!
        </p>
        <Contact />
      </div>
    );
  }
}

export default AboutUs;
