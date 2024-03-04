import { styled } from "styled-components/native";


export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_4};
`;

export const Form = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 24px 24px 24px 24px;
    padding: 24px;

`;

export const InputGroup = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 12px;
`;

export const Footer = styled.View`
    flex: 1;
    justify-content: flex-end;
`;
