export default function GetTommorrow (t_date = new Date()) {
    return new Date(t_date.getTime() + 86400000);
};
