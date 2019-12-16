import React from "react";

import { Icon, CardTitle, CardSubtitle } from "../data/styles";
import { addLineBreaks } from "../../utils";
import BigCardData, { BigCardFooterData } from "../../constants/big-card-data";
import { Bar } from "../data/data";
import CommentCard from "../comment-card/comment-card";

import {
  BigCardWrapper,
  Content,
  Box,
  WorldMap,
  BigCardFooter
} from "./styles";

export default () => (
  <BigCardWrapper>
    <Icon src={require("../../assets/chat-bubble.png")} />
    <CardTitle>client locations</CardTitle>
    <CardSubtitle className="smallMarginBottom">
      {addLineBreaks(
        "Check out where Ogilvy's clients\n are based thorough the world."
      )}
    </CardSubtitle>
    <Content>
      <Box left>
        {BigCardData.map(barInfo => (
          <Bar key={barInfo.name} {...barInfo} />
        ))}
      </Box>
      <Box>
        <div>
          <WorldMap src={require("../../assets/world-map.svg")} />
        </div>
      </Box>
    </Content>
    <BigCardFooter>
      <CommentCard {...BigCardFooterData} />
    </BigCardFooter>
  </BigCardWrapper>
);
