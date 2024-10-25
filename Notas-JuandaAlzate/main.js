let notas = [4,3,7,5,8];
let resultado1 = document.getElementById('mostrar1');
let resultado2 = document.getElementById('mostrar2');
let resultado3 = document.getElementById('mostrar3');

for( let nota of notas ) {
    let padre = document.getElementById('ul');
    let hijo = document.createElement('li');
    hijo.textContent = nota;
    padre.appendChild(hijo); 
};

function promedio() {
    let sumaNotas = 0;
    for (let i = 0; i < notas.length; i++) {
        sumaNotas += notas[i];
    }
    let promedioNotas = sumaNotas / 5;
    resultado1.textContent = promedioNotas;
}

function masAlta() {
    let notaMasAlta = notas[0];
    let i = 0;
    while ( i < notas.length ) {
        if( notaMasAlta < notas[i] ) {
            notaMasAlta = notas[i];
        };
        i++;
    }
    resultado2.textContent = notaMasAlta;
}

function aplazo() {
    let i = 0;
    do {
        if ( notas[i] < 4 ) {
            resultado3.textContent = "SI";
            break
        }
        else {
            resultado3.textContent = "NO";
        }
        i++
    } while ( i < notas.length );
}