import React, { Suspense } from "react";
import { Switch, Route as Router, BrowserRouter } from "react-router-dom";
import { Footers } from "./components/Footers";
import { Headers } from "./components/Headers";
import { LoadingView } from "./components/LoadingView";
import { LandingPage } from "./page/LandingPage";
import { AboutPage } from "./page/AboutPage";
import { ProjectPage } from "./page/ProjectPage";
import { ContactPage } from "./page/ContactPage";
import { Seperator } from "./helper/lib";
import { KoreanLandingPage } from "./page/KoreanLandingPage";

const App = (): JSX.Element => {
  return (
    <>
      <Suspense
        fallback={
          <LoadingView title={"Loading ..."} body={"please wait a moment"} />
        }
      >
        <BrowserRouter>
          <Headers />
          <Seperator>
            <Switch>
              <Router exact path="/" component={LandingPage} />
              <Router exact path="/about" component={AboutPage} />
              <Router exact path="/project" component={ProjectPage} />
              <Router exact path="/contact" component={ContactPage} />
              <Router exact path="/kr" component={KoreanLandingPage} />
            </Switch>
          </Seperator>
          <Footers />
        </BrowserRouter>
      </Suspense>
    </>
  );
};

export default App;
