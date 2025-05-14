import {generateFibonacci} from "../../src/algorithms/Fibonacci";

describe("Fibonacci", () => {

    it("generates the first 10 Fibonacci numbers", () => {
        // Arrange
        const expected = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
        const n = 10;

        // Act
        const actual = generateFibonacci(n);

        // Assert
        expect(actual).toEqual(expected);
    });

    it("returns an empty array for n = 0", () => {
        // Adjust expected output based on your design
        expect(generateFibonacci(0)).toEqual([]);
    });

    it("returns [0] for n = 1", () => {
        expect(generateFibonacci(1)).toEqual([0]);
    });

    it("returns [0, 1] for n = 2", () => {
        expect(generateFibonacci(2)).toEqual([0, 1]);
    });

    it("handles negative input gracefully", () => {
        // Either throw an error or return an empty array based on your design
        expect(generateFibonacci(-5)).toEqual([]);
    });

    it("generates the correct sequence for a larger number", () => {
        const expected = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377];
        expect(generateFibonacci(15)).toEqual(expected);
    });

    // Optional: If non-integer values are valid input
    it("handles non-integer input appropriately", () => {
        // Depending on your implementation, decide whether to round, throw an error, etc.
        // For example, if you round down:
        expect(generateFibonacci(4.5)).toEqual([0, 1, 1, 2, 3]);
    });
})
