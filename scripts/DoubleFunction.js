const words = [
    "The", "killing", "complex", "houses",
    "married", "kittens", "and", "single",
    "soldiers", "and", "their", "kleptomaniacal",
    "families"
]

const filterKWords = (wordsArray) => {
    let filteredWords = []

    for (const word of wordsArray) {
        if (word.startsWith('k')) {

        } else {
            filteredWords.push(word)
        }
    }

    return filteredWords
}

const newArray = filterKWords(words);

export const filteredSentance = () => {
    const sentance = newArray.join(' ');
    return sentance
}