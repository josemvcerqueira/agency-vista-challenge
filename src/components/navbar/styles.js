import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";

export const NavBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  width: 100%;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0 4px 10px rgba(39, 40, 49, 0.03);
  padding: 1rem 5.1rem;

  .marginRight {
    margin-right: 2rem;
  }

  .smallMarginTop {
    margin-top: 0.4rem;
  }
`;

export const OgilvyLogo = styled.img`
  width: 7.5rem;
  height: 3rem;
`;

export const BackArrow = styled(IoIosArrowBack)`
  color: ${props => props.theme.colors.lightGray};
  font-size: 2rem;
`;

export const NavText = styled.h2`
  font-size: 1.4rem;
  color: ${props => props.theme.colors.textColor};
  font-weight: 400;
`;

export const V = styled.h2`
  font-weight: 600;
  font-size: 2rem;
  color: ${props => props.theme.colors.accent};
  transform: ${props => (props.inverted ? "rotate(180deg)" : "rotate(0deg)")};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BackWrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-left: 3.2rem;
`;
