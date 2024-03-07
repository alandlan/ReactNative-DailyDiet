import { useState } from "react";
import { Container, GroupButton, Text,ToogleButton } from "./styles";
import LabelInput from "@components/labelInput";


type ToogleProps = {
    onChange: (checked: boolean) => void;
}

export default function Toogle({onChange} : ToogleProps) {
    const [isDietyChecked, setIsDietyChecked] = useState<boolean>(false);
    const [isNotDietyChecked, setIsNotDietyChecked] = useState<boolean>(false);

    const handleIsDietyToggle = () => {

        if(isDietyChecked === isNotDietyChecked){
            setIsDietyChecked(!isDietyChecked);
        }else{
            setIsDietyChecked(!isDietyChecked);
            setIsNotDietyChecked(!isNotDietyChecked);
        }
        
        onChange(true);
    }

    function handleIsNotDietyToggle(){
        if(isDietyChecked === isNotDietyChecked){
            setIsNotDietyChecked(!isNotDietyChecked);
        }else{
            setIsDietyChecked(!isDietyChecked);
            setIsNotDietyChecked(!isNotDietyChecked);
        }
        onChange(false);
    }

    return (
        <Container>
            <LabelInput title="Esta dentro da dieta?" />
            <GroupButton>
                <ToogleButton isToggle={isDietyChecked} type="Sim" onPress={handleIsDietyToggle}>
                    <Text>Sim</Text>
                </ToogleButton>

                <ToogleButton isToggle={isNotDietyChecked} type="Não" onPress={handleIsNotDietyToggle}>
                    <Text>Não</Text>
                </ToogleButton>
            </GroupButton>
            

        </Container>
    );
}