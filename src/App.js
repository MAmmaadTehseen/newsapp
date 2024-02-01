// import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  pageSize = 5;
  apiKey = 'b8f3a473627a4f358fbe9763afea78f7';
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  key="general"
                  pageSize={this.pageSize}
                  country={"us"}
                  apiKey={this.apiKey}
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  key="sports"
                  pageSize={this.pageSize}
                  country={"us"}
                  apiKey={this.apiKey}
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/bussiness"
              element={
                <News
                  key="bussiness"
                  pageSize={this.pageSize}
                  country={"us"}
                  apiKey={this.apiKey}
                  category="bussiness"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  key="health"
                  pageSize={this.pageSize}
                  country={"us"}
                  apiKey={this.apiKey}
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  key="technology"
                  pageSize={this.pageSize}
                  country={"us"}
                  apiKey={this.apiKey}
                  category="technology"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize={this.pageSize}
                  country={"us"}
                  apiKey={this.apiKey}
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  key="science"
                  pageSize={this.pageSize}
                  country={"us"}
                  apiKey={this.apiKey}
                  category="science"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

// export default App;
