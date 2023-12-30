import GetSessionStorageAsList from './GetSessionStorageAsList';

export default function RemoveSessionStorageAsList(key, single) {
    try {
        let list = GetSessionStorageAsList(key);

        const filteredList = list.filter(item => item !== single);
        localStorage.setItem(key, JSON.stringify(filteredList));
    } catch (error) {
        console.error('An error occurred while removing data from session storage:', error);
    }
}
