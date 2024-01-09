export default function getTimeStringWeekdayLocale(ts) {
    let date = new Date(ts * 1000);
    let options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        weekday: "short",
    };

    return new Intl.DateTimeFormat("ko-KR", options).format(date);
};
