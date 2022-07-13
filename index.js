// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
cats.push(`${name}`)
};

function destructivelyPrependCat(name) {
    cats.unshift(`${name}`)
}

function destructivelyRemoveLastCat(name) {
    cats.pop(`${name}`)
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(`${name}`)
}

function appendCat(name) {
    console.log(name)
    const newCatsArray = [...cats, name]
    return newCatsArray
}

function prependCat(name) {
    console.log(name)
    const newnewCatsArray = [name, ...cats]
    return newnewCatsArray
}

function removeLastCat(name) {
    console.log(name)
    const newnewnewCatsArray = cats.slice(0, -1)
    return newnewnewCatsArray
}

function removeFirstCat(name) {
    console.log(name)
    const newnewnewnewCatsArray = cats.slice(1)
    return newnewnewnewCatsArray
}