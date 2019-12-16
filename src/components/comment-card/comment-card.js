import React from "react";

import {
  CommentCardWrapper,
  CommentCardTitle,
  CommentCardDescription,
  Star,
  BorderLeft,
  ContentContainer,
  StarWrapper
} from "./styles";

export default ({ color, star, border, title, description }) => (
  <CommentCardWrapper border={border}>
    {border && <BorderLeft />}
    {star && (
      <StarWrapper>
        <Star color={color} src={require("../../assets/star.svg")} />
      </StarWrapper>
    )}
    <ContentContainer>
      <CommentCardTitle>{title}</CommentCardTitle>
      <CommentCardDescription>{description}</CommentCardDescription>
    </ContentContainer>
  </CommentCardWrapper>
);
