import styled from "styled-components";

export const XLCardWrapper = styled.article`
  background-color: ${props => props.theme.colors.white};
  min-width: 120rem;
  width: 100%;
  height: 108rem;
  padding-top: 3.7rem;
  padding-bottom: 6.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 2px;
  box-shadow: 0 4px 10px rgba(39, 40, 49, 0.03);
`;

export const Divider = styled.hr`
  background-color: #e9eaf1;
  width: 20rem;
`;

export const DoughnutContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 23rem;

  padding: 4rem 0;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const DoughnutWrapper = styled.div`
  margin: 0 11rem;
`;

export const TextArea = styled.textarea`
  width: 60rem;
  height: 25rem;
  resize: none;
  border-radius: 3px;
  border: 1px solid ${props => props.theme.colors.lightGray};
  padding: 2rem;
  font-family: inherit;
  font-size: 16px;
  line-height: 150%;
  color: ${props => props.theme.colors.textColor};
  &::placeholder {
    color: ${props => props.theme.colors.lightGray};
  }
`;

export const MonthlyText = styled.h3`
  font-size: 1.4rem;
  line-height: 1.8rem;
  text-align: right;
  color: ${props =>
    props.highlight ? props.theme.colors.accent : props.theme.colors.textColor};
  font-weight: 400;
`;
