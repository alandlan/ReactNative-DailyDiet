import {FormatDate} from "@utils/formatDate";
import { Container,Text } from "./styles";

type SnackGroupProps = {
    date: string;
}

export default function SnackGroupTitle({ date} : SnackGroupProps) {
    return (
        <Container>
            <Text>{FormatDate(date)}</Text>
        </Container>
    )
}