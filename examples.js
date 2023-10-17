function sum(array, win, counter){
    win = false;
    let player = "";
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
            player = counter % 2 === 0 ? "jugador 1" : "jugador 2";
            document.getElementById("turno").innerHTML = "Has ganado jugador " + player;
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
    win = sum(array, win, counter)
    if (win === true){
        break;
    }
    
}while (counter < 10);
