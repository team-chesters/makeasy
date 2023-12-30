export default function GetDaysAgo(numOfDays, date = new Date()) {
    const daysAgo = new Date(date.getTime());

    daysAgo.setDate(date.getDate() - numOfDays);
    daysAgo.setHours(0, 0, 0, 0);

    return daysAgo;
};
