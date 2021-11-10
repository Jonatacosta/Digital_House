//Pode rodar que já vai retornar os resultados. 

function menu(pratos,tempo) {
    
switch (pratos) {
    case 'button1': comida = 'pipoca';
        tempopadrao = 10
        break;

        case 'button2': comida = 'macarrao'
        tempopadrao = 8
        break;

        case 'button3': comida = 'carne';
        tempopadrao = 15
        break;

        case 'button4': comida = 'feijao';
        tempopadrao = 12
        break;

        case 'button5':comida = 'brigadeiro';
        tempopadrao = 8
        break;

    default:
       return console.log('comida inexistente');
        
}

if (tempo < tempopadrao) {
    console.log( 'Tempo insuficiente !!');
}
else if (tempo >= tempopadrao && tempo < tempopadrao * 2 - 1) {
    console.log('prato pronto bom apetite !!');

}else if (tempo >= tempopadrao * 2 && tempo < tempopadrao * 3 - 1 ) {
    console.log('prato queimado !!');
}
else if (tempo >= tempopadrao * 3 ){
    console.log('KABUMM !!!')
}
}
menu('button1',10);
menu('button2',5);
menu('button3',20);
menu('button4',40);
menu('arroz',20)
