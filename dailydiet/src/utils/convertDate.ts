import moment from "moment";
import {FormatDate} from "./formatDate";


const ConvertStringToDate = (date: string) => {
    if(!date) return new Date();

    const newDate = date.split('/');
    const year = newDate[2];
    const month = newDate[1];
    const day = newDate[0];
    return new Date(`${year}-${month}-${day}`);
}

const ConvertDateToDateString = (date: Date) => {
    if(!date) return '';

    const dateFormatted = moment(date).format("YYYY-MM-DD HH:mm");

    const dateString = dateFormatted.split(" ")[0];
    const newDate = dateString.split('-');
    const year = newDate[0];
    const month = newDate[1];
    const day = newDate[2];
    return FormatDate(`${year}-${month}-${day}`);
}

interface FullDateProps {
    date: String;
    time: String;

}

const ConvertStringToFullDate = ({date,time} : FullDateProps) => {
    if(!date || !time) return new Date();

    const newDate = date.split('/');
    const year = newDate[2];
    const month = newDate[1];
    const day = newDate[0];
    const newTime = time.split(':');
    const hours = newTime[0];
    const minutes = newTime[1];
    return new Date(`${year}-${month}-${day}T${hours}:${minutes}`);
}

const ConvertDateToTimeString = (date: Date) =>{
    if (!date) return '';

    const dateFormatted = moment(date).format("YYYY-MM-DD HH:mm");

    const dateString = dateFormatted.split(" ")[1];
    const newDate = dateString.split(':');
    const hours = newDate[0];
    const minutes = newDate[1];
    return `${hours}:${minutes}`;
}

export { 
    ConvertStringToDate, 
    ConvertDateToDateString,
    ConvertStringToFullDate,
    ConvertDateToTimeString 
};