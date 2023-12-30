import GetWeekRange from './GetWeekRange';

export default function GetThisWeekRange() {
    let today = new Date();
    return GetWeekRange(today);
};
