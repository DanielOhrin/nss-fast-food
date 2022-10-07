const rawIngredients = [ "beef patty", "egg", "potato", "egg", "potato", "beef patty", "beef patty", "potato" ]
const finishedFood = []

for (const ingredient of rawIngredients) {
    if (ingredient === "egg") {
        finishedFood.push('biscuit');
    } else if (ingredient === "beef patty") {
        finishedFood.push('burger');
    } else if (ingredient === "potato") {
        finishedFood.push('fries')
    }
}

console.log(finishedFood)
