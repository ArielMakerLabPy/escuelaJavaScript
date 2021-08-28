const obj = {
    nombre: 'John',
    age: 30,
    country: 'USA',
};

let {country, ...all} = obj;
console.log(all);

const obj1 = {
    nombre: 'John',
    age: 30,
};

const obj2 = {
    ...obj1,
    country: 'USA',
};

console.log(obj2);

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello world'), 3000)
            : reject(new Error('Test error'));
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'));



const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2020-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);

