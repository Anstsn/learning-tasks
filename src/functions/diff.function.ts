export const five = createNumericOperationFunction(5);
export const add = createNumericOperationFunction(0);
export const one = createNumericOperationFunction(1);
export const seven = createNumericOperationFunction(7);
export const two = createNumericOperationFunction(-2);
export const subtract = createNumericOperationFunction(0);

function createNumericOperationFunction(startValue: number): (value?: number) => number {
    return function (value?: number): number {
        return startValue + (value ? value : 0);
    }
}