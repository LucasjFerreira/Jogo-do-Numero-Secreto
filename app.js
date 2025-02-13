let listadenumerosSorteados= [];
let numeromaximojogoSecreto=10;
let numeroSecreto = gerarNumeroAleatorio(); 
let tentativas = 1;

function exibirtextonatela(tag,texto){
    let campo = document.querySelector(tag);
        campo.innerHTML = texto;
        responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
        }    

    
    function mensageminicial(){
        
    exibirtextonatela('h1','Jogo do Número Secreto');
    exibirtextonatela('p','Escolha um Número de 1 a 10');

    }
mensageminicial();
    function verificarChute(){
        let chute=document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirtextonatela('h1','Você acertou!');
        let palavratentativas = tentativas >1?'Tentativas':'Tentativa';
        let mensagemtentativas=`Você descobriu o Numero Secreto com ${tentativas} ${palavratentativas}!`;
        exibirtextonatela('p',mensagemtentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    
               
            }else{
                if(chute > numeroSecreto){
                    exibirtextonatela('p','O numero secreto é menor')
       
        }else{
            exibirtextonatela('p','O numero Secreto é maior');
        }
        tentativas++;
        Limparcampo();
    }
    }
function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random()*numeromaximojogoSecreto+ 1);
   let quantidadesdeElementosdalistas=listadenumerosSorteados.length;

if (quantidadesdeElementosdalistas==numeromaximojogoSecreto){
    listadenumerosSorteados=[];
}
if(listadenumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
}else{ 
    listadenumerosSorteados.push(numeroEscolhido);
    console.log(listadenumerosSorteados);
    return numeroEscolhido;
    

}

}


function Limparcampo(){
    chute=document.querySelector('input');
        chute.value='';
    }

    function reiniciarjogo(){
        numeroSecreto = gerarNumeroAleatorio(); 
        Limparcampo();
        mensageminicial(); 
        tentativas=1;      
        document.getElementById('reiniciar').setAttribute('disabled',true);

    }
