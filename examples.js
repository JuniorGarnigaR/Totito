/*function SumDiagonals(arr){
    let sumDiagonal1 = 0;
    let sumDiagonal2 = 0;
    let result = 0;
    let limit = arr.length;
    for (let i = 0 ; i < limit; i++){
        if (array[i].length == array.length){
            sumDiagonal1 += array[i][i];
            console.log(sumDiagonal2);
        }
    }
    for (let j = limit-1; j >= 0; j--){
        if (array[j].length == array.length){
            sumDiagonal2 += array[j][j];
            console.log(sumDiagonal2);
        }
    }
    result = sumDiagonal1 - sumDiagonal2;
    if (result < 0){
        result *= -1;
    }
    return result;
}



let array = [
    [1,2],
    [3,2,1],
    [5,6,7]
];

console.log(SumDiagonals(array));
*/


/*function plusMinus(arr) {
    // Write your code here
    let sumPositives = 0;
    let sumNegatives = 0;
    let sumZeros = 0;
    let results = [];
    for (let i = 0; i < arr.length ; i++){
        if (arr[i] > 0){
            sumPositives += 1;
        }else if (arr[i] < 0){
            sumNegatives += 1;
        }else if (arr[i] == 0){
            sumZeros += 1;
        }
    }
    sumPositives /= arr.length;
    sumNegatives /= arr.length;
    sumZeros /= arr.length;
    sumPositives = parseFloat(sumPositives).toFixed(6);
    sumNegatives = parseFloat(sumNegatives).toFixed(6);
    sumZeros = parseFloat(sumZeros).toFixed(6);
    results = [sumPositives, sumNegatives, sumZeros];
    return results;
}
let array = [-4, 3 ,-9 ,0 ,4 ,1,10,60,80,-1,-5,-8,0];

console.log(plusMinus(array));

*/

/*function staircase(n) {
    // Write your code here
    for (let j = 2 ; j <=n;j++){
        let symbol = "#";
        let space = " ";
        for (let i = 1; i <= j ; i++){
            let num = i;
            num = String(num);
            console.log(space.repeat(j-i)+""+num.repeat(i)+ "" + num.repeat(i));
        }
        console.log("----------------");
    }
}
let random = Math.ceil(Math.random()*9);

staircase(random);
*/

/*function staircase(n){
    let symbol = "#";
    let space = " ";

    for (let i = 1; i <= n; i++){
        console.log(space.repeat(n - i )+ "" + symbol.repeat(i));
    }
}

staircase(10);
*/
/*
function plusMinus(arr) {
    // Write your code here
    let limit = arr.length;
    let sumPositives = 0;
    let sumNegatives = 0;
    let sumZeros = 0;
    for (let i = 0; i < limit; i++){
        let position = arr[i];
        if (position > 0){
            sumPositives += 1;
        }else if(position < 0){
            sumNegatives += 1;
        }else if(position == 0){
            sumZeros += 1;
        }
    }

    sumPositives /= limit;
    sumNegatives /= limit;
    sumZeros /= limit;
    console.log(sumPositives.toFixed(6));
    console.log(sumNegatives.toFixed(6));
    console.log(sumZeros.toFixed(6));
}

let array = [1,1,0,-1,-1];

plusMinus(array)*/



/*let array = [1,3, 5, 7, 9];

function miniMaxSum(arr){
    let auxUp = -Infinity;
    let auxDown = Infinity;
    let sumMax = 0;
    let sumMin = 0;
    let aux2 = 0;
    for (let i = 0; i < arr.length; i++){
        let position = arr[i];
        if (position > auxUp){
            auxUp = position;
        }
        if(position < auxDown){
            auxDown = position;
        }
        sumMax += position;
    }
    aux2 = sumMax - auxDown;
    sumMin = sumMax - auxUp;
    console.log(sumMin + " "+ aux2);
    
}


miniMaxSum(array);
*/

//totito
/*

document.getElementById("button").onclick = function(){
    let array = [
        [0, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ];
    let counter = 0;
    let getX, getY;

    // obtenemos valores de html
    do {
        getX = document.getElementById("fila").value;
        getY = document.getElementById("columna").value;
        
        if (array[getX-1][getY-1] !== 0){
            window.alert("Ese valor ya ha sido agregado, vuelva a intentar");
            break;
        }


    } while (array[getX-1][getY-1] !== 0 );

    array[getX-1][getY-1] = counter % 2 === 0 ? 1 : 2;
    console.log(array);
    counter += 1;
    if (counter % 2 === 0){
        document.getElementById("turno").innerHTML = "Ingrese el valor jugador 1";
    }{
        document.getElementById("turno").innerHTML = "Ingrese el valor jugador 2";
    }
}


*/
function sum(array, win){
    win = false;
    for (let i = 0; i < 3; i++){
        let sumFilas = 0;
        let sumColumnas = 0;
        let sumDiagonal1 = 0;
        let sumDiagonal2 = 0;
        for (let j = 0; j < 3 ; j++){
            //suma de la primera, segunda y tercera fila
            sumFilas += array[i][j];
            //Suma de la primera, segunda y tercera columna
            sumColumnas += array[j][i];
            //Suma diagonal 1 de derecha a izquierda
            sumDiagonal1 += array[j][i+j];
            //Suma diagonal 2 de izquierda a derecha
            sumDiagonal2 += array[j][2-i];
        }
        if (sumFilas === 3 || sumColumnas === 3 || sumDiagonal1 === 3 || sumDiagonal2 === 3 || sumFilas === 30 || sumColumnas === 30 || sumDiagonal1 === 30 || sumDiagonal2 === 30){
            win = true;
            console.log("Has ganado");
            break;
        }
    }

    return win
}



function detection(array, counter){
    let getX, getY;

    do{
        if (counter % 2 === 0){
            getX = parseInt(prompt("Seleccione la fila, jugador 1"));
            getY = parseInt(prompt("Seleccione la columna, jugador 1"));
        }else if (counter % 2 === 1){
            getX = parseInt(prompt("Seleccione la fila, jugador 2"));
            getY = parseInt(prompt("Seleccione la columna, jugador 2"));
        }

        if (array[getX-1][getY-1] !== 0){
            window.alert("Esa celda ya está en uso, vuelva a intentar");
        }


    }while (array[getX-1][getY-1] !== 0 || !array.some(row => row.includes(0)));
    array[getX-1][getY-1] = counter % 2 === 0 ? 1 : 10;
    console.log(array);

}
let array = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]


let getValue = 0;
let counter = 0;
let getX = 0;
let getY = 0;
let win = false;
detection(array, counter);
do{
    counter += 1;
    detection(array, counter);
    win = sum(array, win)
    if (win === true){
        break;
    }
    
}while (counter < 10);


