import styled from "styled-components/native";

type Props = {
    value: string;
    onChange: () => void;
}

export const Container = styled.View`
    width: 100%;
    margin-top: 10px;
    flex: 1;
`;

export const Input = styled.TextInput.attrs<Props>(({ value ,onChange},...rest ) => ({
    value: value,
    onPressIn: onChange,
    ...rest,
}))`
    height: 65px; ;
    padding: 20px;

    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_4}; 
    border-radius: 8px;
    margin: 5px;

    font-size: ${({ theme }) => theme.SIZES.MD}px;

`;