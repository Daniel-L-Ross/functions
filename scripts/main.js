import { calculateAgeInDogYears } from './DogYears.js'
import { favoriteBreed } from './BestInShow.js'
import { add } from './Add.js'

console.log("Welcome to the main module")

// DogYears test code
const dogAge = calculateAgeInDogYears(22)
console.log(`Age in dog years: ${dogAge}`)

// BestInShow test code
const cat = favoriteBreed('meow');
const danFavorite = favoriteBreed('labradoodle');
console.log(cat)
console.log(danFavorite)

// Addition test code
const addTwo = add(5, 6)
console.log(addTwo)

const addThree = add(17, 4, 11)
console.log(addThree)