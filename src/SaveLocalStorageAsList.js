import GetLocalStorageAsList from './GetLocalStorageAsList';

export default function SaveLocalStorageAsList(key, single) {
    try {
        let list = GetLocalStorageAsList(key);
        list.push(single);

        const uniqueList = [...new Set(list)];
        localStorage.setItem(key, JSON.stringify(uniqueList));
    } catch (error) {
        console.error('An error occurred while storing data in local storage:', error);
    }
};
