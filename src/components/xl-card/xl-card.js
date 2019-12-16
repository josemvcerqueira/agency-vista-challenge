import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";

import { Icon, CardTitle, CardSubtitle } from "../data/styles";
import { addLineBreaks, formatter } from "../../utils";
import { RedButton } from "../../elements";
import MONTHLY_DOUGHNUT_DATA from "../../constants/monthly-cost-doughnut-data";

import {
  XLCardWrapper,
  Divider,
  TextArea,
  DoughnutContainer,
  InfoBox,
  MonthlyText,
  DoughnutWrapper
} from "./style";

const MONTHLY_DATA = [
  { monthly: 500, percentage: 50 },
  { monthly: 1000, percentage: 20 },
  { monthly: 5000, percentage: 15 },
  { monthly: 20000, percentage: 15 }
];

export default () => {
  const [textAreaValue, setTextAreaValue] = useState("");
  return (
    <XLCardWrapper>
      <Icon src={require("../../assets/tag.png")} />
      <CardTitle>budgets and pricing</CardTitle>
      <CardSubtitle>
        {addLineBreaks(
          "Here's what budgets Ogilvy works with, as well as \n some additional" +
            "      pricing info you might like to know."
        )}
      </CardSubtitle>
      <Divider />
      <CardSubtitle>
        See monthly cost distributed across customers.
      </CardSubtitle>
      <DoughnutContainer>
        <InfoBox>
          {MONTHLY_DATA.map((obj, index, array) => {
            return (
              <MonthlyText
                key={obj.monthly}
                highlight={
                  Math.max(...array.map(obj => obj.percentage)) ===
                  obj.percentage
                }
              >
                {formatter.format(obj.monthly)}/mo
              </MonthlyText>
            );
          })}
        </InfoBox>
        <DoughnutWrapper>
          <Doughnut
            options={{
              tooltips: { enabled: false },
              hover: { mode: null },
              maintainAspectRatio: true,
              cutoutPercentage: 80,
              legend: {
                display: false
              },
              plugins: {
                datalabels: {
                  formatter: function() {
                    return null;
                  }
                }
              }
            }}
            data={MONTHLY_DOUGHNUT_DATA}
            height={136}
            width={136}
          />
        </DoughnutWrapper>
        <InfoBox>
          {MONTHLY_DATA.map((obj, index, array) => {
            return (
              <MonthlyText
                key={obj.monthly}
                highlight={
                  Math.max(...array.map(obj => obj.percentage)) ===
                  obj.percentage
                }
              >
                {obj.percentage}%
              </MonthlyText>
            );
          })}
        </InfoBox>
      </DoughnutContainer>
      <Divider />
      <Icon src={require("../../assets/chat-bubble.png")} />
      <CardSubtitle>
        Ogilvy is a great match for your business! Get in touch and feel free to
        ask any questions you might have.
      </CardSubtitle>
      <TextArea
        cols={30}
        rows={10}
        placeholder="Hello, I'm interested in working with you on our social campaigns..."
        value={textAreaValue}
        onChange={event => setTextAreaValue(event.target.value)}
      />
      <RedButton onClick={() => {}} text="Contact Ogilvy" />
    </XLCardWrapper>
  );
};
