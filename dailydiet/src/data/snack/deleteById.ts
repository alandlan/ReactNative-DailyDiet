import { SNACK_COLLECTION } from "@data/data.config";
import { SnackGroup } from "@models/snackGroup";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function deleteById(id: string | number[]){
    try {
        const data = await AsyncStorage.getItem(SNACK_COLLECTION);
        const snacks: SnackGroup[] = data ? JSON.parse(data) : [];
        const newSnacks = snacks.map((snack) => {
            return {
                ...snack,
                snacks: snack.snacks.filter((s) => s.id !== id)
            }
        });
        const newSnacksIfNotEmpyt = newSnacks.filter((snack) => snack.snacks.length > 0);
        await AsyncStorage.setItem(SNACK_COLLECTION, JSON.stringify(newSnacksIfNotEmpyt));
    } catch (error) {
        console.log("deleteById: "+error);
    }
}