const data = {
    fronted: 'Ariel',
    backend: 'Juan',
    database: 'Maria',
    desing: 'Pedro',
}

//como transformar en una matriz o arreglo
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const values = Object.values(data);
console.log(values);
console.log(values.length);

const string = 'hola';
console.log(string.padStart(7, 'El '));
console.log(string.padEnd(15, ' como estas'));

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hola Hola'), 3000)
            : reject(new Error('Test Error'))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
    try {
       const hello = await helloWorld();
       console.log(hello);
    } catch (error) {
        console.log(error);
    };
};

anotherFunction();