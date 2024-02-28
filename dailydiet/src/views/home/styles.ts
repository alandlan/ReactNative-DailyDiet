import { SafeAreaView } from "react-native";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    /* flex: 1; */
    justify-content: space-between;
    display: flex;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.REGULAR};
    font-size: ${({ theme }) => theme.SIZES.MD}px;
    text-align: left;
    padding: 0px 24px;
`;