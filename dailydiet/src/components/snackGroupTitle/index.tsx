import FormatDate from "@utils/formatDate";
import { Container,Text } from "./styles";

type SnackGroupProps = {
    title: string;
}

export default function SnackGroupTitle({ title} : SnackGroupProps) {
    return (
        <Container>
            <Text>{FormatDate(title)}</Text>
        </Container>
    )
}