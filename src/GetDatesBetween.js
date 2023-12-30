export default function GetDatesBetween(s, e) {
    let ret = [];
    let ss = new Date(s);
    ss.setHours(0, 0, 0, 0);
    let ee = new Date(e);
    ee.setHours(23, 59, 59, 0);
    for (let d = ss; d <= ee; d.setDate(d.getDate() + 1)) {
        ret.push(new Date(d));
    }

    return ret;
};
