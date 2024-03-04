import styled from "styled-components/native";


type ToogleProps = {
    type: "Sim" | "Não";
    isToggle: boolean;
}

export const Container = styled.View`
    margin-top: 12px;
`;

export const GroupButton = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 5px;
`;

export const ToogleButton = styled.TouchableOpacity.attrs<ToogleProps>(({isToggle,type}) => ({
}))`
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
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