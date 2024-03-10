import { SnackGroup } from "@models/snackGroup";


interface GetSnacksIsDietOrNotProps {
    snacks: SnackGroup[];
    isDiet: boolean;
}

function GetSnacksIsDietOrNot({snacks,isDiet}: GetSnacksIsDietOrNotProps){
    const snacksInDiet = snacks?.map((snack) => snack.snacks?.filter( c => c.isDiety === isDiet).length) as number[];
    return snacksInDiet?.reduce((a,v) => a = a + v , 0);
}

function GetSnacksIsNotDiet({snacks,isDiet}: GetSnacksIsDietOrNotProps){
    const snacksInDiet = snacks?.map((snack) => snack.snacks?.filter( c => !c.isDiety).length) as number[];
    return snacksInDiet?.reduce((a,v) => a = a + v , 0);
}

function GetSnacksInDietSequence(snacks: SnackGroup[]){
    let snackDiet = false;
    let snackInDietSequence = 0;
    snacks?.map((snack) => snack.snacks?.map((c) => {
        if(c.isDiety){
            if(snackDiet){
                if(snackInDietSequence == 0){
                    snackInDietSequence = 1;
                }
                snackInDietSequence++;
            }
            snackDiet = true;
        }else{
            snackDiet = false;
        }
    }));

    return snackInDietSequence;
}

export { GetSnacksIsDietOrNot,GetSnacksInDietSequence,GetSnacksIsNotDiet }