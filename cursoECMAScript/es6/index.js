//Versión anterior como agregar datos a variables de nuestra función
function newFunction(name, age, country) {
  var name = name || 'John Doe';
  var age = age || 30;
  var country = country || 'PY';
  console.log(name, age, country);
}

//es6 para agregar datos a variables de nuestra función y tener variables por defecto
function newFunction2(name = 'John Doe', age = 30, country = 'PY') {
  console.log(name, age, country);
}

newFunction2();
newFunction2('Ricardo Prada', 40, 'BR');
//nuevas formas de llamar a variables dentro de texto utilizando ${} y comillas francesas ``
let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit \n'
+ 'frase epica que necesitamos'

let lorem2 = `Otra frase necesaria para probar un punto aparte
Y seguimos escribiendo en la parte de abajo`;

console.log(lorem);
console.log(lorem2);

let person = {
  'name': 'John Doe',
  'age': 30,
  'country': 'PY',
};

console.log(person.name, person.age, person.country);

let { name, age, } = person;
console.log(name, age);

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Camila', 'Andres'];

let education = ['David', ...team1, ...team2];
console.log(education);

{
  var globalVar = 'Global Var';

}
// {
//   let globalLet = 'Global Let';
// }

console.log(globalVar);
//console.log(globalLet);

const a = 'b';
//a = 'a';
console.log(a);

let nombre = 'Ariel';
let edad = 34;

obj = {nombre: nombre, edad: edad};

obj2 = {nombre, edad};
console.log(obj2);

const names = [
  {nombre: 'Ariel', edad: 34},
  {nombre: 'Julian', edad: 35},
]

let listOfNombres = names.map(function(item) {
  console.log(item.nombre);
});

let listOfNombres2 = names.map(item => console.log(item.nombre));

const square = num => num * num;

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Hello Promise');
    } else {
      reject('Error');
    }
  });
};

helloPromise()
  .then(response => console.log(response))
  .catch(error => console.log(error));

//Trabajando con clases
class calculator {
  constructor(a, b) {
    this.valueA = 0;
    this.valueB = 0;
  }

  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator();
console.log(calc.sum(3, 2));

// import {hello} from './module';

// hello();


function* helloWorld() {
  if (true) {
    yield 'Hello ';
  }
  if (true) {
    yield 'World';
  }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

