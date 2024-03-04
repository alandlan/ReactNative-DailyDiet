import { Container, Divider, IsDiety, Name, Time } from "./styles";
import {Snack} from "@models/snack";
import { ConvertFullDateToTimeString } from "@utils/convertDate";

type SnackLineProps = {
    snack: Snack;
}

export default function SnackLine({snack}: SnackLineProps) {
    return (
        <Container>
            <Time>{ConvertFullDateToTimeString(snack.date)}</Time>
            <Divider />
            <Name>{snack.name}</Name>
            <IsDiety isDiety={snack.isDiety}>{snack.isDiety}</IsDiety>
        </Container>
    );
}