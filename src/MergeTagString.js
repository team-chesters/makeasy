export default function MergeTagString (tagList) {
    let tags = tagList.map((el) => "#" + el.trim());

    return tags.join(" ");
};
