import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    /* height: 65px; */
    margin-top: 10px;

`;

export const TextInput = styled.TextInput`
    height: 65px; ;
    padding: 20px;

    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_4}; 
    border-radius: 8px;
    margin: 5px;
`;