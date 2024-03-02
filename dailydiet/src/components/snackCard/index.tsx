import { Snack } from "@models/snack";
import {Container} from "./styles";
import {Text} from "react-native";
import SnackLine from "@components/snackLine";
import React, { useState } from "react";

type SnackCardProps = {
    snacks: Snack[];
}

export default function SnackCard({snacks}: SnackCardProps) {
    const [date, setDate] = useState('1');

    return (
        <Container>

            {snacks.map((snack, index) => {
                if (date !== snack.date) {
                    // setDate(snack.date);
                    return (
                        <React.Fragment key={index}>
                            <Text>{date}</Text>
                            <SnackLine 
                                key={index} 
                                snack={snack}/>
                        </React.Fragment>
                    );
                }else{
                    return (
                        <React.Fragment key={index}>
                            <Text>{date}</Text>
                            
                            <SnackLine 
                                key={index} 
                                snack={snack}/>
                        </React.Fragment>
                        
                    );
                }
                
            })}
        </Container>
    );
}