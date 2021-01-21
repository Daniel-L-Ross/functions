export const go = (direction, speed) => {
    let carData = `The car is moving ${direction} at ${speed} mph.`
    if (speed > 75) {
        carData += ' SLOW DOWN!'
    }
    return carData
}