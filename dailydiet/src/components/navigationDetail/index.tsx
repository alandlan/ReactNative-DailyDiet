
import { Subtitle } from "@components/cardDetail/styles";
import { BackIcon, ContainerInfo, Container, Title, ContainerIcon } from "./styles";
import {TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

type NavigationProps = {
    title: string;
    showBackButton?: boolean;
    inAveral?: boolean;
    onBack?: () => void;
}

export default function NavigationDetail({title,showBackButton = true,inAveral = true, onBack}: NavigationProps){

    return (
        <Container inAveral={inAveral}>
            {
                showBackButton && 
                <ContainerIcon>
                    <TouchableOpacity onPress={onBack}> 
                        <BackIcon inAveral={inAveral} /> 
                    </TouchableOpacity>
                </ContainerIcon>
            }
            <ContainerInfo>
                <Title>{title}</Title>

                <Subtitle>das refeicoes dentro da dieta</Subtitle>
            </ContainerInfo>
        </Container>
    )
}