export default function DateIntToId(dint) {
    let date_regexp = new RegExp(/([0-9]{4})-{0,1}([0-9]{2})-{0,1}([0-9]{2})/);
    let date_found = date_regexp.exec(dint);
    if (Len(date_found) >= 3) {
        return date_found[1] + "-" + date_found[2] + "-" + date_found[3];
    } else {
        return "0000-00-00";
    }
};
