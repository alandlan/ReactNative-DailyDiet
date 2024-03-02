import { Container, Divider, IsDiety, Name, Time } from "./styles";
import {Snack} from "@models/snack";
import {Text} from "react-native";

type SnackLineProps = {
    snack: Snack;
}

export default function SnackLine({snack}: SnackLineProps) {
    return (
        <Container>
            <Time>{snack.time}</Time>
            <Divider />
            <Name>{snack.name}</Name>
            <IsDiety isDiety={snack.isDiety}>{snack.isDiety}</IsDiety>
        </Container>
    );
}