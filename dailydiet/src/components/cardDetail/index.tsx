
import { Container, Icon, Subtitle, Title } from "./styles";

type CardDetailProps = {
    onPress?: () => void;
}

export default function CardDetail({onPress}: CardDetailProps) {
    
    return (
        <Container onPress={onPress}>
            <Icon />

            <Title>90,86%</Title>

            <Subtitle>das refeições foram entregues no prazo</Subtitle>
        </Container>
    );
}   