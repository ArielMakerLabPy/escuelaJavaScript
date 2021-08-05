//Código del cuadrado
console.group("Cuadrado");
/* const ladoCuadrado = 5;
console.log('Los lados del cuadrado miden: ' + ladoCuadrado + 'cm'); */

function perimetroCuadrado(lado){ 
    return lado * 4;
}

// console.log('El perimetro del cuadrado es: ' + perimetroCuadrado + 'cm');

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado){
    return lado * lado;
}
// console.log('El area del cuadrado es: ' + areaCuadrado + 'cm2');
console.groupEnd();

//Código del triángulo
console.group("Triángulo");

/* const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log('Los lados del triángulo miden: ' +
    ladoTriangulo1 + ' cm, ' +
    ladoTriangulo2 +
    ' cm, la base mide: ' + baseTriangulo +
    'cm y la altura mide ' + alturaTriangulo + ' cm'
);
 */
//Vamos a calcular la altura del triángulo isóceles con pitágoras
function alturaTriangulo(lado, base){
    const altura = Math.sqrt(lado * lado - ((base * base) / 4));
    return altura;
}

// const perimetroTriangulo = (ladoTriangulo1 + ladoTriangulo2 + baseTriangulo);
// console.log('El perimetro del triángulo es: ' + perimetroTriangulo + ' cm');
function perimetroTriangulo(lado1, lado2, base){
    return (lado1 + lado2 + base);
}


// const areaTriangulo = (alturaTriangulo * baseTriangulo) / 2;
// console.log('El area del triángulo es: ' + areaTriangulo + ' cm2');

function areaTriangulo(altura, base){
    return (altura * base) / 2;
}

console.groupEnd();

//Código del circulo
console.group("Circulos");

// const radioCirculo = 4;
// console.log('El radio del circulo es: ' + radioCirculo + ' cm');

// const diametroCirculo = radioCirculo * 2;
// console.log('El diametro del circulo es: ' + diametroCirculo + ' cm');
function diametroCirculo(radio){
    return radio * 2;
}

// const PI = Math.PI;
// console.log('El valor de PI es: ' + PI);

// const perimetroCirculo = 2 * PI * radioCirculo;
// console.log('El perimetro del circulo es: ' + perimetroCirculo + ' cm');
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * 2;
}

// const areaCirculo = PI * radioCirculo * radioCirculo;
// console.log('El area del circulo es: ' + areaCirculo + ' cm2');
function areaCirculo(radio){
    return Math.PI * radio * radio;
}

console.groupEnd();

//Agregamos conector con input de HTML para el cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById('inputCuadrado');
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById('inputCuadrado');
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//Agregamos conector con input de HTML para el triangulo
function calcularAlturaTriangulo(){
    const inputLado = document.getElementById('inputLadoTriangulo');
    const valueLado = inputLado.value;
    const inputBase = document.getElementById('inputBaseTriangulo');
    const valueBase = inputBase.value;

    const altura = alturaTriangulo(valueLado, valueBase);
    alert(altura);
}

function calcularAreaTriangulo(){
    const inputBase = document.getElementById('inputBaseTriangulo');
    const valueBase = inputBase.value;

    const area = areaTriangulo(calcularAlturaTriangulo(), valueBase);
    alert(area);
}