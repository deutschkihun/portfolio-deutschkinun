import React, { Suspense } from "react";
import { Switch, Route as Router, BrowserRouter } from "react-router-dom";
import ContactPage from "./components/ContactPage/ContactPage";
import LandingPage from "./components/LandingPage/LandingPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import WorkPage from "./components/WorkPage/WorkPage";

const App = (): JSX.Element => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {/*<NavBar />*/}
        <BrowserRouter>
          <Switch>
            <Router exact path="/" component={LandingPage} />
            <Router exact path="/profile" component={ProfilePage} />
            <Router exact path="/work" component={WorkPage} />
            <Router exact path="/contact" component={ContactPage} />
          </Switch>
        </BrowserRouter>
        {/*<footer />*/}
      </Suspense>
    </>
  );
};

export default App;
