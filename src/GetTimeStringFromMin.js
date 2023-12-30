export default function GetTimeStringFromMin(mm) {
    let hc = Number.parseInt(mm / 60);
    let mc = Number.parseInt(mm % 60);

    if (hc == 0) return mc + "분";
    else {
        if (mc == 0) return hc + "시간";
        else return hc + "시간 " + mc + "분";
    }
};
