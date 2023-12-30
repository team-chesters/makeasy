export default function hhmm2min (t) {
    if (t == null) return 0;
    let tx = t.match(/(\d{2}):{0,1}(\d{2})/i);
    if (tx == null) return 0;

    return Number.parseInt(tx[1]) * 60 + Number.parseInt(tx[2]);
};
