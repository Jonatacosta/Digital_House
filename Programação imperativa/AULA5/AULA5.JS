//1. convertando polegadas para centimentros.
function teste2(a) {
    return a * 2.54
}
console.log(teste2 (5));
//2. string convertida para URL
 function url(u) {
     return ('http://www.' + u + '.com.br') 
 }
 console.log(url ('jonata.js'));

//3. string com exclamação no final. 
 function nome(n){
     return (n + '!')
 }
 console.log(nome ('jonata'));

// 4. Idade do seu Dog. 
 function and(i){
     return (i * 7)
 }
console.log(and (5));
// 5. Valor da Horá de trabalho.
function sf (s){
    return s / 160
}
console.log(sf (1500));
//6. calculadora de IMC 

function cimc (peso , altura){
    let resultadoIMC = (peso / (altura * altura))

    return resultadoIMC.toFixed(4)
}
console.log (cimc (65 , 1.75));

//7 convertendo para caixa alta
function cx (x){
    return x .toUpperCase()
}
console.log (cx ('ola mundo'))
//8 tipo de dado.
function dado (z){
    return typeof (z)
}
console.log(dado('jonata'))
//9 raio para circunferência
function raio(r){
    let resultadoraio = (2 * Math.PI) * r
    return resultadoraio.toFixed(4)
}
console.log(raio(2))