function contar (value) {
    let contador = value;
    return function () {
       console.log( ++contador );
    }
}

let prueba1 = contar(5);
let prueba2 = contar(10);

prueba1();
prueba2();

