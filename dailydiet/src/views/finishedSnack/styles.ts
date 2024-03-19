import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Content = styled.View`
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 24px;

`;

type TitleProps = {
    isDiety: boolean;
}

export const Title = styled.Text<TitleProps>`
    font-size: ${({ theme }) => theme.SIZES.XXL}px;
    color: ${({ theme,isDiety }) => isDiety ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK };
    font-family: ${({ theme }) => theme.FONTS.BOLD};
    margin-top: 20px;

`;

export const Image = styled.Image`
    margin-top: 20px;
`;

export const SubTitle = styled.Text`
    font-size: ${({ theme }) => theme.SIZES.MD}px;
    font-family: ${({ theme }) => theme.FONTS.REGULAR}; 
    margin-top: 20px;
`;

export const Footer = styled.View`
    flex: 1;
    justify-content: flex-end;
    width: 100%;
`;