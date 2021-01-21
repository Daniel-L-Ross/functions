

// mathmatic examples of higher level functons
export const twice = number => number * 2;
export const timesFive = number => number * 5;
export const square = number => number * number;

export const embiggen = (number, operationFunction) => {
    const result = operationFunction(number)
    return result
}