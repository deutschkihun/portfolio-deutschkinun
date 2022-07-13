import React, { Suspense, useEffect } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Footers } from "./components/Footers";
import { Header } from "./components/Header";
import { LoadingView } from "./components/LoadingView";
import { GlobalStyle } from "./helper/lib/Global";
import { Home } from "./page/Home";
import { Project } from "./page/Project";
import { Contact } from "./page/Contact";
import { About } from "./page/About";
import en from "./lang/en.json";
import kr from "./lang/kr.json";
import { IntlProvider } from "react-intl";
import { Content, Main } from "./helper/lib/Component";

const locale = localStorage.getItem("locale") ?? "kr";
const messages = { en: en, kr: kr }[locale];

export default function App() {
  useEffect(() => {
    localStorage.getItem("mode") ?? localStorage.setItem("mode", "dark-mode");
  }, []);

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
            <Main>
              <Header />
              <Content>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/project" element={<Project />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/*" element={<Navigate to="/" />} />
                </Routes>
              </Content>
              <Footers />
            </Main>
          </IntlProvider>
        </BrowserRouter>
      </Suspense>
    </>
  );
}
