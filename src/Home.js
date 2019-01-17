import React from "react";
import "./Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      articles: []
    };
  }

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/top-headlines?sources=four-four-two&apiKey=1b556ca91fed4a389866f06f9ae893cb"
    )
      .then(res => res.json())
      .then(
        results => {
          this.setState({
            isLoaded: true,
            articles: results.articles
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, articles } = this.state;
    if (error) {
      return <div> Error </div>;
    } else if (!isLoaded) {
      return <div> Loading... </div>;
    } else {
      return (
        <div>
          <h2 className="leaguename">Premier League</h2>
          <hr className="style-two" />
          <div className="container">
            {articles.map(articles => (
              <ul>
                <li className="items" key={articles.title}>
                  <div className="link">
                    <a href={articles.url}>
                      <img
                        className="storyphoto"
                        src={articles.urlToImage}
                        alt="images"
                      />
                    </a>
                    <a href={articles.url}> {articles.title} </a>
                    <p> {articles.description} </p>
                  </div>
                </li>
              </ul>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default Home;
