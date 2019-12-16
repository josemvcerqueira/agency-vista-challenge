import styled from "styled-components";

export const Tracker = styled.div`
  width: 54rem;
  height: 0.6rem;
  border-radius: 3px;
  background-color: ${props => props.theme.colors.lightGray2};
`;

export const ProgressInTracker = styled.div`
  height: 100%;
  width: ${props => props.percentage}%;
  background-color: #fd5359;
  border-radius: 3px;
`;
