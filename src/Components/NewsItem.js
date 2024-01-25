import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
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
            <h5 className="card-title">{title}....</h5>
            <p className="card-text">
              {description ? description : "Description not avaliable"}....
            </p>
            <a
              href={newsUrl}
              target="_blank"
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
