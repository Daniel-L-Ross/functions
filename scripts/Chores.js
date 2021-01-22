// chores functions

export const danobj = {
    firstName: 'Dan',
    lastName: 'Ross',
}

export const washDishes = (personObj) => {
    return `${personObj.firstName} ${personObj.lastName} washed the dishes`
}
export const emptyRecycling = (personObj) => {
    return `${personObj.firstName} ${personObj.lastName} emptied the recycling bin`
}
export const emptyTrash = (personObj) => {
    return `${personObj.firstName} ${personObj.lastName} emptied the trash can`
}
export const getMail = (personObj) => {
    return `${personObj.firstName} ${personObj.lastName} got the mail`
}
export const payRent = (personObj) => {
    return `${personObj.firstName} ${personObj.lastName} paid the rent`
}
export const sweepFloor = (personObj) => {
    return `${personObj.firstName} ${personObj.lastName} swept the floor`
}

export const dayPlanner = (firstChore, secondChore, thirdChore, person, day) => {
    return `On ${day}, ${firstChore(person)}, and ${secondChore(person)}, and ${thirdChore(person)}.`
}


// mathmatic examples of higher level functons
export const twice = number => number * 2;
export const timesFive = number => number * 5;
export const square = number => number * number;

export const embiggen = (number, operationFunction) => {
    const result = operationFunction(number)
    return result
}