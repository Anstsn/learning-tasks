/**
 * Посчитать количество вхождений числа n
 * @param n число для подсчета
 * @param numbers строка или массив чисел для поиска
 */
export const countNumber = (n: number, numbers: string | number[]): number => {
    let arr = Array.isArray(numbers) ? numbers : numbers.split('');
    let result = 0;
    let count = 0;

    arr.forEach(num => {
        if (+num === n) {
            count++;
        } else {
            if (count > result) {
                result = count;
            }
            count = 0;
        }
    });

    return result;
}

/**
 * Генерация всех возможных скобочных последовательностей
 * @param n количество открывающихся скобок в последовательности
 */
export const generateBracketSequence = (count: number): string[] => {
    let resultArray = [];

    /**
     * Рекурсивная генерация скобочной последовательности
     * https://neerc.ifmo.ru/wiki/index.php?title=Правильные_скобочные_последовательности
     * 
     * @param n количество открывающихся скобок в последовательности
     * @param counterOpen количество открытых скобок
     * @param counterClose количество закрытых скобок
     * @param result строковое представление последовательности
     */
    const generateBracketSequenceRecoursive = (n: number, counterOpen: number, counterClose: number, result: string): void => {
        if (counterOpen + counterClose == 2 * n) {                
            resultArray.push(result);

            return;
        }
        
        if (counterOpen < n) {
            generateBracketSequenceRecoursive(n, counterOpen + 1, counterClose, result + '(')
        }    
    
        if (counterOpen > counterClose) {
            generateBracketSequenceRecoursive(n, counterOpen, counterClose + 1, result + ')')
        }    
    }
        
    generateBracketSequenceRecoursive(count, 0, 0, '');
    
    return resultArray;
}

export const traversalTree = (firstLevelElements): number => {
    const currRoots = [{next: firstLevelElements, index: 0}];
    let result = 0;

    while(currRoots.length) {
        const currRoot = currRoots[currRoots.length - 1]
        if(currRoot.index === currRoot.next.length) {
            currRoots.length--;
        } else {
            const item = currRoot.next[currRoot.index++]    
            // console.log('-'.repeat(currRoots.length - 1) + ' ' + item.value);

            result += item.value;

            if(item.next){
                currRoots.push({next: item.next, index: 0})
            }
        }
    }

    return result;
}   