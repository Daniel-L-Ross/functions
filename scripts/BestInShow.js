export const favoriteBreed = (breed) => {
    let myFavorite = ""
    if (breed === 'meow'){
        myFavorite += 'I Like cats'
    } else {
        myFavorite+= `My favorite dog breed is ${breed}`
    }
    // console.log(myFavorite)
    return myFavorite
}
