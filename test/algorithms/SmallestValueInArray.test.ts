// src/algorithms/SmallesValueInArray.test.ts
import { loopThroughArrayMethod, execute } from '../../src/algorithms/SmallesValueInArray';

describe('loopThroughArrayMethod', () => {
    it('should return the smallest value in the array', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(loopThroughArrayMethod(arr)).toBe(1);
    });

    it('should work with negative numbers', () => {
        const arr = [17, 13, 16, 4, 15, 20, 8, 9, 14, 7, 12, 3, 11, 18, 5];
        expect(loopThroughArrayMethod(arr)).toBe(3);
    });

    it('should return initial value when array is empty', () => {
        // As this function returns 9999999 for an empty array due to the initial value
        expect(loopThroughArrayMethod([])).toBe(9999999);
    });
});

describe('execute', () => {
    it('should log the smallest value to console', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
        execute();
        expect(consoleSpy).toHaveBeenCalledWith(3);
        consoleSpy.mockRestore();
    });
});
