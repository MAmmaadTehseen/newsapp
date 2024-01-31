// import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
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
                  pageSize={9}
                  country={"us"}
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
                  pageSize={9}
                  country={"us"}
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
                  pageSize={9}
                  country={"us"}
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
                  pageSize={9}
                  country={"us"}
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
                  pageSize={9}
                  country={"us"}
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
                  pageSize={9}
                  country={"us"}
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
                  pageSize={9}
                  country={"us"}
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
