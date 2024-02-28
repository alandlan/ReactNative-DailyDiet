import { ArrowUpRight } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    height: 140px;
    background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    margin: 24px;
`;

export const Icon = styled(ArrowUpRight).attrs(({ theme }) => ({
    size: 32,
    weight: 'bold',
    color: theme.COLORS.GREEN_DARK,
}))`
    position: absolute;
    top: 24px;
    right: 24px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.BOLD};
    font-size: ${({ theme }) => theme.SIZES.XXL}px;
`;

export const Subtitle = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.REGULAR};
    font-size: ${({ theme }) => theme.SIZES.MD}px;
    margin-top: 8px;
`;