export default function GetMeanLazyString(sec) {
    let is_neg = sec < 0;

    let seconds = Math.abs(sec);

    if (seconds < 60)
        return is_neg ? `-${seconds}초` : `${seconds}초`;

    const minutes = seconds / 60;

    if (minutes < 60)
        return is_neg ? `-${Math.floor(minutes)}분` : `${Math.floor(minutes)}분`;

    const hours = minutes / 60;
    return is_neg ? `-${Math.floor(hours) / 10}시간` : `${Math.floor(hours) / 10}시간`;
};
