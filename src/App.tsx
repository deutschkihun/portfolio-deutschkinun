import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Footers } from "./components/Footers";
import { Header } from "./components/Header";
import { LoadingView } from "./components/LoadingView";
import { GlobalStyle, Seperator } from "./helper/lib/Global";
import { Home } from "./page/Home";
import { Project } from "./page/Project";
import { Contact } from "./page/Contact";
import { About } from "./page/About";
import enUsMsg from "./locale/en-US.json";
import koMsg from "./locale/ko.json";
import { IntlProvider } from "react-intl";

const locale = localStorage.getItem("locale") ?? "ko";
const messages = { "en-US": enUsMsg, ko: koMsg }[locale];

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Suspense
        fallback={
          <LoadingView title={"Loading ..."} body={"please wait a moment"} />
        }
      >
        <BrowserRouter>
          <IntlProvider locale={locale} messages={messages}>
            <Header />
            <Seperator>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project" element={<Project />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </Seperator>
            <Footers />
          </IntlProvider>
        </BrowserRouter>
      </Suspense>
    </>
  );
}
