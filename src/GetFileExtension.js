export default function GetFileExtension(file_name) {
    file_name += "";
    return file_name.slice(
        (Math.max(0, file_name.lastIndexOf(".")) || Infinity) + 1
    );
};
