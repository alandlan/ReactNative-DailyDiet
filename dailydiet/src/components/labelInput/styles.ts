import styled from "styled-components/native";

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.BOLD};
    font-size: ${({ theme }) => theme.SIZES.MD}px;
    color: ${({ theme }) => theme.COLORS.GRAY_1};
`;