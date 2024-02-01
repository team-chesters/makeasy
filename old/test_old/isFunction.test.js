import isFunction from '../old/src_old/isFunction';

describe('isFunction function', () => {
    it('returns true for a function', () => {
        const testFunc = () => {};
        expect(isFunction(testFunc)).toBe(true);
    });

    it('returns false for a non-function', () => {
        expect(isFunction(5)).toBe(false);
        expect(isFunction('function')).toBe(false);
        expect(isFunction({})).toBe(false);
        expect(isFunction(null)).toBe(false);
        expect(isFunction(undefined)).toBe(false);
    });
});
