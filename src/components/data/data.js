import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import "chartjs-plugin-datalabels";

import CARD_DATA from "../../constants/card-data";
import ACCOUNT_SIZES_CARD from "../../constants/account-sizes-card";
import CARD_DOUGHNUT_DATA from "../../constants/card-doughnut-data";
import NETWORK_DOUGHNUT_DATA from "../../constants/network-doughnut-data";

import CommentCard from "../comment-card/comment-card";
import { ProgressBar } from "../../elements";
import { addLineBreaks } from "../../utils";

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
  BarDescription,
  BarContent
} from "./styles";

export const Bar = ({ value, name, total }) => (
  <div>
    <ProgressBar percentage={value} />
    <BarContent>
      <BarDescription value={value}>{name}</BarDescription>
      <BarDescription value={value}>
        {total ? total : `${value}%`}
      </BarDescription>
    </BarContent>
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

const CardWithDoughnut = ({ img, title, subtitle, card }) => (
  <CardWrapper>
    <Icon src={img} />
    <CardTitle>{title}</CardTitle>
    <CardSubtitle>{addLineBreaks(subtitle)}</CardSubtitle>
    <div>
      <Doughnut
        options={{
          tooltips: { enabled: false },
          hover: { mode: null },
          maintainAspectRatio: true,
          cutoutPercentage: 92,
          layout: {
            padding: {
              top: 20,
              right: 105,
              left: 100
            }
          },
          plugins: {
            datalabels: {
              enabled: true,
              color: "#FD5359",
              anchor: "end",
              align: "end",
              offset: 20,
              labels: {
                color: "#FD5359"
              },
              formatter: function(value, context) {
                return `${context.dataset.labels[context.dataIndex]} ${value}%`;
              }
            }
          }
        }}
        data={NETWORK_DOUGHNUT_DATA}
        height={400}
        width={400}
      />
    </div>
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

export const NetwotkAndAccountSizesCards = () => (
  <DataWrapper>
    <CardContainer>
      <CardWithDoughnut {...CARD_DOUGHNUT_DATA} />
      <Card {...ACCOUNT_SIZES_CARD} />
    </CardContainer>
  </DataWrapper>
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
