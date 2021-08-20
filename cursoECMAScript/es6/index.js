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
