// importing to parse callbacks to promise
const {
    promisify
} = require('util')

const getSandwich = (order) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            return resolve({
                order,
                name: "BBQ Burger",
                id: 1
            })

        }, 3000);

    })
}


const getIngredients = (sandwichId, callback) => {
    setTimeout(() => {
        return callback(null, ['Salsage', 'Bacon', 'Ketchup', 'Burger'])
        /* error function */
        // return callback("ERROR", null)
    }, 2000);
}
/** parsing to promise */
const getIngredientsPromise = promisify(getIngredients)


/** */
;
(() => {
    getSandwich(0001)
        .then(sandwich => {
            return getIngredientsPromise(sandwich.id)
                .then(ingredients => {
                    return {
                        sandwichName: sandwich.name,
                        ingredients
                    }
                })
        })
        .then(({
            sandwichName,
            ingredients
        }) => {
            console.log(`
            Sandwich: ${sandwichName}, 
            Ingredients: [${ingredients.join()}]
            `)

            console.log();
        })
        .catch(error => {
            console.error('Hmmm, something bad happened!', error)
        })
})();