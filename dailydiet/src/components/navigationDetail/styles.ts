import theme from "@theme/index";
import { ArrowLeft, CaretLeft } from "phosphor-react-native";
import styled from "styled-components/native";

type ContainerProps = {
    inAveral: boolean;
};

export const Container = styled.View<ContainerProps>`
    width: 100%;
    flex-direction: column;
    margin-top: 24px;
    height: 170px;
    background-color: ${({ theme,inAveral }) => inAveral ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const ContainerIcon = styled.View`
    flex-direction: row;
    justify-content: left;
    align-items: center;    
    width: 100%;
    margin: 24px 24px 0px 24px;
`;

export const BackIcon = styled(ArrowLeft).attrs<ContainerProps>(({ theme, inAveral }) => ({
    size: 32,
    color: inAveral ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))``;

export const ContainerInfo = styled.View`
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-family: ${theme.FONTS.BOLD};
    font-size: ${theme.SIZES.XXL}px;
    color: ${theme.COLORS.GRAY_1};
`;

export const SubTitle = styled.Text`
    font-family: ${theme.FONTS.REGULAR};
    font-size: ${theme.SIZES.MD}px;
    color: ${theme.COLORS.GRAY_1};
`;