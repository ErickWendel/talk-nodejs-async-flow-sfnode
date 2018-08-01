const getSandwich = (order, callback) => {
    setTimeout(() => {
        return callback(null, {
            order,
            name: "BBQ Burger",
            id: 1
        })
    }, 3000);
}

const getIngredients = (sandwichId, callback) => {
    setTimeout(() => {
        return callback(null, ['Salsage', 'Bacon', 'Ketchup', 'Burger'])
    }, 2000);
}

/** */
;
(() => {
    getSandwich(0001, (error, sandwich) => {
        getIngredients(sandwich.id, (error2, ingredients) => {
            console.log(`
            Sandwich: ${sandwich.name}, 
            Ingredients: [${ingredients.join()}]
            `)

            console.log()
        })
    })
})();