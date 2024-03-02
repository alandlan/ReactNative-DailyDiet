import Button from '@components/button';
import { Container, Title } from './styles';

import CardDetail from '@components/cardDetail';
import Header from '@components/header';
import { Plus } from 'phosphor-react-native';
import SnackLine from '@components/snackLine';
import SnackCard from '@components/snackCard';
import { Snack } from '@models/snack';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { SnackGroup } from '@models/snackGroup';
import { GetAllSnack } from '@data/snack/getAllSnack';
import { FlatList, TouchableOpacity } from 'react-native';
import { CreateSnack } from '@data/snack/createSnack';
import { removeAllSnack } from '@data/snack/removeAllSnack';
import uuid from 'react-native-uuid';

export function Home() {

    const [snacks, setSnacks] = useState<SnackGroup[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    async function handleAddSnack(){
        try {
            //create fake snack 
            const snack: Snack = {
                id: uuid.v4(),
                name: "Teste",
                time: "4:00",
                isDiety: false,
                date: "2022-10-09",
                description: "Teste"
            }

            await CreateSnack(snack);
        } catch (error) {
            console.log(error);
        }
        
    }

    async function fecthSnacks () {
        try {
            setIsLoaded(false);
            const snacks = await GetAllSnack() as SnackGroup[];
            setSnacks(snacks);
        } catch (error) {
            console.log(error);
        }finally {
            setIsLoaded(true);
        }
    }

    useFocusEffect(useCallback(() => {
        // removeAllSnack();
        fecthSnacks();
    }, []));

    return (
        <Container>
            <Header />

            <CardDetail />

            <Title>Refeicoes</Title>

            <Button TitleText="Nova Refeicao" IconComponent={Plus} onPress={handleAddSnack} />
        
            {/* <SnackCard snacks={snacks} /> */}
            <FlatList
                data={snacks}
                keyExtractor={(item) => item.date}
                ListEmptyComponent={() => <Title>Nenhuma refeicao cadastrada</Title>}
                renderItem={({item}) => 
                    <>
                        <Title>{item.date}</Title>
                        <FlatList
                            data={item.snacks}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({item}) => <SnackLine snack={item} />}
                        />
                    </>
                }
            />
        </Container>
    );
}