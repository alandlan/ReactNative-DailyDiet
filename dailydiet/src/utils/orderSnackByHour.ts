import { Snack } from "@models/snack";


export const OrderSnackByHour = (snackList: Snack[]) => {
    // const snacks = snackList.sort((a, b) => {
    //     const dateA = parseInt(a.date.replace(':', ''));
    //     const dateB = parseInt(b.date.replace(':', ''));

    //     return dateA < dateB;
    // });

    // return snacks;

    // Sort by time
    const sortedSnackList = snackList.sort((a, b) => {
        var dateA = new Date(a.date+"T" + a.time + ":00" );
        var dateB = new Date(b.date+"T" + b.time + ":00");
        var t = dateA.getTime() - dateB.getTime();

        return t;
    });

    return sortedSnackList;
}