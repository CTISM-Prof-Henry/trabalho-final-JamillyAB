// Seleciona todos os elementos do catálogo que representam cards de flor.
const cardsFlores = document.querySelectorAll('.card-flor');

// Para cada card encontrada, adiciona um ouvinte de clique.
cardsFlores.forEach(card => {
    // Quando o usuário clica em uma carta, esta função é executada.
    card.addEventListener('click', () => {
        // Alterna a classe 'ativo' no card clicado.
        // Se a classe já existir, ela é removida; se não existir, é adicionada.
        card.classList.toggle('ativo');
    });
});
