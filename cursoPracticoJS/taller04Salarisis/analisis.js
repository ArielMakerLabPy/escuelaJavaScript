//HELPERS o UTILS
function esPar(numero) {
    return numero % 2 === 0;
};

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
      return sumaLista / lista.length;
}

//Calculadora de Mediana

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;

    }else{
        const personaMitad = lista[mitad];
        return personaMitad
    }
}

//Ordeamiento de datos

const salariosCol = colombia.map(
    function(persona) {
        return persona.salary;
    }
);

const salariosColSort = salariosCol.sort(
    function(salarioA, salarioB) {
        return salarioA - salarioB;
    }
);



//Calculando la mediana general

const medianaGeneralCol = medianaSalarios(salariosColSort);

//Mediana del top 10%
const spliceStart = parseInt((salariosColSort.length * 90)/100);

const spliceCount = parseInt(salariosColSort.length - spliceStart);

const salariosColTop10 = salariosColSort.splice(
    spliceStart,
    spliceCount
);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
   medianaTop10Col
});
