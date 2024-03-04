import { SnackGroup } from "@models/snackGroup";
import { SNACK_COLLECTION } from "../data.config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { OrderSnackByDate } from "@utils/orderSnackByDate";

export async function GetAll(){
    try {
        const data = await AsyncStorage.getItem(SNACK_COLLECTION);

        const snacks: SnackGroup[] = data ? JSON.parse(data) : [];

        const snacksOrder = OrderSnackByDate(snacks);

        return snacks;
    } catch (error) {
        console.log("GetAll"+error);
    }
}