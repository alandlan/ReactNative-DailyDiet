import { SNACK_COLLECTION } from "@data/data.config";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function removeAll() {
    try {
        await AsyncStorage.removeItem(SNACK_COLLECTION);
    } catch (error) {
        console.log("removeAll: "+error);
    }
}