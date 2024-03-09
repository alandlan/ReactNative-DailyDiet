import styled from "styled-components/native";



export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_4};
`;

export const ContainerInfo = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 24px 24px 24px 24px;
    padding: 24px;
    height: 100%;
`;