import { styled } from "styled-components/native";

type ContainerProps = {
    hasBackground: boolean;
}

export const ButtonContainer = styled.TouchableOpacity<ContainerProps>`
    ${({ hasBackground, theme }) => hasBackground ? `
        background-color: ${theme.COLORS.GRAY_1};
    ` : `
        border: 1px solid ${theme.COLORS.GRAY_1};
    `}
    padding: 16px;
    border-radius: 8px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 10px 0px;
    gap: 8px;
`;

type TitleProps = {
    hasBackground: boolean;
}

export const Title = styled.Text<TitleProps>`
    font-family: ${({ theme }) => theme.FONTS.BOLD};
    font-size: ${({ theme }) => theme.SIZES.LG}px;
    color: ${({ theme,hasBackground }) => hasBackground ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
`;