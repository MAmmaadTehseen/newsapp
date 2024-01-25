import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=b8f3a473627a4f358fbe9763afea78f7&page=1&pagesize=${this.props.pageSize}&category=${this.props.category}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  nextButton = async () => {
    console.log(Math.ceil(this.state.totalResults / this.props.pageSize));

    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&apiKey=b8f3a473627a4f358fbe9763afea78f7&page=${
      this.state.page + 1
    }&pagesize=${this.props.pageSize}&category=${this.props.category}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false,
    });
  };
  prevbutton = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&apiKey=b8f3a473627a4f358fbe9763afea78f7&page=${
      this.state.page - 1
    }&pagesize=${this.props.pageSize}&category=${this.props.category}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
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
      <div className="container my-3 text-center">
        <h2>NewsMonkey - Top Headlines</h2>
        {this.state.loading && <Spinner />}

        <div className="row m-3">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4 " key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageUrl={
                      !element.urlToImage
                        ? "https://images.wsj.net/im-901282/social"
                        : element.urlToImage
                    }
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
            Previous
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.nextButton}
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
export default News;
