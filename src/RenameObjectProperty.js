export default function RenameObjectProperty(obj, before, after){
    if (obj.hasOwnProperty(before)) {
        obj[after] = obj[before];
        delete obj[before];
    }
};