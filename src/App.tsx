import React, { Suspense, lazy } from "react";
import { Switch, Route as Router, BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

const LandingPage = lazy(() =>
  import("./components/LandingPage/LandingPage").then(({ LandingPage }) => ({
    default: LandingPage,
  }))
);

const ContactPage = lazy(() =>
  import("./components/ContactPage/ContactPage").then(({ ContactPage }) => ({
    default: ContactPage,
  }))
);

const ProfilePage = lazy(() =>
  import("./components/ProfilePage/ProfilePage").then(({ ProfilePage }) => ({
    default: ProfilePage,
  }))
);

const WorkPage = lazy(() =>
  import("./components/WorkPage/WorkPage").then(({ WorkPage }) => ({
    default: WorkPage,
  }))
);

const ErrorPage = lazy(() =>
  import("./components/ErrorPage/ErrorPage").then(({ ErrorPage }) => ({
    default: ErrorPage,
  }))
);

const App = (): JSX.Element => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Router exact path="/" component={LandingPage} />
            <Router exact path="/profile" component={ProfilePage} />
            <Router exact path="/work" component={WorkPage} />
            <Router exact path="/contact" component={ContactPage} />
            <Router path="*" component={ErrorPage} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </>
  );
};

export default App;
