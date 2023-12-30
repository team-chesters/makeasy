import GetLocalStorageAsList from './GetLocalStorageAsList';

export default function RemoveLocalStorageAsList(key, single) {
    try {
        let list = GetLocalStorageAsList(key);

        const filteredList = list.filter(item => item !== single);
        localStorage.setItem(key, JSON.stringify(filteredList));
    } catch (error) {
        console.error('An error occurred while removing data from local storage:', error);
    }
}
