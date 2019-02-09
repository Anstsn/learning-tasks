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

export function myNew(instance: Function, ...args): any {
    const newInstance = Object.create({});

    instance.call(newInstance, ...args);

    newInstance.__proto__ = instance.prototype;

    return newInstance;
}

export function findSumOfAllValues(objectWithValues: any): number {
    return objectWithValues.value + findSumOfAllValuesRecoursive(objectWithValues.next);
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