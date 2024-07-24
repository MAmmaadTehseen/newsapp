import React from "react";
import Model from "./model";
const NewsItem = (props) => {
  // const HTTP = "https://api.pawan.krd/v1/chat/completions"
  let { title, description, imageUrl, newsUrl, author, publishedAt, source } =
    props;
  // const [prompt, setPrompt] = useState(author)

  // const handlePrompt = () => {
  //   axios.post(`${HTTP}`, { prompt }).then((res) => console.log(res)).catch((error) => { console.log(error) })
  // }


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
          {/* <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-sm"
          >
            Read More
          </a> */}
          <Model title={title} />
        </div>
        {/* <Popover content={response ? response : "Loading!!!"} title="FeedBack" trigger="click">
          <Button onClick={getData}>Get More Info</Button>
        </Popover> */}
        {/* <button onClick={getData}>AI</button> */}
      </div>
    </div>
  );

}

export default NewsItem;
