const message = 'Hello world' // Try edit me

// Update header text
document.querySelector('#header').innerHTML = message

// Log to console
console.log(message);


/////////////////////////////////////////////////////////////////////////////

function createCalculator(){
  //Esta variable almacena el total actual de la calculadora
  let total = 0;

  //Ahora la función devuelve un objeto con los métodos de la calculadora
  return {

    //Este método suma un número al total y devuelve el resultado

    add: function(number){
      total += number;
      return total;
    },
    
    //Este método resta un número al total y devuelve el resultado

    subtract: function(number){
      total -= number;
      return total;
    },

    //Este método multiplica un número por el total y devuelve el resultado

    multiply: function(number){
      total *= number;
      return total;
    },

    //Este método divide el total entre un número y devuelve el resultado

    divide: function(number){
      total /= number;
      return total;
    },

    //Este método reinicia el total a 0 y devuelve el resultado
    clear: function(number){
    	total = 0;
      return total;
    },
    
    //Este metodo devuelve el total actual
    getTotal: function(){
    	return total;
    }
    
  };
};

//const calculator = createCalculator()
//calculator.add(10)

//const calculator = createCalculator()
//calculator.add(10)
//calculator.subtract(-10)

const calculator = createCalculator()
console.log(calculator.add(10))
console.log(calculator.subtract(-10))
console.log(calculator.clear())


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(function(number) {
  return number * 2;
});
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
console.log(numbers) 


const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});
console.log(evenNumbers); 


//Definir la función myMap que recibe un array y una función como parámetros

function myMap (array, func){

    //Crear un nuevo array vacío para almacenar los resultados
    let result = [];

    //recorrer cada elemento del array original con un bucle for
    for (let i = 0; i < array.length; i++){

        //Aplicar la función al elemento actual y guardar el resultado en una variable
        let value  = func(array[i]);

        //Añadir el resultado al nuevo array
        result.push(value);
    }

    //devolver el nuevo array
    return result;
}

let input1 = [1, 2, 3, 4];
let output1 = myMap(input1, (num) => num*2);
console.log(output1);