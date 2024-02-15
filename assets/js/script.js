var num = prompt("Ingrese un numero entero menor a 21");
var resultado = 0;

let CalcularMultiplicacion = (numero, i) => {
    resultado = numero * i;
    console.log(`${numero} * ${i} = ${resultado}`);
    document.write(`<p>${numero} * ${i} = ${resultado}</p>`);
   return resultado;
}

if (num < 1 || num > 20){
    alert("número fuera del rango");
}
else
{
    for (let i = 1; i <= num; i++) {
        CalcularMultiplicacion(num, i);
    }
    
    for (let i = 1; i <= num; i++) {
        var factorial = 1;
        for (let j = 1; j <= num; j++) { 
            factorial = factorial * j;
        }
    }
    console.log(`El factorial de ${num} es ${factorial}`);
    document.write(`El factorial de ${num} es ${factorial}</p>`);
}
