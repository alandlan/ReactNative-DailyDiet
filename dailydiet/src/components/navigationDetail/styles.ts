import theme from "@theme/index";
import { ArrowLeft, CaretLeft } from "phosphor-react-native";
import styled from "styled-components/native";


export const Container = styled.View`
    width: 100%;
    flex-direction: column;
    margin-top: 24px;
    height: 170px;
`;

export const ContainerIcon = styled.View`
    flex-direction: row;
    justify-content: left;
    align-items: center;    
    width: 100%;
    margin: 24px 24px 0px 24px;
`;

export const BackIcon = styled(ArrowLeft).attrs({
    size: 32,
    color: theme.COLORS.GRAY_1
})``;

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