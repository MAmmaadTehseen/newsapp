import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div>
        <div className="row m-5">
          <div className="col md-3">
            <NewsItem />
          </div>
          <div className="col md-3">
            <NewsItem />
          </div>
          <div className="col md-3">
            <NewsItem />
          </div>
        </div>
        <div className="row m-5">
          <div className="col  ">
            <NewsItem />
          </div>
          <div className="col ">
            <NewsItem />
          </div>
          <div className="col ">
            <NewsItem />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
