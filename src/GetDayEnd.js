export default function GetDayEnd(d = new Date()) {
    let t = new Date(d);
    t.setHours(23, 59, 59, 0);
    return t;
};
