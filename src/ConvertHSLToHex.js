export default function ConvertHSLToHex(hue, saturation, lightness) {
    hue /= 360;
    saturation /= 100;
    lightness /= 100;
    
    let red, green, blue;

    const calculateRGB = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
    };

    if (saturation === 0) {
        red = green = blue = lightness;
    } else {
        const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
        const p = 2 * lightness - q;

        red = calculateRGB(p, q, hue + 1 / 3);
        green = calculateRGB(p, q, hue);
        blue = calculateRGB(p, q, hue - 1 / 3);
    }

    const toHex = (x) => {
        const hex = Math.round(x * 255).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };

    return `#${toHex(red)}${toHex(green)}${toHex(blue)}`;
};
