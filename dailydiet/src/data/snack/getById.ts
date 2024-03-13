import { SNACK_COLLECTION } from "@data/data.config";
import { SnackGroup } from "@models/snackGroup";
import AsyncStorage from "@react-native-async-storage/async-storage";



export async function GetById(id: string | number[]) {
    try {
        const data = await AsyncStorage.getItem(SNACK_COLLECTION);

        const snacks: SnackGroup[] = data ? JSON.parse(data) : [];

        const snack = snacks.find((s) => 
            s.snacks.find((snack) => snack.id === id))?.snacks.find((snack) => snack.id === id);

        return snack;
    } catch (error) {
        console.log("GetById"+error);
    }
}