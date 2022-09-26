// Write your solution here!
let cats = [`Milo`,`Otis`, `Garfield`];

function destructivelyAppendCat(){
    cats.push(`Ralph`)
};

function destructivelyPrependCat(){
    cats.unshift(`Bob`)
};

function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat (){
    const allCats = [...cats, `Broom`];
    return allCats
}

function prependCat(){
    const newCats = [`Arnold`, ...cats]
    return newCats
}

function removeLastCat() {
    let cuttingCats = cats.slice(0,-1);
    return cuttingCats;
};

function removeFirstCat(){
    let happyCats = cats.slice(1)
    return happyCats
}