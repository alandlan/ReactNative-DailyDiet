
import { Container, SubTitle, Title,Image,Footer } from "./styles";
import Button from "@components/button";
import { useNavigation, useRoute } from "@react-navigation/native";

import IconDiet from "@assets/iconIsDiet.png";
import IconNotDiet from "@assets/iconIsNotDiet.png";


type FinishedSnackProps = {
    isDiety: boolean;
}

export default function FinishedSnack() {
    const route = useRoute();
    const { isDiety } = route.params as FinishedSnackProps;

    const navigation = useNavigation();

    function handleGoToHome() {
        navigation.navigate('home');
    }

    console.log(isDiety);

    return (
        <Container>
            {isDiety ? (
                <>
                    <Title isDiety={isDiety}>Continue assim!</Title>
                    <SubTitle>Continue seguindo a dieta para alcançar seus objetivos.</SubTitle>
                    <Image source={IconDiet} />
                </>
            ) : (
                <>
                    <Title isDiety={isDiety}>Que pena!</Title>
                    <SubTitle>Voce saiu da dieta dessa vez, mas continue se esforcando e nao desista!</SubTitle>
                    <Image source={IconNotDiet} />

                </>
            )}
            <Footer>
                <Button TitleText="Ir para a página inicial" onPress={handleGoToHome} />
            </Footer>
        </Container>
    )
}