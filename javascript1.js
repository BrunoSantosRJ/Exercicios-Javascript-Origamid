


    var idade = prompt('Digite a idade')
    
    
    if (idade >= 0 && idade < 15){
        alert('Criança')
    }
        
    else if (idade >= 15 && idade < 30){
        alert('Jovem')
    }
    else if (idade >= 30 && idade < 60){
        alert('Adulto')
    }
    
    else if (idade >= 60){
        alert('Idoso')
    }        
    
    else{
        alert('Você digitou um valor inválido, recarregue a página e informe correto.')
    }
      

    


  
    var nome = prompt('Informe seu nome ')
    var altura = parseFloat(prompt('Informe sua altura em centímetros '))
    var peso = parseFloat(prompt('Infrome seu peso '))
    
    altura = altura/100
    
    var M = parseInt(peso/(altura ^ 2))
    
    alert(M)
    
    var classificacao 
    if (M < 16){
        classificacao = 'Baixo peso muito grave' 
        alert('Baixo peso muito grave') 
    }
    
    else if (M >= 16 && M <= 16.99){
        classificacao = 'baixo peso, grave' 
        alert('Baixo peso,  grave') 
    }
    
    else if (M >= 17 && M <= 18.49){
        classificacao = 'baixo peso' 
        alert('Baixo peso') 
    }
    
    else if (M >= 18.50 && M <= 24.99){
        classificacao = 'peso normal' 
        alert('Peso normal') 
    }
    
    else if (M >= 25 && M <= 29.99){
        classificacao = 'sobrepeso' 
        alert('sobrepeso') 
    }
    
   document.write(nome + ' possui índice de massa corporal igual a ' + M + ', sendo classificado como: ' + classificacao)
    



    
    var n1 = prompt('Número 1')
    var operacao = prompt('soma ou subtração?')
    var n2 = prompt('Número 2')
    
    
    function FazerOperacao(n1, n2, operacao){
        
        n1 = parseInt(n1)
        n2 = parseInt(n2)
        
        var resultado = 0
        
        if (operacao == 'soma'){
            resultado = n1 + n2
        }
        
        else if (operacao == 'subtracao'){
            resultado = n1 - n2
        }
        
        
        return resultado
     
        
    }
       document.write(' O resultado é: ' + FazerOperacao(n1, n2, operacao))
    
    
    


        
        //EXERCÍCIO CORES FUNDO SCRIPT
        function corfundo(amarelo){
            document.getElementById('fundo').style.backgroundColor = amarelo
        }
        
        function cortamanho(){
            
        
            var txt = document.getElementById('fundo').value
            var n = txt.length
            
            
            if (n < 3){
                document.getElementById('fundo').style.backgroundColor = 'red'
            }
                    
            else if (n >= 3){
                document.getElementById('fundo').style.backgroundColor = 'green'
            }
        }
        
    
   
     //início Abrir nova aba e pop-up ao clicar
    function clicar(){
        alert("Aba Alert foi aberta com sucesso.")
    }
    function openWin() {
        var myeWindow = window.open("https://www.google.com");
}
 

    
// INÍCIO CONTANDO NÚMEROS ÍMPARES DE 1 A 9

    
    var n = 1
    for (var n = 1;n <= 10; n = n + 2){
        alert(n)
    }
    

//FIM  CONTANDO NÚMEROS ÍMPARES DE 1 A 9
  
    

    
    //INÍCIO CONTAGEM DE 1 ATÉ 100
    
    // 2) Escreva um código que calcule a soma de 1 até 100. (obs: a resposta é 5050)
    
    
    
    var resultado = 0
    
    for(var n = 0; n <= 100; n++ ){
        resultado = resultado + n
        alert(resultado)
    }
        
    
    //FIM CONTAGEM DE 1 ATÉ 100
    


    //3) Crie um Array igual ao abaixo e mostre apenas os nomes das pessoas que tenham 4 letras.
    //Página 78
    
    //Dica: use o atributo length das Strings.
    
    var pessoas = ["João", "José", "Maria", "Sebastião", "Antônio"];
    
    for (let i = 0;i < pessoas.length;i++){
        if (pessoas[i].length == 4) {
            console.log(pessoas[i])
        }
        else {
            console.log("Não tem quatro letras")
        }
}