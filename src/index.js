import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

import HomePage from "./home-page";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <CSSReset />
      <HomePage />
    </ThemeProvider>
  </React.StrictMode>,
  rootElement
);
