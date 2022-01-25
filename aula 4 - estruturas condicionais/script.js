// var jogador1 = 0;
// var jogador2 = 1
// var placar;

// if (jogador1>0){
//     console.log('Jogador 1 marcou ponto!');
// }else if(jogador2>0){

//     console.log('Jogador 2 marcou ponto ');


// } else{
//     console.log('Ninguém marcou ponto');
// }


//ninho de if
//Será colocar um if dentro do outro
// var jogador1 = -1;
// var jogador2 = 0
// var placar;

// if (jogador1 !== -1 ){
    
// if (jogador1>0){
//     console.log('Jogador 1 marcou ponto!');
// }else if(jogador2>0){

//     console.log('Jogador 2 marcou ponto ');

    
// } else{
//     console.log('Ninguém marcou ponto');
// }
// }

//IF TERNÁRIO
// var jogador1 = 0;
// var jogador2 = 0
// var placar;

// jogador1 !== -1 && jogador2 !== -1 ? console.log('Os jogadores são válidos') :
// console.log('Jogadores inválidos');
    
// //usando if
// if (jogador1>0 && jogador2 ==0){
//     console.log('Jogador 1 marcou ponto!');
//     placar = jogador1 > jogador2;

// }
// //usando else if
// else if(jogador2>0 && jogador1 == 0){
//     console.log('Jogador 2 marcou ponto');
//     placar = jogador2 > jogador1;

    
// } else{
//     console.log('Ninguém marcou ponto');
// }
// switch(placar){
//     case placar = jogador1 > jogador2:
//         console.log('jogador 1 ganhou');
//         break;
//         default:
//             console.log('Ninguém ganhou')
// }


//Estruturas de Repetição - São estruturas condicionais que repetem uma instrução até atingir determinada condição.
// for - executa uma instrução até que ela seja falsa
// for([expressaoInicial];[condicao];[incremento]){declaracao}


let array = ['valor1', 'valor2', 'valor3', 'valor4',];
let object = {propriedade1: 'valor1', propriedade2:'valor2', 
propriedade3:'valor3',}

// for (let indice = 0; indice<array.lenght; indice++){
//     console.log(indice);
// }

//for/in - Funciona como uma repetição a partir de uma propriedade
// for ([indice] in [objecto ou array]{declaracao})
// for (let i in array) {
//     console.log(i);
// }
// // com object
// for(i in object){
//     console.log(i);
// }

// //for/of - Funciona como uma repetição a partir de um valor.
// //com array
// for (i of array){
//     console.log(i);

// }
// //com object
// //o for/of não funciona com object.
// for(i of object.propriedade1){
//     console.log(i);
// }

//WHILE - Executa uma instrução enquanto determinada condição for verdadeira,
//a verificação é feita antes da execução.

// var a = 0;
// while (a<10) {
//     a++;
//     console.log(a)
// }
//() - passa parênteses para estabelecer a condição, 
//{} - passa as chaves para estabelecer a instrução.

//DO WHILE - Executa uma instrução "ATÉ QUE" determinada condição seja falsa,
// a verificação é feita depois da execução.

// do{
//     a++;
//     console.log(a);

// } while(