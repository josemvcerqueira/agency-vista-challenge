import React from "react";

import { RedButton } from "../../elements";

import {
  HeaderWrapper,
  LargeLogo,
  ContentWrapper,
  Title,
  Text
} from "./styles";

const Content = () => (
  <ContentWrapper>
    <Title>ogilvy</Title>
    <Text>10 years · New York</Text>
    <Text>
      In the beginning, there was one Ogilvy, the company founded by David
      Ogilvy in 1948. Today, there is again one Ogilvy, in 83 countries and 132
      offices. We are one doorway to a creative network, re-founded to make
      brands matter in a complex, noisy, hyper-connected world.
    </Text>
  </ContentWrapper>
);

export default () => (
  <HeaderWrapper>
    <LargeLogo
      src={require("../../assets/large-logo.png")}
      alt="Ogilvy large logo"
    />
    <Content />
    <RedButton onClick={() => alert("clicked")} text="Contact Ogilvy" />
  </HeaderWrapper>
);
