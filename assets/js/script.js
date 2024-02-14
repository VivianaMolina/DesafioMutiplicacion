var num = prompt("Ingrese un numero entero menor a 21");
var resultado = 0;

if (num > 20){
    alert("El valor debe ser un numero entero menor a 21");
}
else
{
    var factorial = 1;
    for (let i = 1; i <= num; i++) {
        multiplicar(num, i);
        factorial = factorial * i;
    }
    console.log(`El factorial de ${num} es ${factorial}`);
    document.write(`El factorial de ${num} es ${factorial}</p>`);
}

let multiplicar = (numero, i) => {
    resultado = numero * i;
    console.log(`${numero} * ${i} = ${resultado}`);
    document.write(`<p>${numero} * ${i} = ${resultado}</p>`);
   return resultado;
}