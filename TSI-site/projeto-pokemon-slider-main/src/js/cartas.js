/*
OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o próximo cartão da lista
    - passo 1 - dar um jeito de pegar  o elemento HTML da seta avançar
    - passo 2 - dar um jeito de idêntificar o clique do usuário na seta avançar
    - passo 3 - fazer aparecer o próximo cartãp da lista 
    - passo 4 - buscar o cartão que está selecionado e esconder 

OBJETIVO 2  - quando clicarmos na seta de voltar temos que mostrar o cartão anterior da lista
    - passo 1 - dar um jeito de pegar  o elemento HTML da seta voltar
    - passo 2 - dar um jeito de idêntificar o clique do usuário na seta voltar
    - passo 3 - fazer aparecer o cartão anterior da lista 
    - passo 4 - buscar o cartão que está selecionado e esconder 
*/

const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
};

function mostrarCartaoSelecion(indiceCartao) {
    cartoes[indiceCartao].classList.add('selecionado');
}

btnAvancar.addEventListener('click', function () {
    esconderCartaoSelecionado();
    cartaoAtual++;
    if (cartaoAtual === cartoes.length) {
        cartaoAtual = 0; // Volta para o primeiro cartão quando chega ao último
    }
    mostrarCartaoSelecion(cartaoAtual);
});

btnVoltar.addEventListener('click', function () {
    esconderCartaoSelecionado();
    cartaoAtual--;
    if (cartaoAtual < 0) {
        cartaoAtual = cartoes.length - 1; // Volta para o último cartão quando está no primeiro
    }
    mostrarCartaoSelecion(cartaoAtual);
});
