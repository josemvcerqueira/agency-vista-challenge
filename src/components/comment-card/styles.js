import styled from "styled-components";

import { StarSVG } from "../../elements";
import { hexToRGB } from "../../utils";

export const CommentCardWrapper = styled.div`
  position: relative;
  height: 8rem;
  width: 54rem;
  padding: 2rem 2.5rem;
  background-color: ${props => hexToRGB(props.color, 0.05)};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const CommentCardTitle = styled.h4`
  font-size: 1.6rem;
  line-height: 2.1rem;
  color: ${props => props.color};
  font-weight: 600;
`;

export const CommentCardDescription = styled.p`
  color: ${props => props.theme.colors.textColor};
  font-size: 1.4rem;
  line-height: 1.8rem;
  margin-top: 0.5rem;
`;

export const BorderLeft = styled.div`
  background-color: ${props => props.color};
  opacity: 0.6;
  border-radius: 3px;
  height: 100%;
  width: 0.5rem;
  position: absolute;
  left: -5px;
`;

export const StarWrapper = styled.div`
  margin-right: 1.7rem;
  width: 1.6rem;
  height: 2rem;
  justify-content: flex-start;
`;

export const Star = styled(StarSVG)`
  width: 1.6rem;
  height: 2rem;
  fill: ${props => props.color} !important;
`;
