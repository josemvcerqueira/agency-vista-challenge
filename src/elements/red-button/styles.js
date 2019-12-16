import styled from "styled-components";

export const RedButtonWrapper = styled.button`
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.accent};
  border-radius: 2px;
  height: 3rem;
  width: 12.8rem;
  text-align: center;
  font-size: 1.4rem;
  line-height: 1.8rem;
  border: none;
  cursor: pointer;
`;
