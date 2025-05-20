export function quickSort<T>(array: T[]): T[] {

    if (array.length <= 1) {
        return array;
    }


    const pivot = array[array.length - 1];
    let l: T[] = [];
    let r: T[] = [];
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > pivot) {
            r.push(array[i]);
        } else {
            l.push(array[i]);
        }
    }

    return [...quickSort(l), pivot, ...quickSort(r)];
}

function anotherOption<T>(array: T[]): T[] {
    console.log(array);
    if (array.length <= 1) {
        return array;
    }

    let pivotIndex = array.length - 1;
    let pivot = array[pivotIndex];
    let minorThanPivotCounter = 0;

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] <= pivot) {
            [array[i], array[minorThanPivotCounter]] = [array[minorThanPivotCounter], array[i]];
            minorThanPivotCounter++;
        }
    }
    [array[minorThanPivotCounter], array[pivotIndex]] = [array[pivotIndex], array[minorThanPivotCounter]];



    return [...anotherOption(array.slice(0, minorThanPivotCounter)), pivot, ...anotherOption(array.slice(minorThanPivotCounter + 1))];
}



const numbers: number[] = [64, 34, 25, 12, 22, 11, 90];
// console.log(quickSort(numbers));
console.log(anotherOption(numbers));
