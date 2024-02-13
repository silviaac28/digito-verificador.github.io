let lista = ["201012341-3"]
localStorage.setItem("numeros", JSON.stringify(lista));



const repetido = function () {
    let operando1 = (document.getElementById("operando1").value);
    var numeros = JSON.parse(localStorage.getItem("numeros"));

    let td = numeros.length;
    let invertida = "";
    let multi = "";
    let modulo = 0;
    let lista = []
    lista = numeros;


    invertida = (invertirCadena(operando1));

    multi = (multiplicar(invertida));
    modulo = multi % 11;
    resultado = 11 - modulo;
    console.log(resultado);
    let pos = lista.includes(operando1 + "-" + resultado)
    console.log(pos)
    if (pos == true) {
        console.log("repetido");
        alert("El numero ya se encuentra almacenado.")
    }
    else {
        console.log("repetido");
        alert("El numero no se encuentra almacenado.")
    }

}

function multiplicar(cad) {
    let n = 0;
    let j = 1;
    let suma = 0;
    var separarCadena = cad.split("");
    n = separarCadena.length
    for (let i = 0; i <= n - 1; i++) {
        j = j + 1;
        if (j > 7) {
            j = j - 6;
        }
        suma = parseFloat(cad[i]) * j + suma;

    }


    return suma;
}

function invertirCadena(cad) {
    var separarCadena = cad.split("");
    var invertirArreglo = separarCadena.reverse();
    var unirArreglo = invertirArreglo.join("");
    return unirArreglo;
}

const verificar = function () {
    let operando1 = (document.getElementById("operando1").value);
    var numeros = JSON.parse(localStorage.getItem("numeros"));

    let td = numeros.length;
    let invertida = "";
    let multi = "";
    let modulo = 0;
    let lista = []
    lista = numeros;


    invertida = (invertirCadena(operando1));

    multi = (multiplicar(invertida));
    modulo = multi % 11;
    resultado = 11 - modulo;
    console.log(resultado);
    let pos = lista.includes(operando1 + "-" + resultado)
    console.log(pos)
    if (pos == true) {
        console.log("repetido");
        alert("el numero esta repetido")
    }
    else {
        document.getElementById("resultado").innerHTML = operando1 + "-" + resultado;
        lista[td] = operando1 + "-" + resultado;
        console.log(numeros);

    }
    localStorage.setItem("numeros", JSON.stringify(lista));

}
const listar = function () {
    var numeros = JSON.parse(localStorage.getItem("numeros"));

    let boton = document.getElementById("bot3").textContent

    if (boton == "mostrar") {
        document.getElementById("almacenados").innerHTML = numeros;

        document.getElementById("bot3").innerHTML = "ocultar";
    }
    else {
        document.getElementById("bot3").innerHTML = "mostrar";
        document.getElementById("almacenados").innerHTML = "click en mostrar";
    }


}