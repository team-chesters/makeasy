import slotNo2hhmm from './slotNo2hhmm';

export default function ymdSlotNoToDate(yyyymmdd, slotno) {
    yyyymmdd = yyyymmdd + "";

    let date;
    try {
        date = new Date(
            yyyymmdd.replace(/(\d{4})-{0,1}(\d{2})-{0,1}(\d{2})/g, "$1-$2-$3") +
                " " +
                slotNo2hhmm(slotno)
        );
    } catch (e) {
        date = new Date("1980-01-01 00:00");
    }

    return date;
};