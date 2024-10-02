let pedra = document.querySelector('.pedra')
let papel = document.querySelector('.papel')
let tesoura = document.querySelector('.tesoura')
let res = document.querySelector('.res')
let min = 1
let max = 3
let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

function jogo(){

    if(pedra.checked){
       if(numeroAleatorio == 1){
        res.innerHTML = 'Empate, Pedra empata com Pedra!'
       } else if(numeroAleatorio == 2){
        res.innerHTML = 'Perdeu, Pedra perde para Papel!'
       } else{
        res.innerHTML = 'Venceu, Pedra ganha de Tesoura!'
       }
    } else if(papel.checked){
        if(numeroAleatorio == 1){
            res.innerHTML = 'Venceu, Papel ganha de Pedra!'
        } else if(numeroAleatorio == 2){
            res.innerHTML = 'Empate, Papel empata com Papel'
        } else{
            res.innerHTML = 'Perdeu, Papel perde para Tesoura!'
        }
    } else if(tesoura.checked){
        if(numeroAleatorio == 1){
            res.innerHTML = 'Perdeu, Tesoura perde para Pedra!'
        } else if(numeroAleatorio == 2){
            res.innerHTML = 'Venceu, Tesoura ganha de Papel!'
        } else{
            res.innerHTML = 'Empate, Tesoura empata com Tesoura!'
        }
    } else{
        alert('[]ERRO! Selecione uma das opções')
    }

}

function reset(){
    location.reload() // Para reiniciar a página!
}