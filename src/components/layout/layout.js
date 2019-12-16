import React from "react";
import { ThemeProvider } from "styled-components";

import { theme, GlobalStyle, Padding } from "./styles";

import Navbar from "../navbar/navbar";

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <main>
      <Navbar />
      <Padding>{children}</Padding>
      <GlobalStyle />
    </main>
  </ThemeProvider>
);
