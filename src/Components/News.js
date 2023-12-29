import React, { Component } from "react";
import NewsComponent from "./NewsComponent";

export class News extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col md-3">
            <NewsComponent />
          </div>
          <div className="col md-3">
            <NewsComponent />
          </div>
          <div className="col md-3">
            <NewsComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
