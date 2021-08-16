const holamundo = () => {
    const hola = 'Hola mundo';
    console.log(hola);
};

holamundo();
// console.log(hola);

var scope = 'Im global';

const functionScope = () => {
    var scope = 'I am just a local';
    const func = () => {
        return scope;
    };
    console.log(func());
}

functionScope();
console.log(scope);