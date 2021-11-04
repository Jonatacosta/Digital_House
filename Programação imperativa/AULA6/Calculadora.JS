//NIVEL 1 CALCULADORA 

function adicao (a,b){
    return a + b;
};


function subtracao (a,b){
    return a - b;
};

function mult (a,b){
    return a * b;
};


function div (a,b){
    return a / b;
};


//Nivel 2 
let vr1 = 5;
let vr2 = 6;

console.log(adicao(vr1 , vr2));
console.log(subtracao(6, 7));
console.log(mult(2 , 4));
console.log(div(4 , 2));

//Nivel 3 
function numeroaoquadrado(a){
    return mult(a, a);
}
console.log(numeroaoquadrado(5));

function mediadetresnumeros (a, b, c, d){
    return div (adicao(a, b, c,) ,d) ;
};

console.log(mediadetresnumeros(2,5,3,3) .toFixed(2));


