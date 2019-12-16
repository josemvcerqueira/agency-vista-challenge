import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 62.2rem;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.backgroundGray};
`;

export const LargeLogo = styled.img`
  margin-top: 15.9rem;
  width: 18rem;
  height: 7.2rem;
`;

export const ContentWrapper = styled.article`
  width: 45.8rem;
  height: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  line-height: 2.5rem;
  text-align: center;
  color: ${props => props.theme.colors.black};
  text-transform: capitalize;
`;

export const Text = styled.h2`
  font-size: 1.4rem;
  color: ${props => props.theme.colors.textColor};
  line-height: 1.8rem;
  font-weight: 400;
  text-align: center;
`;
