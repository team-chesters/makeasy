export default function hhmm2slotNo30min (t) {
    if (t == null) return -1;
    let tx = t.match(/(\d{2}):{0,1}(\d{2})/i);
    if (tx == null) return -1;

    let idx = Number.parseInt(tx[1]) * 2;
    if (Number.parseInt(tx[2]) != 0) idx++;

    return idx;
};
