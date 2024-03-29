import { useNavigation, useRoute } from "@react-navigation/native";
import { Container, ContainerDetail, ContainerTag, Dot, Footer, SubTitle, Tag, TagText, Text, Title } from "./styles";
import { useEffect, useState } from "react";
import { GetById } from "@data/snack/getById";
import Navigation from "@components/navigation";
import { Snack } from "@models/snack";
import { FormatDate } from "@utils/formatDate";
import Button from "@components/button";
import { Newspaper, Trash } from "phosphor-react-native";
import { deleteById } from "@data/snack/deleteById";
import { Alert } from "react-native";

type RouteParams = {
    snackId: string | number[];
}

export default function DetailSnack() {

    const [snack, setSnack] = useState<Snack>();

    const route = useRoute();
    const { snackId } = route.params as RouteParams;
    
    const navigation = useNavigation();

    async function loadSnack() {
        const snack = await GetById(snackId);
        setSnack(snack);
    }

    function handleBack() {
        navigation.goBack();
    }

    function handleEdit() {
        navigation.navigate('createSnack', { snackId });
    }

    async function handleDelete() {
        Alert.alert(
            'Excluir refeicao',
            'Deseja realmente excluir esta refeicao?',
            [
                {
                    text: 'Cancelar',
                    onPress: () => {},
                    style: 'cancel'
                },
                {
                    text: 'Excluir',
                    onPress: async () => {
                        await deleteById(snackId);
                        navigation.goBack();
                    }
                }
            ]
        );
    }

    useEffect(() => {
        loadSnack();
    }, []);

    return (
        <Container isDiety={snack?.isDiety}>
            <Navigation title="Refeicao" onBack={handleBack} />

            <ContainerDetail>
                <Title>{snack?.name}</Title>
                <Text>{snack?.description}</Text>
                <SubTitle>Data e Hora</SubTitle>
                <Text>{FormatDate(snack?.date!)} as {snack?.time}</Text>
                <ContainerTag>
                    <Tag>
                        <Dot isDiety={snack?.isDiety} />
                        <TagText>{snack?.isDiety ? 'dentro da dieta' : 'fora da dieta'}</TagText>
                    </Tag>
                </ContainerTag>
                
                <Footer>
                    <Button IconComponent={Newspaper} TitleText="Editar refeicao" onPress={handleEdit} />
                    <Button HasBackground={false} IconComponent={Trash}  TitleText="Excluir refeicao" onPress={handleDelete} />
                </Footer>
            </ContainerDetail>
        </Container>
    );
}