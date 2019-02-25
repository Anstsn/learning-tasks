export const isLiteral = (symbol: string): boolean => {
    return /^[a-zA-Z]+$/.test(symbol);
};

export const isNumber = (symbol: string): boolean => {
    return /\d/.test(symbol);
};

export const isVariable = (symbol: string): boolean => {
    return /^[a-zA-Z_$][a-zA-Z_$0-9]*$/.test(symbol);
};

export const isPostfixFunction = (symbol: string): boolean => {
    return /[!]/.test(symbol);
};

export const isPrefixFunction = (symbol: string): boolean => {
    return true;
};

export const isOpeningBracket = (symbol: string): boolean => {
    return symbol === '(';
};

export const isClosingBracket = (symbol: string): boolean => {
    return symbol === ')';
};

export const isBinaryOperation = (symbol: string): boolean => {
    return /[+-/*]/.test(symbol);
};
