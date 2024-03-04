import styled from "styled-components/native";


type ToogleProps = {
    type: "Sim" | "Não";
    isToggle: boolean;
}

export const Container = styled.TouchableOpacity.attrs<ToogleProps>(({isToggle,type}) => ({
}))`
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    width: 100%;
    margin: 5px;
    text-align: center;
    height: 65px;

    border-width: 1px;
    background-color: ${({ theme,isToggle,type }) => isToggle && type === "Sim" ? theme.COLORS.GREEN : isToggle && type === "Não"  ? theme.COLORS.RED : theme.COLORS.GRAY_4};
    border-color: ${({ theme,isToggle,type }) => isToggle && type === "Sim"  ? theme.COLORS.GREEN_DARK : isToggle && type === "Não" ? theme.COLORS.RED_DARK : theme.COLORS.GRAY_4};
`;

export const Text = styled.Text`
    text-align: center;
`;