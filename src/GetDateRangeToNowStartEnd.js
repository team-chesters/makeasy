export default function GetDateRangeToNowStartEnd(beforeDays) {
    let startDate = new Date();
    startDate.setDate(new Date().getDate() - beforeDays + 1);
    startDate.setHours(0, 0, 0, 0);

    let endDate = new Date();
    endDate.setHours(23, 59, 59, 0);

    return {
        start: new Date(startDate),
        end: new Date(endDate),
    };
};
