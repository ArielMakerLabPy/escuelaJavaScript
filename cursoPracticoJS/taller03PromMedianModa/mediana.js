function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

  return sumaLista / lista.length;
}

const lista1 = [100, 200, 500, 4000000];

const mitaLista1 = parseInt(lista1.length / 2);

function esPar(numerito){
    if (numerito % 2 === 0) {
        return true;
    }
    return false;
}

let mediana;

if (esPar(lista1.length)) {
    const elemento1 = lista1[mitaLista1];
    const elemento2 = lista1[mitaLista1 - 1];
    const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
    mediana = promedioElemento1y2;
} else {
    mediana = lista1[mitaLista1];
}
