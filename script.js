// script.js


// 1. Boas-vindas personalizada
// Solicita ao usuário que digite seu nome e atualiza o texto de boas-vindas

let userName = prompt("Digite seu nome:");
if (userName && userName.trim() !== "") {
  document.getElementById("mensagem").innerText = `Bem-vindo, ${userName}!`;
} else {
  document.getElementById("mensagem").innerText = "Bem-vindo, visitante!";
}


// 2. Contagem de módulos por seção
// Conta quantos cards existem em Automação e Relatórios e atualiza os títulos

function contarModulos() {
  const automacaoCount = document.querySelectorAll("#automacao .submod").length;
  const relatoriosCount = document.querySelectorAll(
    "#relatorios .submod, #relatorios .baseperso-card, #relatorios .bifolha-card, #relatorios .concilia-card, #relatorios .lalur-card"
  ).length;

  const automacaoTitle = document.querySelector("#automacao").parentElement.querySelector("p");
  const relatoriosTitle = document.querySelector("#relatorios").parentElement.querySelector("p");

  automacaoTitle.innerText = `Automação (${automacaoCount} módulos)`;
  relatoriosTitle.innerText = `Relatórios (${relatoriosCount} módulos)`;
}
contarModulos();


// 3. Interatividade nos ícones de ajuda
// Adicionei event listeners para exibir alert() com uma descrição basica do mod

function adicionarEventosAjuda() {
  const botoesAjuda = document.querySelectorAll(".ajuda");

  botoesAjuda.forEach((botao) => {
    botao.addEventListener("click", () => {
      // Identifica o card mais próximo
      const card = botao.closest(".submod, .baseperso-card, .bifolha-card, .concilia-card, .lalur-card, .report");
      let descricao = card.dataset.modulo || card.querySelector(".title").innerText;
      alert(`Você selecionou: ${descricao}`);
    });
  });
}
adicionarEventosAjuda();


// 4. Destacar módulos em manutenção
// Adicionando classe CSS para cards que estão na lista de manutenção

const modulosManutencao = ["HubAlertas+", "Consulta FAP", "Lalur"];
function destacarModulosEmManutencao() {
  document.querySelectorAll(
    ".submod, .baseperso-card, .bifolha-card, .concilia-card, .lalur-card"
  ).forEach((card) => {
    if (modulosManutencao.includes(card.dataset.modulo)) {
      card.classList.add("manutencao");
    }
  });
}
destacarModulosEmManutencao();


// 5. Filtro de módulos ativos
// Cria checkbox para ocultar/mostrar cards em manutenção

function criarCheckboxFiltro() {
  const containerFiltro = document.createElement("div");
  containerFiltro.style.margin = "1rem 0";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "filtroAtivos";

  const label = document.createElement("label");
  label.htmlFor = "filtroAtivos";
  label.innerText = " Mostrar apenas módulos ativos";

  containerFiltro.appendChild(checkbox);
  containerFiltro.appendChild(label);
  document.body.insertBefore(containerFiltro, document.body.firstChild);

  checkbox.addEventListener("change", () => {
    document.querySelectorAll(
      ".submod, .baseperso-card, .bifolha-card, .concilia-card, .lalur-card"
    ).forEach((card) => {
      if (modulosManutencao.includes(card.dataset.modulo)) {
        card.style.display = checkbox.checked ? "none" : "flex";
      }
    });
  });
}
criarCheckboxFiltro();
