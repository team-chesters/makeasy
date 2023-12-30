export default function GetNextMonth(t_date = new Date()) {
    let start_date = new Date(t_date.getFullYear(), t_date.getMonth() + 1, 1);
    start_date.setHours(0, 0, 0, 0);
    let end_date = new Date(t_date.getFullYear(), t_date.getMonth() + 2, 0);
    end_date.setHours(23, 59, 59, 0);

    return {
        start: start_date,
        end: end_date,
    };
};
