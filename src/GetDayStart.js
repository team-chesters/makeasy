export default function GetDayStart(d = new Date()) {
    let t = new Date(d);
    t.setHours(0, 0, 0, 0);
    return t;
};
