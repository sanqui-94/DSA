function fibonacci(n: number) {
    if (n < 0) {
        throw new RangeError("Input must be a non-negative integer");
    }

    if (n <= 1) {
        return n;
    }

    let a = 0;
    let b = 1;
    let result = 0;
    for(let i = 2; i <= n; i++) {
        result = a + b;
        a = b;
        b = result;
    }

    return result;
}

export function generateFibonacci(n: number) {
    const numbers: number[] = [];
    for (let i = 0; i < n; i++) {
        numbers.push(fibonacci(i));
    }

    return numbers;
}