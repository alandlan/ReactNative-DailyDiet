import theme from "@theme/index";
import { ArrowLeft, CaretLeft } from "phosphor-react-native";
import styled from "styled-components/native";


export const Contaner = styled.View`
    /* width: 100%; */
    height: 50px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 24px;
`;

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    left: 0;
    flex: 1;
`;

export const BackIcon = styled(ArrowLeft).attrs({
    size: 32,
    color: theme.COLORS.GRAY_1
})``;

export const Title = styled.Text`
    font-family: ${theme.FONTS.BOLD};
    font-size: ${theme.SIZES.XL}px;
    color: ${theme.COLORS.GRAY_1};
`;