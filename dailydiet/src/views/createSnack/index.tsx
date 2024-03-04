import Navigation from "@components/navigation";
import { Container, DateTimeGroup, Form } from "./styles";
import { useNavigation } from '@react-navigation/native';
import { InputText } from "@components/inputText";
import { useEffect, useState } from "react";
import { Snack } from "@models/snack";
import InputTextArea from "@components/inputTextArea";
import { ConvertDateToDateString, ConvertDateToTimeString } from "@utils/convertDate";
import InputDateTime from "@components/inputDateTime";
import Button from "@components/button";
import Toogle from "@components/inputToogle";
import LabelInput from "@components/labelInput";

export default function CreateSnack(oldSnack : Snack) {
    const [snack, setSnack] = useState<Snack>({} as Snack);
    const [datetime, setDatetime] = useState<Date>(new Date());
    const [isDiety, setIsDiety] = useState<boolean>(true);
    const [isNotDiety, setIsNotDiety] = useState<boolean>(false);
 
    const navigation = useNavigation();

    function handleBack(){
        navigation.goBack();
    }

    function handleChangeName(name: String){
        const newSnack = { ...snack, name } as Snack;
        setSnack(newSnack);
    }

    function handleChangeDescription(description: string){
        const newSnack = { ...snack, description };
        setSnack(newSnack);
    }

    const handleChangeDate = (newValue: Date) => {
        
        const date = ConvertDateToDateString(newValue);
        
        const newSnack = { ...snack, date };
        
        setSnack(newSnack);
        setDatetime(newValue);
    }

    const handleChangeTime = (newValue: any) => {

        var time = ConvertDateToTimeString(newValue);

        console.log(time);

        const newSnack = { ...snack, time };

        setSnack(newSnack);
        setDatetime(newValue);
    }

    const handleChangeDiety = () => {
        setIsDiety(isNotDiety);
        setIsNotDiety(isDiety);
    }

    useEffect(() => {
        if(oldSnack){
            setSnack(oldSnack);
        }
        console.log(datetime);
    }, []);

    return (
        <Container>

            <Navigation title="Nova Refeicao" showBackButton={true} onBack={handleBack} />

            <Form>
                <InputText title="Nome" value={snack.name} onChangeText={handleChangeName} />
                
                <InputTextArea  title="Descrição" 
                        value={snack.description}
                        multiline={true} 
                        numberOfLines={4}
                        style={{textAlignVertical:"top"}} 
                        onChangeText={handleChangeDescription}
                        />

                <DateTimeGroup>

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
   
                </DateTimeGroup>

                <LabelInput title="Está dentro da Dieta?" />

                <DateTimeGroup>
                    <Toogle isToggle={isDiety} label="Sim" onChange={handleChangeDiety} />
                    <Toogle isToggle={isNotDiety} label="Não" onChange={handleChangeDiety} />
                </DateTimeGroup>

                <Button TitleText="Cadastrar Refeicao" onPress={() => {}} />
                
            </Form>
        </Container>
    );
}

