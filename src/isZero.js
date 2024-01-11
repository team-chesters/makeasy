import isEmpty from './isEmpty';

export default function isZero (int) {
    if (isEmpty(int)) return null;

    return Math.sign(int) === 0 || Math.sign(int) === -0;
};