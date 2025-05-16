export function selectionSort<T>(array: T[]): T[] {

    for (let i = 0; i < array.length - 1; i++) {
        const index = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[index]) {
                [array[index], array[j]]= [array[j], array[index]]
            }
        }
    }
    return array;
}

const numbers: number[] = [7,12,9,11,3];
console.log(selectionSort(numbers));
