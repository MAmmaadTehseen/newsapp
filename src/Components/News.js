import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setotalResult] = useState(0);


  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}&category=${props.category}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();

    setArticles(parsedData.articles);
    setotalResult(parsedData.totalResults);
    setLoading(false);
    document.title = `${capitalizeFirstLetter(props.category)}-News`;

  }
  useEffect(() => {
    return () => {
      updateNews();
      setPage(page + 1)

    };
  }, []
  );

  const fetchMoreData = async () => {
    console.log(`fuction${page}`);

    setPage(page + 1);

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}&category=${props.category}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    setArticles(articles.concat(parsedData.articles));
    setotalResult(parsedData.totalResults);
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }




  return (
    <div className="container my-3 text-center">
      <h2>NewsMonkey - Top Headlines from {props.category}</h2>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="row m-3">
          {articles.map((element) => {
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
                  author={element.author}
                  publishedAt={new Date(element.publishedAt).toUTCString()}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );

}
export default News;
