import {
    isBinaryOperation,
    isClosingBracket,
    isLiteral,
    isNumber,
    isOpeningBracket,
    isPostfixFunction,
    isVariable,
} from './RPN.utils.function';

export const toReversePolishEntry = (infixNotation: string, variables?: any[]): string => {
    const infixNotationArray = infixNotation.replace(/\s/g, '').split('');

    let result = '';
    const stack = [];

    const getSymbolFromStack = () => {
        return stack.pop();
    };

    const checkTopStackSymbol = (symbol: string): boolean => {
        const topStack = stack[stack.length - 1];

        // приоритетнее
        if ((topStack === '*' || topStack === '/') && (symbol === '+' || symbol === '-')) {
            return true;
        }

        // одинаковые приоритеты
        if ((topStack === '*' || topStack === '/') && (symbol === '*' || symbol === '/') ||
            (topStack === '+' || topStack === '-') && (symbol === '+' || symbol === '-')) {
            return true;
        }

        return false;
    };

    while (infixNotationArray.length) {
        let symbol = infixNotationArray.shift();

        while (infixNotationArray.length > 0 && isLiteral(symbol) && isLiteral(infixNotationArray[0])) {
            symbol += infixNotationArray.shift();
        }

        if (isNumber(symbol) || isPostfixFunction(symbol) || isVariable(symbol)) {
            result += symbol;
        } else if (isOpeningBracket(symbol)) {
            stack.push(symbol);
        } else if (isClosingBracket(symbol)) {
            let symbolFromStack = getSymbolFromStack();

            while (symbolFromStack !== '(') {
                result += symbolFromStack;

                symbolFromStack = getSymbolFromStack();
            }
        } else if (isBinaryOperation(symbol)) {
            while (checkTopStackSymbol(symbol)) {
                result += getSymbolFromStack();
            }

            stack.push(symbol);
        }
    }

    while (stack.length) {
        result += getSymbolFromStack();
    }

    if (variables && variables.length) {
        variables.forEach(variable => {
            result = result.replace(variable.name, variable.value);
        });
    }

    return result;
};
