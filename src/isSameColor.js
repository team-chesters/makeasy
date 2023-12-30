export default function isSameColor (color1, color2) {
    if (isEmpty(color1) || isEmpty(color2)) return false;

    return color1.toUpperCase() == color2.toUpperCase();
};
