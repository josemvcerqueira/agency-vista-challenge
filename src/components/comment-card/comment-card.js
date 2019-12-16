import React from "react";

import { StarSVG } from "../../elements";

import {
  CommentCardWrapper,
  CommentCardTitle,
  CommentCardDescription,
  BorderLeft,
  ContentContainer,
  StarWrapper
} from "./styles";

export default ({ color, star, border, title, description }) => (
  <CommentCardWrapper color={color} border={border}>
    {border && <BorderLeft color={color} />}
    {star && (
      <StarWrapper>
        <StarSVG fill={color} width="1.6rem" height="2rem" />
      </StarWrapper>
    )}
    <ContentContainer>
      <CommentCardTitle color={color}>{title}</CommentCardTitle>
      <CommentCardDescription>{description}</CommentCardDescription>
    </ContentContainer>
  </CommentCardWrapper>
);
