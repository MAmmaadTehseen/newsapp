import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, publishedAt, source } =
      this.props;
    return (
      <div className="m-4">
        <div className="card">
          <img
            src={
              !imageUrl ? "https://images.wsj.net/im-901282/social" : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description ? description : "Description not avaliable"}....
            </p>
            <p className="card-text">
              <small className="text-success">
                Published by {author ? author : "unknown"} at {publishedAt}
              </small>
            </p>
            <p className="card-text m-2">
              <small className="text-warning  ">source:"{source}"</small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-sm"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
