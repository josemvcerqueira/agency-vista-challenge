import React from "react";

import UserImage from "../../assets/user.png";
import { ProfileImage, RedButton } from "../../elements";

import {
  NavBarWrapper,
  OgilvyLogo,
  BackArrow,
  NavText,
  V,
  Container,
  BackWrapper
} from "./styles";

const Back = () => (
  <BackWrapper>
    <BackArrow />
    <NavText>Back To Results</NavText>
  </BackWrapper>
);

const LeftContainer = () => (
  <Container>
    <V>V</V>
    <V inverted className="smallMarginTop">
      V
    </V>
    <Back />
  </Container>
);

const RightContainer = () => (
  <Container>
    <RedButton
      className="marginRight"
      onClick={() => alert("clicked")}
      text="Contact Ogilvy"
    />
    <ProfileImage img={UserImage} alt="user name" />
  </Container>
);

export default () => (
  <NavBarWrapper>
    <LeftContainer />
    <OgilvyLogo
      src={require("../../assets/small-logo.png")}
      alt="Ogilvy Logo"
    />
    <RightContainer />
  </NavBarWrapper>
);
