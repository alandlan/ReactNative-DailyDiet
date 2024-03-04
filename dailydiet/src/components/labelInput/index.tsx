import { Title } from "./styles";

type InputTitleProps = {
    title: String;
}

export default function LabelInput({title}:InputTitleProps) {
    return (
        <Title>{title}</Title>
    );
}