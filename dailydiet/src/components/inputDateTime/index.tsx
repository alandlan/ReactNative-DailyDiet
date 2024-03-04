import { Container, Input } from "./styles";
import React from "react";
import DateTimePickerModal, {ReactNativeModalDateTimePickerProps} from "react-native-modal-datetime-picker";
import { ConvertDateToDateString, ConvertDateToTimeString } from "@utils/convertDate";
import LabelInput from "@components/labelInput";

type Props = {
    title: string;
    mode: ReactNativeModalDateTimePickerProps["mode"];
    value: Date;
    onChangeText: (date: Date) => void
}

export default function InputDateTime({ title, mode, value, onChangeText }: Props) {
    const [show, setShow] = React.useState(false);

    const handleChangeDate = (date: any) => {
        setShow(!show);
        const dateSelected = date as Date;
        onChangeText(dateSelected);
    }

    return (
        <Container>
            <LabelInput title={title} />
            
            {mode === "time" && (
                <>
                    <Input 
                        value={ConvertDateToTimeString(value)}
                        onPressIn={() => setShow(!show)} 
                        onChange={() => setShow(!show)}/>

                    <DateTimePickerModal 
                        isVisible={show}
                        mode={mode}
                        date={value}
                        onConfirm={handleChangeDate}
                        onCancel={() => setShow(!show)}
                    />
                </>
            )}

            {mode === "date" && (
                <>
                    <Input 
                        value={ConvertDateToDateString(value)}
                        onPressIn={() => setShow(!show)} 
                        onChange={() => setShow(!show)}/>

                    <DateTimePickerModal 
                        isVisible={show}
                        mode={mode}
                        date={value}
                        onConfirm={handleChangeDate}
                        onCancel={() => setShow(!show)}/>
                </>
                
            )}
        </Container>
    );
}