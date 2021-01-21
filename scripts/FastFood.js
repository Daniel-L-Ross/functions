export const mealBuilder = (sandwich, side, drink, dessert, other) => {
    const comboMeal = {}
    comboMeal.sandwich = sandwich;
    comboMeal.side = side;
    comboMeal.drink = drink;
    comboMeal.dessert = dessert;
    return comboMeal
}