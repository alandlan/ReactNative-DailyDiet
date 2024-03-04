import Navigation from "@components/navigation";
import { Container, Footer, Form, InputGroup } from "./styles";
import { useNavigation } from '@react-navigation/native';
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

export default function CreateSnack(oldSnack : Snack) {

    // const [snack, setSnack] = useState<Snack>({} as Snack);
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [date, setDate] = useState<string>("");
    const [time, setTime] = useState<string>("");
    const [isDiety, setIsDiety] = useState<boolean>(false);


    const [datetime, setDatetime] = useState<Date>(undefined as any);
 
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
        setDate(date);
        setDatetime(newValue);
    }

    const handleChangeTime = (newValue: any) => {

        var time = ConvertDateToTimeString(newValue);
        setTime(time);
        setDatetime(newValue);
    }

    const handleChangeIsDiety = (isDiety: boolean) => {
        setIsDiety(isDiety);
    }

    async function handleSaveSnack(){
        try {

            const snack: Snack = {
                id: uuid.v4(),
                name: name,
                isDiety: isDiety,
                date: date,
                time: time,
                description: description
            }

            await Create(snack);  

            navigation.navigate("home");
        } catch (error) {
            console.log("handleSaveSnack: "+error);
        }
    }

    useEffect(() => {
        
    }, []);

    return (
        <Container>

            <Navigation title="Nova Refeicao" showBackButton={true} onBack={handleBack} />


            <Form>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
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

                <Toogle onChange={(checked) => handleChangeIsDiety(checked)} />

                <Footer>
                    <Button TitleText="Cadastrar Refeicao" onPress={handleSaveSnack} />
                </Footer>
                
            </ScrollView>

            
            </Form>


            
        </Container>
    );
}

