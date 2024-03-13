import { IconProps } from "phosphor-react-native";
import { Title, ButtonContainer } from "./styles";
import { useTheme } from "styled-components";
import { TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {
    TitleText: string;
    IconComponent?:  React.FC<IconProps>;
    HasBackground?: boolean;
}

export default function Button ({TitleText,IconComponent,HasBackground = true,...rest}: ButtonProps) {
    const { COLORS } = useTheme();

    return (
        <ButtonContainer hasBackground={HasBackground} {...rest}>
            {IconComponent && <IconComponent color={HasBackground ? COLORS.WHITE : COLORS.GRAY_1} />}
            <Title hasBackground={HasBackground}>{TitleText}</Title>
        </ButtonContainer>
    )
}