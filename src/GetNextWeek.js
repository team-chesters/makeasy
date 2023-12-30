import GetEndOfWeek from './GetEndOfWeek';
import GetTommorrow from './GetTommorrow';

export default function GetNextWeek(t_date = new Date()) {
    let saturday = GetEndOfWeek(t_date);
    let next_sun = GetTommorrow(saturday);
    let next_sat = GetEndOfWeek(next_sun);

    next_sun.setHours(0, 0, 0, 0);
    next_sat.setHours(23, 59, 59, 0);

    return {
        start: new Date(next_sun),
        end: new Date(next_sat),
    };
};
