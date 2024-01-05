import GetNakedTelephone from "../locale.ko-KR/GetNakedTelephone";

export default function isSameTelephone(tel1, tel2) {
    return GetNakedTelephone(tel1) == GetNakedTelephone(tel2);
};
