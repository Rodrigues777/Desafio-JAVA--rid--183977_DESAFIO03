const form = document.getElementById("form-tarefa");
const nomeTarefa = document.getElementById("nome-tarefa");
const etiqueta = document.getElementById("etiqueta");
const lista = document.getElementById("lista-tarefas");
const contador = document.getElementById("contador");

let tarefasConcluidas = 0;

function criarDataAtual() {
  const hoje = new Date();
  return hoje.toLocaleDateString('pt-BR');
}

function criarTarefa(titulo, tag) {
  const card = document.createElement("div");
  card.classList.add("tarefa");

  const h3 = document.createElement("p");
  h3.className = "titulo";
  h3.innerText = titulo;

  const info = document.createElement("div");
  info.className = "etiqueta-data";

  const spanEtiqueta = document.createElement("span");
  spanEtiqueta.className = "etiqueta";
  spanEtiqueta.innerText = tag;

  const data = document.createElement("span");
  data.className = "data";
  data.innerText = `Criado em: ${criarDataAtual()}`;

  info.appendChild(spanEtiqueta);
  info.appendChild(data);

const btn = document.createElement("button");
btn.classList.add("btn-tarefa");
btn.innerText = "Concluir";

btn.addEventListener("click", () => {
  if (!card.classList.contains("tarefa-concluida")) {
    card.classList.add("tarefa-concluida");
    btn.innerText = ""; 
    btn.classList.add("btn-check"); 
    tarefasConcluidas++;
    atualizarContador();
  }
});

  card.appendChild(h3);
  card.appendChild(info);
  card.appendChild(btn);

  lista.appendChild(card);
}

function atualizarContador() {
  contador.innerText = `${tarefasConcluidas} tarefa${tarefasConcluidas !== 1 ? 's' : ''} concluída${tarefasConcluidas !== 1 ? 's' : ''}`;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  criarTarefa(nomeTarefa.value, etiqueta.value);
  nomeTarefa.value = "";
  etiqueta.value = "";
});
