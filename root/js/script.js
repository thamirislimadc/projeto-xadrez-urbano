// Obter o parâmetro da URL
const urlParams = new URLSearchParams(window.location.search);
const paginaAtual = urlParams.get('pagina') || 'prefeitura'; // Default: prefeitura

// Atualizar o conteúdo com base na página selecionada
document.getElementById('titulo-pagina').innerText = paginas[paginaAtual].titulo;
document.getElementById('subtitulo-pagina').innerText = paginas[paginaAtual].subtitulo;
document.getElementById('descricao-pagina').innerText = paginas[paginaAtual].descricao;
document.getElementById('imagem-pagina').src = paginas[paginaAtual].imagem;

// Destacar o link da página atual
const links = document.querySelectorAll('.navegacao a');
links.forEach(link => {
    const linkPage = link.getAttribute('href').split('=')[1] || 'prefeitura'; // Pega a página do link
    if (linkPage === paginaAtual) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

