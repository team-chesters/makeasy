import GetLastSunday from './GetLastSunday';
import GetTommorrow from './GetTommorrow';

export default function GetPrevWeek(t_date = new Date()) {
    let sunday = GetLastSunday(t_date);
    let prev_sat = GetYesterday(sunday);
    let prev_sun = GetLastSunday(prev_sat);

    prev_sun.setHours(0, 0, 0, 0);
    prev_sat.setHours(23, 59, 59, 0);

    return {
        start: new Date(prev_sun),
        end: new Date(prev_sat),
    };
};
