import getNakedTelephone from "./GetNakedTelephone";

export default function isTelephone(phone) {
    let nakedTel = getNakedTelephone(phone);
    let regexp = new RegExp(/^(0\d{1}|0\d{2})(\d{4}|\d{3})(\d{4})$/);
    
    return regexp.test(nakedTel);
};
