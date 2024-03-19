import Navigation from "@components/navigation";
import { Container, Footer, Form, InputGroup } from "./styles";
import { useNavigation, useRoute } from '@react-navigation/native';
import { InputText } from "@components/inputText";
import { useEffect, useState } from "react";
import { Snack } from "@models/snack";
import InputTextArea from "@components/inputTextArea";
import { ConvertDateToDateString, ConvertDateToTimeString } from "@utils/convertDate";
import InputDateTime from "@components/inputDateTime";
import Button from "@components/button";
import Toogle from "@components/inputToogle";
import { ScrollView } from "react-native";
import { Create } from "@data/snack/create";
import uuid from 'react-native-uuid';
import { GetById } from "@data/snack/getById";
import { Update } from "@data/snack/update";

type RouteParams =  {
    snackId: string | number[];
}

export default function CreateSnack() {

    // const [snack, setSnack] = useState<Snack>({} as Snack);
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [date, setDate] = useState<string>("");
    const [time, setTime] = useState<string>("");
    const [isDiety, setIsDiety] = useState<boolean>(false);
    const [datetime, setDatetime] = useState<Date>(undefined as any);
    const [isNew, setIsNew] = useState<boolean>(true);

    const route = useRoute();
    const params = route.params as RouteParams;
 
    const navigation = useNavigation();

    function handleBack(){
        navigation.goBack();
    }

    function handleChangeName(name: string){
        setName(name);
    }

    function handleChangeDescription(description: string){
        setDescription(description);
    }

    const handleChangeDate = (newValue: Date) => {
        
        const date = ConvertDateToDateString(newValue);
        var time = ConvertDateToTimeString(newValue);
        setDate(date);
        setTime(time);
        setDatetime(newValue);
    }

    const handleChangeTime = (newValue: any) => {

        var time = ConvertDateToTimeString(newValue);
        const date = ConvertDateToDateString(newValue);
        setTime(time);
        setDate(date);
        setDatetime(newValue);
    }

    const handleChangeIsDiety = (isDiety: boolean) => {
        setIsDiety(isDiety);
    }

    async function handleSaveSnack(){
        try {

            const snack: Snack = {
                id: isNew ? uuid.v4() : params.snackId,
                name: name,
                isDiety: isDiety,
                date: date,
                time: time,
                description: description
            }

            if(!isNew){
                await Update(snack);
            }else{
                await Create(snack);
            }

            navigation.navigate('finishedSnack', {isDiety});
        } catch (error) {
            console.log("handleSaveSnack: "+error);
        }
    }

    async function loadSnack() {

        if(params === undefined || params.snackId === undefined) return;

        const snack = await GetById(params.snackId);

        if(snack){
            setName(snack.name);
            setDescription(snack.description);
            setDate(snack.date);
            setTime(snack.time);
            setIsDiety(snack.isDiety);

            setDatetime(new Date(snack.date + " " + snack.time));
            setIsNew(false);
        }
    }

    useEffect(() => {
        loadSnack();
    }, []);

    return (
        <Container>

            <Navigation title={!isNew ? "Editar Refeicao": "Nova Refeicao"} showBackButton={true} onBack={handleBack} />

            <Form>
                <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
                    <InputText title="Nome" value={name} onChangeText={handleChangeName} />
                    
                    <InputTextArea  title="Descrição" 
                            value={description}
                            multiline={true} 
                            numberOfLines={4}
                            style={{textAlignVertical:"top"}} 
                            onChangeText={handleChangeDescription}
                            />

                    <InputGroup>

                        <InputDateTime 
                            title="Data" 
                            mode="date"
                            value={datetime}
                            onChangeText={handleChangeDate} />

                        <InputDateTime 
                            title="Hora" 
                            mode="time"
                            value={datetime}
                            onChangeText={handleChangeTime} />
    
                    </InputGroup>

                    <Toogle isNew={isNew} isDiety={isDiety} onChange={(checked) => handleChangeIsDiety(checked)} />

                    <Footer>
                        <Button TitleText={!isNew ? "Salvar Alteracoes": "Cadastrar Refeicao"} onPress={handleSaveSnack} />
                    </Footer>
                    
                </ScrollView>            
            </Form>
                        
        </Container>
    );
}

