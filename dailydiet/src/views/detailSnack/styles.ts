import styled from "styled-components/native";

type ContainerProps = {
    isDiety?: boolean;
}

export const Container = styled.SafeAreaView<ContainerProps>`
    flex: 1;
    background-color: ${({ theme, isDiety }) => isDiety ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const ContainerDetail = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 24px 24px 24px 24px;
    padding: 24px;
`;

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.SIZES.XL}px;
    font-family: ${({ theme }) => theme.FONTS.BOLD};
    color: ${({ theme }) => theme.COLORS.GRAY_1};
    margin-bottom: 12px;
`;

export const SubTitle = styled.Text`
    font-size: ${({ theme }) => theme.SIZES.MD}px;
    font-family: ${({ theme }) => theme.FONTS.BOLD};
    color: ${({ theme }) => theme.COLORS.GRAY_1};
    margin-bottom: 12px;
`;

export const Text = styled.Text`
    font-size: ${({ theme }) => theme.SIZES.MD}px;
    font-family: ${({ theme }) => theme.FONTS.REGULAR};
    color: ${({ theme }) => theme.COLORS.GRAY_1};
    margin-bottom: 12px;
`;

export const ContainerTag = styled.View`
    flex-direction: row;
`;

export const Tag = styled.View`
    background-color: ${({ theme }) => theme.COLORS.GRAY_5};
    flex-direction: row;
    padding: 5px 10px;
    margin: 0px;
    justify-content: center;
    align-items: center;
    border-radius: 64px;
`;

type DotProps = {
    isDiety?: boolean;
}

export const Dot = styled.View<DotProps>`
    width: 10px;
    height: 10px;
    background-color: ${({ theme, isDiety }) => isDiety ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    border-radius: 5px;
    margin-right: 5px;
`;

export const TagText = styled.Text`
    font-size: ${({ theme }) => theme.SIZES.MD}px;
    font-family: ${({ theme }) => theme.FONTS.REGULAR};
    color: ${({ theme }) => theme.COLORS.GRAY_1};
`;

export const Footer = styled.View`
    flex: 1;
    justify-content: flex-end;
`;

