export default function GetDayDiffNow(ts) {
    let tsDate = new Date(ts * 1000);
    let tsDateBegin = new Date(
        tsDate.getFullYear(),
        tsDate.getMonth(),
        tsDate.getDate(),
        0,
        0,
        0,
        0
    );
    let now = new Date();
    let nowBegin = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        0,
        0,
        0,
        0
    );

    return Number.parseInt(
        (tsDateBegin.getTime() - nowBegin.getTime()) / ONE_DAY_MS
    );
};
