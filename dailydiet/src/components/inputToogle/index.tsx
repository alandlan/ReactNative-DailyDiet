import { useState } from "react";
import { Container, Text } from "./styles";
import LabelInput from "@components/labelInput";


type ToogleProps = {
    label: "Sim" | "Não";
    isToggle: boolean;
    onChange: (checked: boolean) => void;
}

export default function Toogle({isToggle,onChange,label} : ToogleProps) {
    const [toggle, setToggle] = useState<boolean>(false);

    const handleToggle = () => {
        
        setToggle(!isToggle);
        
        onChange(toggle);
    }

    return (
        <Container isToggle={isToggle} type={label} onPress={handleToggle}>
            <Text>{label}</Text>
        </Container>
        
    );
}