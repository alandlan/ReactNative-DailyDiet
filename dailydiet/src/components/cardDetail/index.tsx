
import { Container, Icon, Subtitle, Title } from "./styles";

type CardDetailProps = {
    inAveral?: boolean;
    percentage: string;
    onPress?: () => void;
}

export default function CardDetail({inAveral=true, percentage, onPress}: CardDetailProps) {
    
    return (
        <Container inAveral={inAveral} onPress={onPress}>
            <Icon inAveral={inAveral} />

            <Title>{percentage}</Title>

            <Subtitle>das refeições foram entregues no prazo</Subtitle>
        </Container>
    );
}   