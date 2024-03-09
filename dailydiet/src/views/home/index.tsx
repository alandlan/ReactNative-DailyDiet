import Button from '@components/button';
import { Container, Title } from './styles';

import CardDetail from '@components/cardDetail';
import Header from '@components/header';
import { Plus } from 'phosphor-react-native';
import SnackLine from '@components/snackLine';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { SnackGroup } from '@models/snackGroup';
import { GetAll } from '@data/snack/getAll';
import { FlatList } from 'react-native';
import SnackGroupTitle from '@components/snackGroupTitle';
import ListEmpty from '@components/listEmpyt';


export function Home() {

    const [snacks, setSnacks] = useState<SnackGroup[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const navigation = useNavigation();

    function handleAddSnack(){
        navigation.navigate('createSnack');
    }

    function handleStatistics(){
        navigation.navigate('statistics');
    }

    async function fecthSnacks () {
        try {
            setIsLoaded(false);
            const snacks = await GetAll() as SnackGroup[];
            setSnacks(snacks);
        } catch (error) {
            console.log("fecthSnacks: "+error);
        }finally {
            setIsLoaded(true);
        }
    }

    useFocusEffect(useCallback(() => {
        // removeAll();
        fecthSnacks();
    }, []));

    return (
            <Container>
                <Header />

                <CardDetail onPress={handleStatistics} />

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
    );
}