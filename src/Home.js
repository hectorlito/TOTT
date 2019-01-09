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
      return <div>Error</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <ul>
            {articles.map(articles => (
              <li key={articles.title}>
                <div className="link">
                  <a href={articles.url}>
                    <img src={articles.urlToImage} alt="images" />
                  </a>
                </div>
                <div>
                  <a href={articles.url}>{articles.title}</a>
                </div>
                <p>{articles.description}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default Home;
