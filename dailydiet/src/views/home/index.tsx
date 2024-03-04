import Button from '@components/button';
import { Container, Title } from './styles';

import CardDetail from '@components/cardDetail';
import Header from '@components/header';
import { Plus } from 'phosphor-react-native';
import SnackLine from '@components/snackLine';
import { Snack } from '@models/snack';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { SnackGroup } from '@models/snackGroup';
import { GetAllSnack } from '@data/snack/getAllSnack';
import { FlatList, SafeAreaView } from 'react-native';
import { CreateSnack } from '@data/snack/createSnack';
import uuid from 'react-native-uuid';
import SnackGroupTitle from '@components/snackGroupTitle';
import ListEmpty from '@components/listEmpyt';
import { removeAllSnack } from '@data/snack/removeAllSnack';


export function Home() {

    const [snacks, setSnacks] = useState<SnackGroup[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const navigation = useNavigation();

    async function AddSnack(){
        try {
            const date = new Date("2022-10-09T03:00");
            //create fake snack 
            const snack: Snack = {
                id: uuid.v4(),
                name: "Teste",
                isDiety: false,
                date: date,
                description: "Teste"
            }

            await CreateSnack(snack);
        } catch (error) {
            console.log(error);
        }
    }

    function handleAddSnack(){
        navigation.navigate('createSnack');
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
        removeAllSnack();
        fecthSnacks();
    }, []));

    return (
        <SafeAreaView>
            <Container>
                <Header />

                <CardDetail />

                <Title>Refeicoes</Title>

                <Button TitleText="Nova Refeicao" IconComponent={Plus} onPress={handleAddSnack} />
            
                <FlatList
                    data={snacks}
                    keyExtractor={(item) => item.date}
                    ListEmptyComponent={() => <ListEmpty message='Nenhuma refeicao cadastrada!' />}
                    renderItem={({item}) => 
                        <>
                            <SnackGroupTitle date={item.date} />
                            <FlatList
                                data={item.snacks}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={({item}) => <SnackLine snack={item} />}
                            />
                        </>
                    }
                />
            </Container>
        </SafeAreaView>
    );
}