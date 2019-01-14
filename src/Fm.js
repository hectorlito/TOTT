import React from "react";

class FootballM extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      fm: []
    };
  }
  async componentDidMount() {
    try {
      const res = await fetch("https://top-back.herokuapp.com/api/fm/");
      const fm = await res.json();
      this.setState({
        isLoaded: true,
        fm
      });
    } catch (e) {
      console.log(e);
    }
  }

  // componentDidMount() {
  //   fetch("https://top-back.herokuapp.com/api/fm/")
  //     .then(res => res.json())
  //     .then(
  //       results => {
  //         this.setState({
  //           isLoaded: true,
  //           fm: results.fm
  //         });
  //       },
  //       error => {
  //         this.setState({
  //           isLoaded: true,
  //           error
  //         });
  //       }
  //     );
  // }

  render() {
    const { error, isLoaded, fm } = this.state;
    if (error) {
      return <div>Error</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          {fm.map(item => (
            <div key={item.id}>
              <h1>{item.challenge}</h1>
              <span>{item.writeup}</span>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default FootballM;
