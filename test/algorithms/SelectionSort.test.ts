import { selectionSort } from "../../src/algorithms/SelectionSort";

describe(selectionSort, () => {
    it("should sort an array of numbers in ascending order", () => {
        const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
        const sortedArray = [11, 12, 22, 25, 34, 64, 90];

        expect(selectionSort(unsortedArray)).toEqual(sortedArray);
    });
});