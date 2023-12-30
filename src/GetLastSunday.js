export default function GetLastSunday(d) {
    d = new Date(d);
    var day = d.getDay(),
        diff = d.getDate() - day;
    let t = new Date(d.setDate(diff));
    t.setHours(0, 0, 0, 0);
    return t;
};