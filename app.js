let amigos = [];

// Função para adicionar um amigo
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    // Validar campo vazio
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Validar duplicado
    if (amigos.includes(nomeAmigo)) {
        alert(`O nome "${nomeAmigo}" já está na lista.`);
        return;
    }

    // Adicionar amigo
    amigos.push(nomeAmigo);

    // Limpar campo
    inputAmigo.value = "";

    // Atualizar lista na tela
    atualizarLista();
}

// Função para atualizar a lista de amigos
function atualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");

    // Limpar conteúdo atual
    listaAmigos.innerHTML = "";

    // Adicionar cada amigo como <li>
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

// Função para sortear um amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Não há amigos disponíveis para sortear. Adicione um amigo.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}