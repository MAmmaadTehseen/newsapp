import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=b8f3a473627a4f358fbe9763afea78f7&page=1&pagesize=15";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }
  nextButton = async () => {
    console.log(Math.ceil(this.state.totalResults / 15));
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 15)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=b8f3a473627a4f358fbe9763afea78f7&page=${
        this.state.page + 1
      }&pagesize=15`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };
  prevbutton = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=b8f3a473627a4f358fbe9763afea78f7&page=${
      this.state.page - 1
    }&pagesize=15`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };

  constructor() {
    super();
    console.log("Hello I am a constructor from News component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>

        <div className="row m-3">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 " key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-primary "
            onClick={this.prevbutton}
            disabled={this.state.page <= 1}
          >
            <a href="#top" className="text-light">
              Previous
            </a>
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.nextButton}
          >
            <a href="#top" className="text-light">
              Next
            </a>
          </button>
        </div>
      </div>
    );
  }
}
export default News;
