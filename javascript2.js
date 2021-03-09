var a = "Exibir";

console.log(a);


/* SEQUÊNCIA DE EXERCÍCIOS DO CURSO ORIMGAMID, TODOS AS SESSÕES SERÃO SINALIZADAS POR MIM CASO SEJAM
CONCLUÍDAS COM ÊXITO OU NÃO. PARA EXERCÍCIOS QUE EU NÃO CONSEGUIR SOLUCIONAR SOZINHO, SEJA COM PESQUISAS OU NÃO,
SERÁ INCREMENTADO O CÓDIGO COM SOLUÇÃO DA ORIGAMID.*/


//Sessão Variáveis início


// 1. Declarar uma variável com o seu nome
var nome = "Bruno";

// 2. Declarar uma variável com a sua idade
var idade = 23;

// 3. Declarar uma variável com a sua comida
// favorita e não atribuir valor

var comidaFavorita;

// 4. Atribuir valor a sua comida favorita
comidaFavorita = "carne";

// 5. Declarar 5 variáveis diferentes sem valores
var cor;
var tamanho;
var tipo;
var marca;
var local;


//Sessão Variáveis fim. Concluída com êxito.


//Sessão Tipos de Dados início

// Declare uma variável contendo uma string
var letra = "A";

// Declare uma variável contendo um número dentro de uma string
var numeroString = "25";

// Declare uma variável com a sua idade
var minhaIdade = 23;

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var meuNome = "Bruno";
var sobreNome = "Santos";
console.log(meuNome + ' ' + sobreNome);


// Coloque a seguinte frase em uma variável: It's time
var frase;
frase = "It's time"
console.log(frase);

// Verifique o tipo da variável que contém o seu nome
console.log(typeof nome)


//Sessão Tipos de Dados fim. Concluída com êxito.


//Sessão  Números e Operadores início.


// Qual o resultado da seguinte expressão?
// var total = 10 + 5 * 2 / 2 + 20;
var total = 10 + 5 * 2 / 2 + 20;
//35
console.log(total);

// Crie duas expressões que retornem NaN
var placa = "50";
var motor = 'v10';
console.log(placa * cor);

var terno = "verde";
var tamanho = "44";
var ternoTamanho = terno + tamanho;
var corpo = ternoTamanho / 2;

console.log(corpo);

//MODO FEITO PELO DESENVOLVEDOR DA ORIGAMID
//var expressao1 = 'Teste' / 2;
//var expressao2 = 'Teste' - 2;
//console.log(expressao1, expressao2);

// Somar a string '200' com o número 50 e retornar 250
var n1 = "200";
console.log(+n1 + 50);

//MODO FEITO PELO DESENVOLVEDOR DA ORIGAMID
//var soma = +'200' + 50;
//console.log(soma);


// Incremente o número 5 e retorne o seu valor incrementado
var n5 = 5;

console.log(n5);
console.log(++n5);
console.log(n5++);
console.log(n5);

// Como dividir o peso por 2?
//var numero = '80';
//var unidade = 'kg';
//var peso = numero + unidade; // '80kg'
//var pesoPorDois = peso / 2; // NaN (Not a Number)
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade;
var pesoPorDois = numero / 2; //pare resolver esta tarefa substitui peso por numero

console.log(pesoPorDois + unidade);


//Sessão Números e Operadores fim. Concluída com êxito.


// Sessão Boolean e condicionais início.


// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var minhaIdade = 23;
var idadeParente = 50;

if (minhaIdade < idadeParente){
    console.log("É maior");
}
else if (minhaIdade == idadeParente){
    console.log("É igual");
}

else {
    console.log("É menor")

};



// Qual valor é retornado na seguinte expressão?
//var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);

console.log(expressao)
//Resposta que eu imaginei false
//resposta correta 3
//justificativa: imaginei que 5 - ' ' seria um valor falso por isso retornaria false.


// Verifique se as seguintes variáveis são Truthy ou Falsy
//var nome = 'Andre';
//var idade = 28;
//var possuiDoutorado = false;
//var empregoFuturo;
//var dinheiroNaConta = 0;

var nome = 'Andre';
console.log((!nome));

var idade = 28;
console.log(!!idade);

var possuiDoutorado = false;
console.log(!possuiDoutorado);

var empregoFuturo;
console.log(!empregoFuturo);

var dinheiroNaConta = 0;
console.log(!dinheiroNaConta);



// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

