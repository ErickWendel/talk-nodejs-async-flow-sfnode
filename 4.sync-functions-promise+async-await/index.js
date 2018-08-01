// importing to parse callbacks to promise
const {
    promisify
} = require('util')

const getSandwich = (order, callback) => {
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
(async () => {
    try {
        const {
            id,
            name
        } = await getSandwich(0001)
        const ingredients = await getIngredientsPromise(id)

        console.log(`
                Sandwich: ${name}, 
                Ingredients: [${ingredients.join()}]
                `)
        console.log();

    } catch (error) {
        console.error('Hmm, something bad happened :(', error)
    }


})();