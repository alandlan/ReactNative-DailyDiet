import { styled } from "styled-components/native";

export const ButtonContainer = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.COLORS.GRAY_1};
    padding: 16px;
    border-radius: 8px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 10px 24px;
    gap: 8px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.BOLD};
    font-size: ${({ theme }) => theme.SIZES.LG}px;
    color: ${({ theme }) => theme.COLORS.WHITE};
`;