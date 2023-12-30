export default function GetPrevMonth(t_date = new Date()) {
    let start_date = new Date(t_date);
    start_date.setDate(0);
    start_date.setDate(1);
    start_date.setHours(0, 0, 0, 0);
    let end_date = new Date(t_date);
    end_date.setDate(0);
    end_date.setHours(23, 59, 59, 0);

    return {
        start: start_date,
        end: end_date,
    };
};
