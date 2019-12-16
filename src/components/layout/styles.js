import styled, { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    white: "#ffffff",
    accent: "#fe5459",
    black: "#272831",
    blue: "#2d9cdb",
    green: "#27ae60",
    backgroundGray: "#FAFAFD",
    lightGray: "#d6d7e1",
    lightGray2: "#f4f4f9",
    titleColor: "#272831",
    textColor: "#9193a9"
  }
};

export const Padding = styled.div`
  padding: 0 4rem;
`;

export const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  margin            : 0;
  padding           : 0;
  box-sizing        : inherit;
}
html {
  font-size: 62.5%;
}
body {
  box-sizing        : border-box;
  position          : relative;
  font-weight: 400;
  line-height: 18px;

}
main {
min-height: 100vh;
display: flex;
flex-direction: column;
position: relative;
background-color: ${theme.colors.backgroundGray};
}
  p {
  font-size: 14px;
  }
  
  a {
text-decoration: none;
color: inherit;
border-bottom-style: none;
}
input:focus, textarea:focus, select:focus{
        outline: none;
    }
    input:required {
    box-shadow:none;
}
input:invalid {
    box-shadow: none;
}
`;
