// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function beforeEach() {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield")
}

function destructivelyAppendCat(name = "Ralph") {
  return cats.push(name);
}

function destructivelyPrependCat(name = "Bob") {
    return cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    return cats.pop();
}

function destructivelyRemoveFirstCat(){
    return cats.shift();
}

function appendCat(name = "Broom") {
    return [...cats, name]
}

function prependCat(name = "Arnold") {
    return [name, ...cats]
}

function removeLastCat() {
    return cats.slice(0,cats.length -1 )
}

function removeFirstCat() {
    return cats.slice(1)
}