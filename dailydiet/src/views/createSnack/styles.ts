import { styled } from "styled-components/native";


export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_4};
    /* display: "relative"; */
`;

export const Form = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    /* margin-bottom: -30px; */
    border-radius: 24px 24px 24px 24px;
    padding: 24px;

`;

export const DateTimeGroup = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 12px;
    /* flex: 1;
    width: 100%;  */
`;
