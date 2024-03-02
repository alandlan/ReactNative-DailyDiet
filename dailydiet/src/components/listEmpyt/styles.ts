import styled from "styled-components/native";


export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Message = styled.Text`
    text-align: center;

    font-size: ${({theme}) => theme.SIZES.MD}px;
    color: ${({theme}) => theme.COLORS.GRAY_3};
    font-family: ${({theme}) => theme.FONTS.REGULAR};
`;