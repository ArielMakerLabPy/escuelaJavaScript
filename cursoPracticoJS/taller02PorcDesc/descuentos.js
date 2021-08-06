// const precioOriginal = 120;
// const descuento = 18;
// console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento
// });

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function precioAlHacerClick() {
    const inputPrice = document.getElementById('InputPrice');
    const pricevalue = inputPrice.value;

    const inputDiscount = document.getElementById('InputDiscount');
    const discountvalue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(pricevalue, discountvalue);

    const resultP = document.getElementById('ResultPrice');
    resultP.innerText = 'El precio con descuento es: $' + precioConDescuento;
}