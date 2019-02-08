export function correctBrackets(bracketsString: string) {
    // opening[b] - это открывающая скобка
    // !opening[b] - это закрывающая скобка

    const opening = {
        '(': ')',
        '<': '>',
        '[': ']',
        '{': '}',
    };

    const stack = [];

    return bracketsString.split('').every(b => {
        if (opening[b]) {
            stack.push(b);
        } else {
            const p = stack.pop();

            if (b !== opening[p]) {
                return false;
            }
        }

        return true;
    });
}
