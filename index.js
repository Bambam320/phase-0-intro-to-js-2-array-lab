const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    return cats.unshift("Bob");
}

function destructivelyRemoveLastCat(name) {
    return cats.pop();
}

function destructivelyRemoveFirstCat(name) {
    return cats.shift();
}

function appendCat(name) {
    let append = [...cats, name];
    return append;
}

function prependCat(name) {
    let prepend = [name, ...cats];
    return prepend;
}

function removeLastCat() {
  const catL = [...cats];
  const catLast = catL.splice(0,2);
    return catLast;
}

function removeFirstCat() {
    const catF = [...cats];
    const catFirst = catF.splice(1,2);
    return catFirst
  }