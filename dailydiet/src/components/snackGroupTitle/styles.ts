import styled from "styled-components/native";


export const Container = styled.View`
    margin-top: 24px;
    padding: 0px 24px;
`;

export const Text = styled.Text`
    font-size: ${({ theme }) => theme.SIZES.LG}px;
    color: ${({ theme }) => theme.COLORS.GRAY_1};
    font-family: ${({ theme }) => theme.FONTS.BOLD};
`;