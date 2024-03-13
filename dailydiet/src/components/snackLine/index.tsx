import { Container, Divider, IsDiety, Name, Time } from "./styles";
import {Snack} from "@models/snack";
import { ConvertDateToTimeString } from "@utils/convertDate";

type SnackLineProps = {
    snack: Snack;
    onPress?: () => void;
}

export default function SnackLine({snack, onPress}: SnackLineProps) {
    return (
        <Container onPress={onPress}>
            <Time>{snack.time}</Time>
            <Divider />
            <Name>{snack.name}</Name>
            <IsDiety isDiety={snack.isDiety}>{snack.isDiety}</IsDiety>
        </Container>
    );
}