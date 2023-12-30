import GetSessionStorageAsList from './GetSessionStorageAsList';

export default function SaveSessionStorageAsList(key, single) {
    try {
        let list = GetSessionStorageAsList(key);
        list.push(single);

        const uniqueList = [...new Set(list)];
        localStorage.setItem(key, JSON.stringify(uniqueList));
    } catch (error) {
        console.error('An error occurred while storing data in session storage:', error);
    }
};
