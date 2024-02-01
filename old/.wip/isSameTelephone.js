import GetNakedTelephone from "./GetNakedTelephone";

export default function isSameTelephone(tel1, tel2) {
    return GetNakedTelephone(tel1) == GetNakedTelephone(tel2);
};
