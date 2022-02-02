import styled from "styled-components";
import { Theme } from "../../../style";


export const StyledHeader = styled.div`
    background: #34495e;
    color: #fff;
    padding: 20px 0;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
`;

export const StyledLogo = styled.img`
    width: 100px;
    height: 100px;
`;

export const StyledAppTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;


export const StyledAppName = styled.h1`
    font-family: auto;
    color: #ffff;
    margin-left: 20px;

    @media (max-width: ${Theme.screenSize.mobileMax}) {
        margin-left: 10px;
        font-size: 25px;
        font-weight: 550;
    }

    @media (max-width: ${Theme.screenSize.smallMobile}) {
        font-size: 20px;
        font-weight: 550;
    }
   
   
`;