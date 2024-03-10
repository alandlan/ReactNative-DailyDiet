import { ArrowUpRight } from "phosphor-react-native";
import styled from "styled-components/native";

type ContainerProps = {
    inAveral: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
    height: 140px;
    background-color: ${({ theme, inAveral }) => inAveral ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    margin: 24px 0px;
`;

export const Icon = styled(ArrowUpRight).attrs<ContainerProps>(({ theme, inAveral }) => ({
    size: 32,
    weight: 'bold',
    color: inAveral ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
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