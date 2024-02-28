import { IconProps } from "phosphor-react-native";
import { Title, ButtonContainer } from "./styles";
import { useTheme } from "styled-components";

type ButtonProps = {
    TitleText: string;
    IconComponent:  React.FC<IconProps>;
}

export default function Button ({TitleText,IconComponent}: ButtonProps) {
    const { COLORS } = useTheme();

    return (
        <ButtonContainer>
            <IconComponent color={COLORS.WHITE} />
            <Title>{TitleText}</Title>
        </ButtonContainer>
    )
}