import { calculateAgeInDogYears } from './DogYears.js'
import { favoriteBreed } from './BestInShow.js'
import { add } from './Add.js'
import { go } from './SelfDrivingCar.js'
import { evenOddCheck, numberArray } from './EvenOrOdd.js'
import { filteredSentance } from './DoubleFunction.js'
import { goFish } from './Tunafish.js'
import { mealBuilder } from './FastFood.js'
import {twice, timesFive, square, embiggen, danobj, washDishes, emptyRecycling, emptyTrash, getMail, payRent, sweepFloor, dayPlanner } from "./Chores.js"


// DogYears test code
// const dogAge = calculateAgeInDogYears(22);
// console.log(`Age in dog years: ${dogAge}`);

        // BestInShow test code
// const cat = favoriteBreed('meow');
// const danFavorite = favoriteBreed('labradoodle');
// console.log(cat);
// console.log(danFavorite);

        // Addition test code
// const addTwo = add(5, 6);
// console.log(addTwo);

// const addThree = add(17, 4, 11);
// console.log(addThree);

        // self driving car test code
// const roadster = go('forward', 80);
// console.log(roadster);

// const prius = go('backwards', 5);
// console.log(prius);

        // Odd or even test code
// const five = evenOddCheck(5);
// console.log(five);

// const four = evenOddCheck(4);
// console.log(four);

// for (const taco of numberArray) {
//     console.log(evenOddCheck(taco))
// }

        // Double Function test code
// console.log(filteredSentance())

// console.log(goFish(3))

        // fast food builder
// const danMeal = mealBuilder('Spicy Chicken Sandwich', 'Medium Fry', 'Lemonade', 'Oreo Milkshake' );
// console.log(danMeal);

        // chores-- mathmatic tests
// const number = 10;
// const by2 = embiggen(number, twice)
// const by5 = embiggen(number, timesFive)
// const byItself = embiggen(number, square)
// console.log(by2, by5, byItself)

        // chores main tests
const busyWeekend = dayPlanner(getMail, emptyTrash, washDishes, danobj, 'Saturday')
console.log(busyWeekend)