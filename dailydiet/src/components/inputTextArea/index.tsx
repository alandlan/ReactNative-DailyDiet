import { TextInputProps } from "react-native";
import { Container, TextInput } from "./styles";
import LabelInput from "@components/labelInput";

interface InputProps extends TextInputProps {
    title: String;

}

export default function InputTextArea({title,...rest}:InputProps) {
    return (

        <Container>
            <LabelInput title={title} />
            <TextInput {...rest} />
        </Container>
    );
}