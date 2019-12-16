import styled from "styled-components";

export const BigCardWrapper = styled.article`
  width: 100%;
  height: 82rem;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0 4px 10px rgba(39, 40, 49, 0.03);
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2.8rem 2rem;

  .smallMarginBottom {
    margin-bottom: 2rem;
  }
`;

export const Content = styled.div`
  height: 46rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Box = styled.div`
  width: 50%;
  height: 85%;
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.left ? "flex-start" : "flex-end")};
  justify-content: space-between;
`;

export const WorldMap = styled.img``;

export const BigCardFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
