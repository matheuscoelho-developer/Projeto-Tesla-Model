// VARIÁVEIS É UMA FORMA DE IDENTIFICAR QUEMM É QUEM (DA UM NOME PRA UM PEDAÇINHO DE CODIGO)
// É COMO VOCE CRIASSE UMA PASTA, PARA GUARDAR O QUE VOCE QUISER
// FUNÇÕES É UM TRECHO DE CODIGO QUE SÓ EXECUTA, QUANDO É CHAMADO
// DOCUMENT = IR NO HTML
// querySelector = busca o que eu quiser 


let formulario = document.querySelector(".formulario")

console.log(formulario)

function aparecerFormulario() {
    formulario.style.left = "50%"
}

function desaparecerFormulario() {
    formulario.style.left = "-50%"
}