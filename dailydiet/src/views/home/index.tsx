import Button from '@components/button';
import { Container, Title } from './styles';

import CardDetail from '@components/cardDetail';
import Header from '@components/header';
import { Plus } from 'phosphor-react-native';

export function Home() {
    return (
        <Container>
            <Header />

            <CardDetail />

            <Title>Refeicoes</Title>

            <Button TitleText="Nova Refeicao" IconComponent={Plus} />
        </Container>
    );
}