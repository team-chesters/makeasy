export default function GetLocalStorageAsList(key){
    const list = localStorage.getItem(key);
    if (list === null) {
        return [];
    }

    return JSON.parse(list);
}