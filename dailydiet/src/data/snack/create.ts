import AsyncStorage from "@react-native-async-storage/async-storage";

import { SnackGroup } from "@models/snackGroup";
import { GetAll } from "./getAll";
import { SNACK_COLLECTION } from "@data/data.config";
import { Snack } from "@models/snack";
import { OrderSnackByHour } from "@utils/orderSnackByHour";
import { OrderSnackByDate } from "@utils/orderSnackByDate";

export async function Create (newSnack: Snack){
    try {
        
        const data = await GetAll() as SnackGroup[];

        const dateAlreadyExists = data.filter((item) => item.date === newSnack.date);

        if(dateAlreadyExists.length > 0){
            const newData = data.map((item) => {
                if(item.date === newSnack.date){
                    const newSnackList = OrderSnackByHour([...item.snacks, newSnack]);

                    return {
                        date: item.date,
                        snacks: newSnackList
                    }
                }else{
                    return item;
                }
            });

            await AsyncStorage.setItem(SNACK_COLLECTION, JSON.stringify(newData));
        }else{
            const newData = { date: newSnack.date, snacks: [newSnack] } as SnackGroup;
            const newSnackGroup = OrderSnackByDate([...data, newData]);

            await AsyncStorage.setItem(SNACK_COLLECTION, JSON.stringify(newSnackGroup));
        }

    } catch (error) {
        console.log("Create"+error);
    }
}