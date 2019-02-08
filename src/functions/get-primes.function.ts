export function getPrimes(n: number): number[] {
    const result = [];

    Array.from(Array(n + 2).keys()).forEach(i => {
        if (isPrime(i)) {
            result.push(i);
        }
    });

    return result;
}

function isPrime(n: number): boolean {
    if (n < 2) {
        // option
        return false;
    }
    if (n <= 3) {
        return true;
    } else if (n % 2 === 0 || n % 3 === 0) {
        return false;
    }

    // далее проверяем каждое нечетное число,
    // которое не делится на 3,
    // пока оно не станет больше квадратного корня из числа.

    let i = 5;

    while (i * i <= n) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }

        i += 6;
    }

    return true;
}
