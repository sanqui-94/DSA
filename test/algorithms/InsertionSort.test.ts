import {insertionSort} from "../../src/algorithms/InsertionSort";

describe("insertionSort", () => {
    it("should sort an array of numbers", () => {
        const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
        const sortedArray = [11, 12, 22, 25, 34, 64, 90];
        expect(insertionSort(unsortedArray)).toEqual(sortedArray);
    });
});
