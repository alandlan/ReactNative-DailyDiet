
import { BackButton, BackIcon, Contaner, Title } from "./styles";

type NavigationProps = {
    title: string;
    showBackButton?: boolean;
    onBack?: () => void;
}

export default function Navigation({title,showBackButton = true,onBack}: NavigationProps){

    return (
        <Contaner>
            {
                showBackButton && 
                    <BackButton onPress={onBack}> 
                        <BackIcon /> 
                    </BackButton>
            }
            <Title>{title}</Title>
        </Contaner>
    )
}