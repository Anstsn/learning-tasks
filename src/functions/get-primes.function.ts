/**
 * Получить массив простых чисел до заданного числа
 *
 * @export
 * @param {number} n заданное число
 * @returns {number[]}
 */
export function getPrimes(n: number): number[] {
    const result = [];

    Array.from(Array(n + 2).keys()).forEach(i => {
        if (isPrime2(i)) {
            result.push(i);
        }
    });

    return result;
}

/**
 * Получить массив простых чисел в количестве n штук
 * (используются js-генераторы)
 *
 * @export
 * @param {number} count количество чисел
 * @returns {number[]}
 */
export function getPrimes2(count: number): number[] {
    return [...take(count, getPrimesSequence())];
}

/**
 * Проверка числа на простое число
 *
 * @param {number} n проверяемое число
 * @returns {boolean}
 */
function isPrime2(n: number): boolean {
    if (n === 0 || n === 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

/**
 * Генератор.
 * Последовательность простых чисел
 */
function* getPrimesSequence() {
    let n = 2;

    while (true) {
        if (isPrime2(n)) {
            yield n;
        }

        n++;
    }
}

/**
 * Взять из последовательности n-чисел
 * @param length количество чисел
 * @param iterable последовательность
 */
function* take(length: number, iterable: any) {
    for (const x of iterable) {
        if (length <= 0) {
            return;
        }

        length--;

        yield x;
    }
}
