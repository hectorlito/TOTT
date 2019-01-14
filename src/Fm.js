import React from "react";

class FootballM extends React.Component {
  state = {
    fm: []
  };

  async componentDidMount() {
    try {
      const res = await fetch("https://top-back.herokuapp.com/api/fm/");
      const fm = await res.json();
      this.setState({
        fm
      });
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    return (
      <div>
        <h1>hi</h1>
        {this.state.fm.map(item => (
          <div key={item.id}>
            <h1>{item.challenge}</h1>
            <span>{item.writeup}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default FootballM;
