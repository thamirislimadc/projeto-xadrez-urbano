// Seleciona todos os itens de peça
const pecas = document.querySelectorAll('.blocopecas');

// Índice para controlar qual peça está visível
let pecaAtual = 0;

// Função para mostrar a peça atual e esconder as outras
function mostrarPeca(index) {
    pecas.forEach((peca, i) => {
        if (i === index) {
            peca.style.display = 'flex'; // Mostrar a peça atual
        } else {
            peca.style.display = 'none'; // Esconder as outras
        }
    });
}

// Função para ir para a peça anterior
function anterior() {
    pecaAtual = (pecaAtual > 0) ? pecaAtual - 1 : pecas.length - 1;
    mostrarPeca(pecaAtual);
}

// Função para ir para a próxima peça
function proximo() {
    pecaAtual = (pecaAtual < pecas.length - 1) ? pecaAtual + 1 : 0;
    mostrarPeca(pecaAtual);
}

// Adicionar eventos de clique nas setas
document.querySelector('.seta img[alt="seta para esquerda"]').addEventListener('click', (e) => {
    e.preventDefault(); // Evitar recarregar a página
    anterior();
});

document.querySelector('.seta img[alt="seta para direita"]').addEventListener('click', (e) => {
    e.preventDefault(); // Evitar recarregar a página
    proximo();
});

// Mostrar a primeira peça ao carregar a página
mostrarPeca(pecaAtual);
