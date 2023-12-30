export default function isEmpty(obj, ...params) {
    if (obj === null || obj === undefined) return true;

    let obj2 = obj;

    if (params.length > 0) {
        if (!Object.prototype.hasOwnProperty.call(obj, params[0])) return true;

        obj2 = obj[params[0]];
    }

    if (Array.isArray(obj2)) {
        if (obj2.length == 0) {
            return true;
        }
    } else {
        let type = typeof obj2;
        switch (type) {
            case "string":
                return !obj2 || obj2.length === 0;
            case "boolean":
                return obj2 == false;
            case "number":
                return obj2 == 0;
        }
    }

    return false;
};
