import { SafeAreaView } from "react-native";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    /* flex: 1; */
    justify-content: space-between;
    background-color: ${({ theme }) => theme.COLORS.GRAY_7}; 
    padding: 24px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.BOLD};
    font-size: ${({ theme }) => theme.SIZES.XXL}px;
`;