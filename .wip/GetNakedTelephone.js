export default function GetNakedTelephone(tel) {
    if (typeof tel == "string") {
        tel = tel.replaceAll(" ", "");
        tel = tel.replaceAll("-", "");
        tel = tel.replaceAll("(", "");
        tel = tel.replaceAll(")", "");
        tel = tel.replaceAll("+821", "01"); // +821X => 01X
        return tel;
    }
    return "";
};
