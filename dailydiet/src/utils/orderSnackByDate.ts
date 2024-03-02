import { SnackGroup } from "@models/snackGroup";


export const OrderSnackByDate = (snackGroup: SnackGroup[]) => {
    // Sort by date
    const sortedSnackGroup = snackGroup.sort((a, b) => {
        return new Date(a.date).getDate() - new Date(b.date).getDate();
    });

    return sortedSnackGroup;
}