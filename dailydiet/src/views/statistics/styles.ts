import styled from "styled-components/native";




export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const ContainerInfo = styled.View`
    flex: 1;
    flex-direction: column;   
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 24px 24px 24px 24px;
    padding: 12px 24px;
    /* height: 100%; */
`;

export const ContainerTitle = styled.View`
align-items: center;
    justify-content: center;
    margin: 24px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.BOLD};
    font-size: ${({ theme }) => theme.SIZES.MD}px;
    color: ${({ theme }) => theme.COLORS.GRAY_1};
`;

export const ContainerCard = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 12px;
    height: 100px;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_5};
`;

export const TextHeader = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.BOLD};
    font-size: ${({ theme }) => theme.SIZES.XL}px;
    color: ${({ theme }) => theme.COLORS.GRAY_1};
`;

export const TextSubHeader = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.REGULAR};
    font-size: ${({ theme }) => theme.SIZES.SM}px;
    color: ${({ theme }) => theme.COLORS.GRAY_1};
    text-align: center;
`;

export const ContainerCardSnack = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 12px;
`;

type CardSnackProps = {
    isDiet: boolean;
};

export const CardSnack = styled.View<CardSnackProps>`
    flex: 1;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 12px;
    border-radius: 12px;
    height: 100px;
    background-color: ${({ theme, isDiet }) => isDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;