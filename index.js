// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}

function  destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
    return cats;
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
    return cats;
}
function appendCat(name) {
    const coolCats = [...cats, name];
    return coolCats;
}

function prependCat(name) {
    const coolCats = [name, ...cats];
    return coolCats;
}

function removeLastCat(name) {
    const kats = cats.slice(0, cats.length -1);
    return kats;
}


function removeFirstCat(name) {
    const kats = cats.slice(1);
    return kats;
}























// const cats = ["Milo", "Otis", "Garfield"];

// function destructivelyAppendCat(name) {
//     cats.push(name);
//     return cats;
// }

// function destructivelyPrependCat(name) {
//     cats.unshift(name);
//     return cats;
// }

// function destructivelyRemoveLastCat(name) {
//     cats.pop(name);
//     return cats;
// }

// function destructivelyRemoveFirstCat(name) {
//     cats.shift(name);
//     return cats;
// }

// function appendCat(name) {
//     const name_1 = [...cats, name];
//     return name_1;
// }

// function prependCat(name){
//     const name_2 = [name, ...cats];
//     return name_2;
// }

// function removeLastCat() {
//     const kats = cats.slice(0, cats.length-1);
//     return kats;
// }

// function removeFirstCat() {
//     const kats = cats.slice(1);
//     return kats;
// }
