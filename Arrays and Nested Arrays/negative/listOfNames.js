function printSortedNames(array){
    return array.sort( (a,b) => a.localeCompare(b)).map( (x, index) => `${++index}.${x}`).join('\n');
}

printSortedNames(["John", "Bob", "Christina", "Ema"]);