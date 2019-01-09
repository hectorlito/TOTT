import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <h3>Contact us!</h3>
        <form method="POST" action="https://formspree.io/hguevara.hg@gmail.com">
          <input type="email" name="email" placeholder="Your email" />
          <div>
            <textarea
              name="message"
              placeholder="We would love to hear from you!"
            />
          </div>
          <button type="submit">Send Test</button>
        </form>
      </div>
    );
  }
}

export default Contact;
