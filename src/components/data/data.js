import React, { useState, useEffect } from "react";

import CARD_DATA from "../../constants/card-data";
import CommentCard from "../comment-card/comment-card";
import { ProgressBar } from "../../elements";

import {
  DataWrapper,
  MenuWrapper,
  MenuOption,
  OptionWrapper,
  CardWrapper,
  CardContainer,
  Icon,
  CardTitle,
  CardSubtitle,
  BarDescription
} from "./styles";

const addLineBreaks = string =>
  string.split("\n").map((text, index) => (
    <React.Fragment key={`${text}-${index}`}>
      {text}
      <br />
    </React.Fragment>
  ));

const Bar = ({ value, name }) => (
  <div>
    <ProgressBar percentage={value} />
    <BarDescription>{name}</BarDescription>
  </div>
);

const Card = ({ img, title, subtitle, expertise, card }) => (
  <CardWrapper>
    <Icon src={img} />
    <CardTitle>{title}</CardTitle>
    <CardSubtitle>{addLineBreaks(subtitle)}</CardSubtitle>
    {expertise.map(barInfo => (
      <Bar key={barInfo.name} {...barInfo} />
    ))}
    <CommentCard {...card} />
  </CardWrapper>
);

const Cards = () => (
  <CardContainer>
    {CARD_DATA.map(card => (
      <Card key={card.title} {...card} />
    ))}
  </CardContainer>
);

const INITIAL_STATE = {
  summary: false,
  performance: false,
  portfolio: false,
  reviews: false,
  latest: false
};

const MENU_DATA = ["summary", "performance", "portfolio", "reviews", "latest"];

const Menu = () => {
  const [options, setOption] = useState(INITIAL_STATE);

  useEffect(() => {
    setOption(() => ({ ...INITIAL_STATE, summary: true }));
  }, []);

  const handleClick = option =>
    setOption(() => ({ ...INITIAL_STATE, [option]: true }));

  return (
    <MenuWrapper>
      {MENU_DATA.map(option => (
        <OptionWrapper
          key={option}
          selected={options[option]}
          onClick={() => handleClick(option)}
        >
          <MenuOption>{option}</MenuOption>
        </OptionWrapper>
      ))}
    </MenuWrapper>
  );
};

export default () => (
  <DataWrapper>
    <Menu />
    <Cards />
  </DataWrapper>
);
