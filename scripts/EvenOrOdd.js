export const evenOddCheck = (a) => {
    let result = "";
    if(a % 2 === 0) {
        result += "Even"
    } else if (a % 2 !== 0) {
        result += "Odd"
    } 
    return result
}

export const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0];