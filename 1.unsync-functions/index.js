const getSandwich = (order) => {
    setTimeout(() => {
        return {
            order,
            name: "BBQ Burger",
            id: 1
        }
    }, 3000);
}

const getIngredients = (sandwichId) => {
    setTimeout(() => {
        return ['Salsage', 'Bacon', 'Ketchup', 'Burger']
    }, 2000);
}

/** */
;
(() => {
    const sandwich = getSandwich(0001)
    const ingredients = getIngredients(sandwich.id)

    console.log(`Sandwich: ${sandwich.name}, 
                 Ingredients: [${ingredients.join()}]`)

    console.log()
})();