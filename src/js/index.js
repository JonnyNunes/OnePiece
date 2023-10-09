const botoes = document.querySelectorAll('.botao')
const personagens = document.querySelectorAll('.personagem');

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        // remover
        removeBotaoSelecionado()
        removePersonagemSelecionado()
        // selecionar
        selecionadoBotao(botao)
        selecionaPersonagem(indice)
    })
})


function selecionadoBotao(botao){
    botao.classList.add("selecionado")
}

function selecionaPersonagem(indice){
    personagens[indice].classList.add("selecionado")
}

function removePersonagemSelecionado(){
    const personagemSelecionado = document.querySelector(".personagem.selecionado")
    personagemSelecionado.classList.remove("selecionado")
}

function removeBotaoSelecionado(){
    const botaoSelecionado = document.querySelector(".botao.selecionado")
    botaoSelecionado.classList.remove("selecionado")
}