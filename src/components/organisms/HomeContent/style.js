import styled from "styled-components";
import { Theme } from "../../../style";



export const StyledHomeContent = styled.div`
  text-align: center;
  font-style: italic;
  color: #425468;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StyledContentTitle = styled.h1`
    color: #425468;
    margin: 10px 20px;
    font-size: 35px;
    font-weight: 700;
    @media (max-width: ${Theme.screenSize.mobileMax}) {
      font-size: 25px;
      font-weight: 550;
    }
`;

export const StyledContentSubTitle = styled.h3`
    color: #425468;
    font-size: 25px;
    margin: 10px 20px 20px 20px;
    font-weight: 540;

    @media (max-width: ${Theme.screenSize.mobileMax}) {
      font-size: 20px;
      font-weight: 400;
  }
`;