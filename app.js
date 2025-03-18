//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
document.addEventListener("DOMContentLoaded", () => {
    const inputAmigo = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");
    const buttonAdd = document.querySelector(".button-add");
    const buttonDraw = document.querySelector(".button-draw");

    let amigos = [];
    let amigosDisponiveis = []; // Lista de amigos disponíveis para o sorteio

    // Função para adicionar amigos à lista
    function adicionarAmigo() {
        const nome = inputAmigo.value.trim();

        // Verifica se o campo está vazio
        if (nome === "") {
            inputAmigo.classList.add("error");
            alert("Por favor, insira um nome válido.");
            return;
        }

        // Verifica se o nome contém números
        if (/\d/.test(nome)) {
            inputAmigo.classList.add("error");
            alert("Números não são permitidos. Por favor, insira apenas letras.");
            return;
        }

        // Verifica se o nome já foi adicionado
        if (amigos.includes(nome)) {
            alert("Este nome já foi adicionado.");
            return;
        }

        // Adiciona o nome à lista e atualiza a exibição
        inputAmigo.classList.remove("error");
        amigos.push(nome);
        amigosDisponiveis.push(nome); // Adiciona também à lista de disponíveis
        atualizarLista();
        inputAmigo.value = "";
    }

    // Função para atualizar a lista de amigos na tela
    function atualizarLista() {
        listaAmigos.innerHTML = "";
        amigos.forEach((amigo) => {
            const li = document.createElement("li");
            li.textContent = amigo;
            listaAmigos.appendChild(li);
        });
    }

    // Função para sortear um amigo
    function sortearAmigo() {
        if (amigosDisponiveis.length === 0) {
            alert("Todos os amigos já foram sorteados. Reinicie o sorteio.");
            return;
        }

        // Sorteia um nome aleatório da lista de disponíveis
        const indiceSorteado = Math.floor(Math.random() * amigosDisponiveis.length);
        const amigoSorteado = amigosDisponiveis[indiceSorteado];

        // Remove o nome sorteado da lista de disponíveis
        amigosDisponiveis.splice(indiceSorteado, +1);

        // Exibe o resultado do sorteio
        resultado.textContent = `O amigo secreto é: ${amigoSorteado}`;
    }

    // Event listeners
    buttonAdd.addEventListener("click", adicionarAmigo);
    buttonDraw.addEventListener("click", sortearAmigo);
});