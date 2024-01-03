/**
 * Escapes special characters in a string to their respective HTML entities.
 * 
 * @param {string} string - The string to escape.
 * @returns {string} Returns the string with escaped HTML entities.
 */

export default function EscapeHTML(string) {
    const entityMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "/",
        "`": "&#x60;",
        "=": "&#x3D;",
    };

    return String(string).replace(/[&<>"'`=]/g, function (s) {
        if (s === '/') {
            return entityMap[s];
        }

        return entityMap[s];
    });
};
