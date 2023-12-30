export default function hhmm2slotNoByDuration(t, duration) {
    if (t == null) return -1;
    let tx = t.match(/(\d{2}):{0,1}(\d{2})/i);
    if (tx == null) return -1;

    let num_slot_in_hour = Number.parseInt(60 / duration);

    let idx = Number.parseInt(tx[1]) * num_slot_in_hour;
    idx += Number.parseInt(Number.parseInt(tx[2]) / duration);

    return idx;
};
