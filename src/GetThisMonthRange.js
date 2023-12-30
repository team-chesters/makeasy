import GetMonthRange from './GetMonthRange';

export default function GetThisMonthRange() {
    let today = new Date();
    return GetMonthRange(today);
};
