import { Container, Message } from "./styles";

type ListEmpytProps = {
    message: string;
}

export default function ListEmpyt({ message }: ListEmpytProps) {
    return (
        <Container>
            <Message>{message}</Message>
        </Container>
    )
}