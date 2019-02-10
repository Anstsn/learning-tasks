export const five = createNumericOperationFunction(5);
export const add = createNumericOperationFunction(0);
export const one = createNumericOperationFunction(1);
export const seven = createNumericOperationFunction(7);
export const two = createNumericOperationFunction(-2);
export const subtract = createNumericOperationFunction(0);

export function Person(name, age) {
    this.name = name;
    this.age = age;
}

export const myNew = (instance: Function, ...args): any => {
    const newInstance = Object.create({});

    instance.call(newInstance, ...args);

    newInstance.__proto__ = instance.prototype;

    return newInstance;
}

export const findSumOfAllValues = (objectWithValues: any): number => {
    return objectWithValues.value + findSumOfAllValuesRecoursive(objectWithValues.next);
}

export const flattern = (arr:any[]): any[] => {
    return arr.reduce((flat: any[], toFlattern) => {
        return flat.concat(Array.isArray(toFlattern) ? flattern(toFlattern) : toFlattern);
    }, []);
}

export const add2 = (a?: any) => {
    let sum = a;

    const func = (b?: any) => {
        if (b) {
            sum += b;
            return func;
        } else {
            return sum;
        }
    }

    return func;
}

export const add3 = (a?: any) => {
    let sum = a;

    const func = (b?: any) => {
        sum += b;
        return func;
    }

    func.valueOf = () => sum;

    return func;
}

export const zipArray = (arr: any[]): string => {
    const opArr = arr.map(n => +n).sort((a, b) => a - b);

    let result = [];
    let left = opArr[0];
    let right: number = undefined;
    

    for (let i = 0; i < opArr.length; i++) {
        if (opArr[i+1] - opArr[i] === 1) {
            right = opArr[i+1];
        } else if (opArr[i+1] === opArr[i]) {

        } else {
            result.push(`${left}${(right ? `-${right}` : '')}`);
            
            left = opArr[i+1];
            right = undefined;
        } 
    }

    return result.join();
}

export const isPalindrom = (str: string): boolean => {
    // const reg = /[^a-zA-Z]/g;
    const reg = /[\W_]/g;
    
    const except = str.replace(reg, "").toLowerCase();

    return except === except.split('').reverse().join('');
}

function findSumOfAllValuesRecoursive(array: any[]): number {
    let result = 0;

    array.forEach(o => {
        result += o.value;

        if (o['next']) {
            result += findSumOfAllValuesRecoursive(o.next);
        }
    });

    return result;
}

function createNumericOperationFunction(startValue: number): (value?: number) => number {
    return function (value?: number): number {
        return startValue + (value ? value : 0);
    }
}