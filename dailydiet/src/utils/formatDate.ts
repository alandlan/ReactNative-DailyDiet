// Date: 03/20/21
function FormatDate(date: string) {
    if (!date) return '';   

    const newDate = date.split('-');
    const year = newDate[0];
    const month = newDate[1];
    const day = newDate[2];

    return `${day.length == 1 ? `0${day}` : day}/${month.length == 1 ? `0${month}` : month}/${year}`;
}

export { FormatDate }
