require('draftlog').call(null, console)

const {
    yellow,
    red,
    green
} = require('chalk')

const draft = console.draft();
const mainText = []

const print = async (text, time) => {
    return new Promise(resolve =>
        setTimeout(() => {
            mainText.push(text)
            draft(...mainText)
        }, time))
}

const printText_Javascript = async () => {
    const text = 'Javascript '
    return print(yellow(text), 1000)
}

const printText_Awesome = async () => {
    const text = ' awesome'
    return print(green(text), 2000)
}

const printText_Is = async () => {
    const text = ' is'
    return print(red(text), 3000)
}


/** */
;
(async () => {
    printText_Javascript()
    printText_Is()
    printText_Awesome()
})()