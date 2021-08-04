//Código del cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log('Los lados del cuadrado miden: ' + ladoCuadrado + 'cm');

const perimetroCuadrado = ladoCuadrado * 4;
console.log('El perimetro del cuadrado es: ' + perimetroCuadrado + 'cm');

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log('El area del cuadrado es: ' + areaCuadrado + 'cm2');
console.groupEnd();

//Código del triángulo
console.group("Triángulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log('Los lados del triángulo miden: ' +
    ladoTriangulo1 + ' cm, ' +
    ladoTriangulo2 +
    ' cm, la base mide: ' + baseTriangulo +
    'cm y la altura mide ' + alturaTriangulo + ' cm'
);

const perimetroTriangulo = (ladoTriangulo1 + ladoTriangulo2 + baseTriangulo);
console.log('El perimetro del triángulo es: ' + perimetroTriangulo + ' cm');

const areaTriangulo = (alturaTriangulo * baseTriangulo) / 2;
console.log('El area del triángulo es: ' + areaTriangulo + ' cm2');

console.groupEnd();

//Código del circulo
console.group("Circulos");

const radioCirculo = 4;
console.log('El radio del circulo es: ' + radioCirculo + ' cm');

const diametroCirculo = radioCirculo * 2;
console.log('El diametro del circulo es: ' + diametroCirculo + ' cm');

const PI = Math.PI;
console.log('El valor de PI es: ' + PI);

const perimetroCirculo = 2 * PI * radioCirculo;
console.log('El perimetro del circulo es: ' + perimetroCirculo + ' cm');

const areaCirculo = PI * radioCirculo * radioCirculo;
console.log('El area del circulo es: ' + areaCirculo + ' cm2');

console.groupEnd();