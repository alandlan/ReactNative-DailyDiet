import styled from "styled-components/native";


export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Profile = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    border-width: 2px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_1};
`;