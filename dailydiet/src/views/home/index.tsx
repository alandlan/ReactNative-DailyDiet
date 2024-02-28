import { Container, Title } from './styles';

import CardDetail from '@components/cardDetail';
import Header from '@components/header';

export function Home() {
    return (
        <Container>
            <Header />
            <CardDetail />
            <Title>Home</Title>
        </Container>
    );
}