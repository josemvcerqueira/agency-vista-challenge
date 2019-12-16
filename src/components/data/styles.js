import styled from "styled-components";

export const DataWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  div:not(:last-child) {
    margin-right: 3rem;
  }
`;

export const OptionWrapper = styled.div`
  padding-bottom: 0.7rem;
  color: ${props =>
    props.selected ? props.theme.colors.accent : props.theme.colors.textColor};
  border-bottom: ${props => (props.selected ? "2px solid #FD5359" : "none")};
  cursor: pointer;
`;

export const MenuOption = styled.h1`
  color: inherit;
  text-align: center;
  line-height: 2rem;
  text-transform: capitalize;
  font-weight: 400;
`;

export const CardContainer = styled.div`
  padding: 4rem 0 3rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const CardWrapper = styled.article`
  background-color: ${props => props.theme.colors.white};
  width: 58rem;
  height: 65rem;
  box-shadow: 0 4px 10px rgba(39, 40, 49, 0.03);
  border-radius: 2px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Icon = styled.img`
  width: auto;
  height: 5.5rem;
`;

export const CardTitle = styled.h2`
  text-transform: uppercase;
  font-size: 1.6rem;
  line-height: 2rem;
  text-align: center;
  color: ${props => props.theme.colors.black};
  font-weight: 400;
`;

export const CardSubtitle = styled.h3`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.8rem;
  text-align: center;
  color: ${props => props.theme.colors.textColor};
  max-width: 40.3rem;
`;

export const BarContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BarDescription = styled.h3`
  margin-top: 1.5rem;
  color: ${props => (props.value ? "#fd5359" : props.theme.colors.lightGray)};
  font-size: 1.6rem;
  line-height: 2rem;
  text-align: left;
  font-weight: 400;
`;
