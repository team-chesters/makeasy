export default function GetFormattedDate(yyyymmdd) {
    if (isEmpty(yyyymmdd)) return yyyymmdd;
    
    const userLocale = navigator.language || navigator.userLanguage;
    let t_date = ymdToDate(yyyymmdd);

    return t_date.toLocaleDateString(userLocale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};
