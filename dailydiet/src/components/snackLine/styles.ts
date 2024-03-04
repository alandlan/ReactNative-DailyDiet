import { styled } from "styled-components/native";

export const Container = styled.TouchableOpacity`
    flex-direction: row;
    gap: 16px;
    margin: 5px 0px;
    padding: 16px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_4};
    border-radius: 8px;
    position: relative;
`;

export const Time = styled.Text`
    font-size: ${({ theme }) => theme.SIZES.MD}px;
    font-family: ${({ theme }) => theme.FONTS.BOLD};
    color: ${({ theme }) => theme.COLORS.GRAY_1};
    margin: 0 14px;
`;

export const Divider = styled.View`
    width: 1px;
    height: 100%;
    background-color: ${({ theme }) => theme.COLORS.GRAY_1};
`;

export const Name = styled.Text`
    font-size: ${({ theme }) => theme.SIZES.MD}px;
    font-family: ${({ theme }) => theme.FONTS.REGULAR};
    color: ${({ theme }) => theme.COLORS.GRAY_1};
    margin: 0 14px;
`;

type IsDietyProps = {
    isDiety: boolean;
}

export const IsDiety = styled.View<IsDietyProps>`
    height: 20px;
    width: 20px;
    border-radius: 200px;
    justify-content: end;
    text-align: end;
    position: absolute;
    right: 30px;
    top: 16px;
    background-color: ${({ theme, isDiety }) => isDiety ? theme.COLORS.GREEN : theme.COLORS.RED};
`;