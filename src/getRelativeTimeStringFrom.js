// 함수를 합칠까 고민하다가 하위 호환성을 위해 그대로 사용합니다.
// 과거만 판단하는 이유가 있지 않을까..
// 하나로 합치려면 아래 코드를 약간만 수정하면 됩니다.
const magicSwitch = function(isInPast) {
    return isInPast ? Math.floor : Math.ceil;
}

export default function getRelativeTimeStringFrom(date_ts) {
    if (date_ts == 0) return "";

    let milliSeconds = new Date() - new Date(date_ts * 1000);
    const isInPast = milliSeconds > 0;

    // 과거 시간은 기존 코드로 제어함
    if (isInPast) return getTimeStringFrom(date_ts)

    const direction = "후";
    const magic = magicSwitch(isInPast);

    milliSeconds = Math.abs(milliSeconds);
    const seconds = milliSeconds / 1000;
    if (seconds < 60) return '곧';

    const minutes = magic(seconds / 60);
    if (minutes < 60) return `${minutes}분 ${direction}`;

    const hours = magic(minutes / 60);
    if (hours < 24) return `${hours}시간 ${direction}`;

    const days = magic(hours / 24);
    if (days < 7) return `${days}일 ${direction}`;

    const weeks = magic(days / 7);
    if (weeks < 5) return `${weeks}주 ${direction}`;

    const months = magic(days / 30);
    if (months < 12) return `${months}개월 ${direction}`;

    const years = magic(days / 365);
    return `${years}년 ${direction}`;
};
