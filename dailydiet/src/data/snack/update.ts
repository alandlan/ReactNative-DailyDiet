import { Snack } from "@models/snack";
import { GetAll } from "./getAll";
import { SnackGroup } from "@models/snackGroup";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SNACK_COLLECTION } from "@data/data.config";
import { OrderSnackByHour } from "@utils/orderSnackByHour";
import { OrderSnackByDate } from "@utils/orderSnackByDate";

export async function Update(newSnack: Snack){
    try {
        const data = await GetAll() as SnackGroup[];
        
        const newWitOutOldSnack = data.map((item) => {
            return {
                date: item.date,
                snacks: item.snacks.filter((snack) => snack.id !== newSnack.id)
            }
        });

        const dateAlreadyExists = newWitOutOldSnack.filter((item) => item.date === newSnack.date);
        

        if(dateAlreadyExists.length > 0){

            const newData = newWitOutOldSnack.map((item) => {
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
            const newSnackGroup = OrderSnackByDate([...newWitOutOldSnack, newData]);

            await AsyncStorage.setItem(SNACK_COLLECTION, JSON.stringify(newSnackGroup));
        }
    } catch (error) {
        console.log("Update: "+error);
    }
}