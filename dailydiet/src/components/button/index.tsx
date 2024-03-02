import { IconProps } from "phosphor-react-native";
import { Title, ButtonContainer } from "./styles";
import { useTheme } from "styled-components";
import { TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {
    TitleText: string;
    IconComponent?:  React.FC<IconProps>;
}

export default function Button ({TitleText,IconComponent,...rest}: ButtonProps) {
    const { COLORS } = useTheme();

    return (
        <ButtonContainer {...rest}>
            {IconComponent && <IconComponent color={COLORS.WHITE} />}
            <Title>{TitleText}</Title>
        </ButtonContainer>
    )
}