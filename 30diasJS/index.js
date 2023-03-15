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

