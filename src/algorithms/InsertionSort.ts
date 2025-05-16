export function insertionSort<T>(array: T[]): T[] {
    if (array.length === 0 || array.length === 1) return array;

    let length = array.length;

    for (let i = 1; i < length; i++) {
        let insertIndex = i;
        const current = array[i];
        for (let j = i - 1; j > -1; j--) {
            if (array[j] > current) {
                array[j + 1] = array[j];
                insertIndex = j;
            } else {
                break;
            }
            array[insertIndex] = current;
        }
    }

    return array;
}

const numbers: number[] = [7, 12, 9, 11, 3];
console.log(insertionSort(numbers));
