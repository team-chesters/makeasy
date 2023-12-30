import ymdToDate from "./ymdToDate";

export default function ymdhhmmToDate(dstr) {
    dstr = dstr + "";
    let ddp = dstr.split(" ");
    if (Len(ddp) >= 2) {
        return ymdToDate(ddp[0], ddp[1]);
    } else {
        return ymdToDate(ddp[0]);
    }
};