export function loopThroughArrayMethod(array: number[]) {
    let smallestValue = 9999999;
    for (let i in array) {
        if (array[i] < smallestValue)
            smallestValue = array[i];
    }
    return smallestValue;
}

// export function bubbleSortMethod(array: number[]) {
//     let smallestValue = 9999999;
// }

export function execute() {
    let array: number[] = [];
    array = [17, 13, 16, 4, 15, 20, 8, 9, 14, 7, 12, 3, 11, 18, 5];
    console.log(loopThroughArrayMethod(array));
}

