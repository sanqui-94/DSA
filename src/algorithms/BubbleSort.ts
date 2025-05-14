export function bubbleSort<T>(array: T[]): T[] {
  const length: number = array.length;

  for (let i:number = 0; i < length; i++) {
    let swapped: boolean = false;
    for (let j: number = 0; j < length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j+1], array[j]];
        swapped = true;
      }
    }
    if (!swapped) {
      break; // If no two elements were swapped, the array is sorted
    }
  }

  return array;
}

const numbers: number[] = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(numbers));
