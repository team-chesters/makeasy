export default function GetDateRangeToNow(beforeDays) {
    let startDate = new Date();
    startDate.setDate(new Date().getDate() - beforeDays);
    startDate.setHours(0, 0, 0, 0);
    return [new Date(startDate), new Date()];
};
