import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  article = [
    {
      source: {
        id: "bbc-sport",
        name: "BBC Sport",
      },
      author: null,
      title: "Pick your 2023 women's cricket team of the year",
      description:
        "Pick your women's team of the year across all three formats from a shortlist of 22 players.",
      url: "http://www.bbc.co.uk/sport/cricket/67750247",
      urlToImage:
        "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/CA60/production/_132080815_bbc-sport-index-imagery-3-split-images-gradient-8c6d2573-0ddb-4a5e-b41b-8de6c22d7ea0.png",
      publishedAt: "2023-12-28T18:07:27.9876708Z",
      content:
        "Chamari Athapathu (left), Nat Sciver-Brunt (middle) and Ellyse Perry (right) have been among the stars of women's cricket in 2023\r\nIt has been a landmark year for women's international cricket.\r\nAust… [+618 chars]",
    },
    {
      source: {
        id: "news-com-au",
        name: "News.com.au",
      },
      author: "Matthew Sullivan",
      title: "Image is everything wrong with Test cricket",
      description: "It’s just not Test cricket.",
      url: "https://www.news.com.au/sport/cricket/seriously-cricket-legends-blast-ridiculous-scenes-as-pakistan-halt-test/news-story/b181977196b83fbb2de9ca7bbd9d0f2b",
      urlToImage:
        "https://content.api.news/v3/images/bin/c43549c04ac74e995fd2b72939e1ba02",
      publishedAt: "2023-12-28T12:02:00Z",
      content:
        "It’s just not Test cricket.\r\nLegends of the game couldn’t believe their eyes when play stopped on Day 3 of the Boxing Day Test between Australia and Pakistan for a bizarre reason.\r\nPakistan’s tail wa… [+2532 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
  ];
  constructor() {
    super();
    console.log("Hello I am a constructor from News component");
    this.state = {
      articles: this.article,
      loading: false,
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
                  title={element.title.slice(0, 45)}
                  description={element.description.slice(0, 88)}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default News;
