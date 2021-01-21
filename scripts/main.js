import { calculateAgeInDogYears } from './DogYears.js'
import { favoriteBreed } from './BestInShow.js'
import { add } from './Add.js'
import { go } from './SelfDrivingCar.js'

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

// self driving car test code
const roadster = go('forward', 80)
console.log(roadster)

const prius = go('backwards', 5)
console.log(prius)