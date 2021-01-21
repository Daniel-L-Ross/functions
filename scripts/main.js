import { calculateAgeInDogYears } from './DogYears.js'
import { favoriteBreed } from './BestInShow.js'

console.log("Welcome to the main module")

const dogAge = calculateAgeInDogYears(22)
console.log(`Age in dog years: ${dogAge}`)

const cat = favoriteBreed('meow');
const danFavorite = favoriteBreed('labradoodle');
console.log(cat)
console.log(danFavorite)