console.log(brasil > china);// false
console.log(brasil != china);// true
console.log(brasil !== china);// true
console.log(brasil == china);// false


// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}
//Resposta: Falso. Porque Gato e gato são diferentes.


// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}
//R: Cão. Porque leu o último verdadeiro.


// Sessão Boolean e condicionais fim. Sessão finalizada com erro a ser analizado...


//Sessão Funções início

// Crie uma função para verificar se um valor é Truthy
function verdadeiroouFalso(){
    return 100 != '100';
}

console.log(verdadeiroouFalso());

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadrado(lado){
    return lado * 4;
}

console.log(perimetroQuadrado(5));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeMeu(nome, sobrenome){
    
    return nome + sobrenome;
}

console.log(nomeMeu('Bruno ', 'Santos'));

// Crie uma função que verifica se um número é par

function parouImpar(numero){
    
    

    if ( numero % 2 === 0 || numero === 0){
        return 'Par';
    }
    else{
        return 'Ímpar';
    }
    
}
// conseguir fazer com ajuda do google, deixo comentado isso?
console.log(parouImpar(12));


// Crie uma função que retorne o tipo de dado do argumento passado nela
function tipodeDado(dado){
    return typeof (dado);
}
console.log(tipodeDado(+'10'));


// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', function (){
  //meuNomeCompleto = 'Bruno Santos da Silveira';
  return console.log('Bruno Santos da Silveira');
});


// Corrija o erro abaixo
// function precisoVisitar(paisesVisitados) {
//     var totalPaises = 193;
//     return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
//   }
//   function jaVisitei(paisesVisitados) {
//     return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
//   }
//   precisoVisitar(20);
//   jaVisitei(20);

  function precisoVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    var totalPaises = 193;
    var paisesVisitados = 20
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  //precisoVisitar(20);
  //jaVisitei(20);
  
console.log(jaVisitei(20));

//Sessão Funções fim. addeventlistner conseguido após certa dificuldade na lógica,
//as demais questoes sem grandes dificuldades.


//Sessão Objetos início


// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome

meusDados = {
  nome: 'Bruno',
  sobreNome: 'Santos',
  
  meusDadosCompletos (){
    
    return this.nome + ' ' + this.sobreNome;
  }
}

//meusDados.nome = 'Bruninho';
console.log(meusDados.meusDadosCompletos());

// Crie um método no objeto anterior, que mostre o seu nome completo


// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
carro.preco = 3000;

console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

cachorro = {
  raca : 'labrador',
  cor : 'preto',
  idade : 10,
  //homem : true,
  //mulher : false,

  late(genero) {
  
    if (genero === 'homem') {
      return (console.log('O cahorro late'));
    }
    else if (genero === 'mulher') {
      return (console.log('O cachorro NÂO late'));

    }
    else {
      return console.log('Você digitou um gênero inválido, digite "homem" ou "mulher"')
    }
  }
    

}
cachorro.late('homem');


//cachorro.late(window.prompt('Escreva aqui se é homem ou mulher'));
//alert('teste');
//console.log(cachorro.lateHomem);

//Sessão Objetos fim. Concluído com sucesso sem muitas dificuldades com excessão da última parte
//confusão com os operadores de atribuição = e comparação ===.



//sessão tudo é objeto início


// nomeie 3 propriedades ou métodos de strings
var barco = 'verde';
console.log(barco.valueOf());
console.log(barco.charAt(3));
console.log(barco.length);


// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

//sessão tudo é objeto fim.

//sessão array e loops inicio


// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var brasilCampeao = ['1959', '1962','1970' ,'1994' ,'2002'];


// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for (let anos = 0;anos < brasilCampeao.length;anos++){
  console.log("O brasil ganhou a copa de " + brasilCampeao[anos])
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for (let quantidadeFrutas = 0;frutas[quantidadeFrutas] != 'Pera';quantidadeFrutas++){
  console.log(frutas[quantidadeFrutas]);
}

//NO EXERCÍCIO ACIMA NÃO É EXIBIDA A FRUTA PERA, FOI MEU MODO DE FAZER, ERREI NA LÓGICA
//CÓDIGO CORRETO DO DESENVOLVEDOR DA ORIGAMID ABAIXO COMENTADO

// var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
// for (var fruta = 0;fruta < frutas.length;fruta++){
//   console.log(frutas[fruta]);
//     if(frutas[fruta] === 'Pera'){
//       break;
//     }
// }


// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);


//sessão array e loops finalizada.


