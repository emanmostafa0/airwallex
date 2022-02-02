import styled from "styled-components";

export const StyledLabel = styled.label`
    text-align: left;
    font-size: 14px;
    font-weight: 700;
    color: #425468;
`;

export const StyledInput = styled.input`
    width: 100%;
    margin-top: 10px;
    padding: 12px 20px;
    margin: 8px 0;
    display: block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    &:hover {
        background-color: #0000;
    }
`;

export const StyledInputContainer = styled.div`
    margin-bottom: 12px;
`;

export const StyledValidationError = styled.span`
    color: red;
    font-weight: normal;
    font-size: 14px;
    margin-top: 3px;
    margin-bottom: 5px;
    white-space: pre-wrap;
`;
