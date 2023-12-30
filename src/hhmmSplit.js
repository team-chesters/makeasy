export default function hhmmSplit (t) {
    let tx = t.match(/(\d{2}):{0,1}(\d{2})/i);
    if (tx == null) return 0;

    return {
        hh: Number.parseInt(tx[1]),
        mm: Number.parseInt(tx[2]),
    };
};
