export default function GetEndOfWeek(d) {
    d = new Date(d);
    var day = d.getDay(),
        diff = d.getDate() + (6 - day);
    let t = new Date(d.setDate(diff));
    t.setHours(23, 59, 59, 0);
    return t;
};
