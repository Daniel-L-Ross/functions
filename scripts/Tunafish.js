export const goFish = (numInput) => {
    const chance = Math.random() * numInput;
    console.log(chance);
    if (chance < 1) { 
        return 'Sven hooked a tuna! :)'
    } else {
        return 'Sven came up empty-handed. :('
    }
}