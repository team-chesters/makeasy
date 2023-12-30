import isEmpty from "./isEmpty";

export default function SplitTagString(tagStr) {
    if (isEmpty(tagStr)) return [];
        
    let tags = tagStr.split("#").slice(1);
    for (let i in tags) {
        tags[i] = tags[i].trim();
    }
    return tags;
};
