// import logo from "./logo.svg";
import "./App.css";

import React from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const pageSize = 5;
  const apiKey = 'b8f3a473627a4f358fbe9763afea78f7'

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
                pageSize={pageSize}
                country={"us"}
                apiKey={apiKey}
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
                pageSize={pageSize}
                country={"us"}
                apiKey={~apiKey}
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
                pageSize={pageSize}
                country={"us"}
                apiKey={apiKey}
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
                pageSize={pageSize}
                country={"us"}
                apiKey={apiKey}
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
                pageSize={pageSize}
                country={"us"}
                apiKey={apiKey}
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
                pageSize={pageSize}
                country={"us"}
                apiKey={apiKey}
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
                pageSize={pageSize}
                country={"us"}
                apiKey={apiKey}
                category="science"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );

}

export default App;
