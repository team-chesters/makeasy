export default function GetSessionStorageAsList(key){
    const list = sessionStorage.getItem(key);
    if (list === null) {
        return [];
    }

    return JSON.parse(list);
}