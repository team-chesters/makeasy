export default function GetWeekRange(date) {
    let sunday = GetLastSunday(date);

    let satday = new Date(sunday);
    satday.setDate(sunday.getDate() + 6);
    satday.setHours(23, 59, 59, 0);

    return {
        start: sunday,
        end: satday,
    };
};
