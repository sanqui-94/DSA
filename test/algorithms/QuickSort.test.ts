import { quickSort } from "../../src/algorithms/QuickSort";

describe("quickSort", () => {
    it("should sort an array of numbers in ascending order", () => {
        const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
        const sortedArray = [11, 12, 22, 25, 34, 64, 90];

        expect(quickSort(unsortedArray)).toEqual(sortedArray);
    });
});
