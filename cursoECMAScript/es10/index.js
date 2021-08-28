let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat(2));

let array2 = [1, 2, 3, 4, 5];

console.log(array2.flatMap(value => [value, value * 2]));

let hello = '   Hello World   ';

hello = hello.trimStart();
hello = hello.trimEnd();

console.log(hello);

try {
    throw 'error';
} catch (error) {
    console.log(error);
}

let entries = [['name', 'Andrey'], ['age', 30]];
console.log(entries);
console.log(Object.fromEntries(entries));

let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);