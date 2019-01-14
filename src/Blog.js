import React from "react";

class Blog extends React.Component {
  state = {
    blog: []
  };

  async componentDidMount() {
    try {
      const res = await fetch("https://top-back.herokuapp.com/api/blog");
      const blog = await res.json();
      this.setState({
        blog
      });
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    return (
      <div>
        {this.state.blog.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <span>{item.description}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default Blog;
