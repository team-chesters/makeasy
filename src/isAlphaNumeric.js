export default function isAlphaNumeric (str) {
    const regEx = /^[0-9a-zA-Z \!\@\#\$\%\^\&\*\(\)]+$/;
    
    if (str.match(regEx)) return true;
    return false;
};
