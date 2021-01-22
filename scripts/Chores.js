// chores functions
const washDishes = (personObj) => {
    return `${personObj.firstName} ${personObj.lastName} washed the dishes.`
}
const emptyRecycling = (personObj) => {
    return `${personObj.firstName} ${personObj.lastName} emptied the recycling bin.`
}
const emptyTrash = (personObj) => {
    return `${personObj.firstName} ${personObj.lastName} emptied the trash can.`
}
const getMail = (personObj) => {
    return `${personObj.firstName} ${personObj.lastName} got the mail.`
}
const payRent = (personObj) => {
    return `${personObj.firstName} ${personObj.lastName} paid the rent.`
}
const sweepFloor = (personObj) => {
    return `${personObj.firstName} ${personObj.lastName} swept the floor.`
}


// mathmatic examples of higher level functons
export const twice = number => number * 2;
export const timesFive = number => number * 5;
export const square = number => number * number;

export const embiggen = (number, operationFunction) => {
    const result = operationFunction(number)
    return result
}