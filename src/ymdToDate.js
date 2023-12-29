export default function ymdToDate(yyyymmdd, hhmm = "00:00", ss = "00") {
    yyyymmdd = yyyymmdd + "";
    hhmm = hhmm + "";

    let date;
    try {
        date = new Date(
            yyyymmdd.replace(/(\d{4})-{0,1}(\d{2})-{0,1}(\d{2})/g, "$1-$2-$3") +
            " " +
            hhmm.replace(/(\d{2}):{0,1}(\d{2})/g, "$1:$2") +
            ":" + ss
        );
    } catch (e) {
        date = new Date("1980-01-01 00:00:00");
    }

    return date;
};
