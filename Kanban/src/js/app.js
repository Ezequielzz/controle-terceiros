const cards = [
  {
    id: "1",
    cliente: "Teste",
    os: "12000",
    itens: "Eixo",
    finalidade: "Balancear",

    dataEnvio: "2026-06-11",

    dataOriginalRetorno: "2026-06-11",
    dataPrevistaRetorno: "2026-06-11",
    dataRealRetorno: null,

    reprogramado: false,
    entregueComAtraso: false,

    coluna: "enviados",

    observacoes: "",
  },
  {
    id: "2",
    cliente: "Teste",
    os: "12000",
    itens: "Eixo",
    finalidade: "Balancear",

    dataEnvio: "2026-06-11",

    dataOriginalRetorno: "2026-06-11",
    dataPrevistaRetorno: "2026-06-11",
    dataRealRetorno: null,

    reprogramado: false,
    entregueComAtraso: false,

    coluna: "em-separacao",

    observacoes: "",
  },
  {
    id: "3",
    cliente: "Teste",
    os: "12000",
    itens: "Eixo",
    finalidade: "Balancear",

    dataEnvio: "2026-06-11",

    dataOriginalRetorno: "2026-06-11",
    dataPrevistaRetorno: "2026-06-11",
    dataRealRetorno: null,

    reprogramado: false,
    entregueComAtraso: false,

    coluna: "concluidos",

    observacoes: "",
  },
];

const colSeparacao = document.querySelector("#em-separacao");
const colEnviados = document.querySelector("#enviados");
const colConcluidos = document.querySelector("#concluidos");

console.log(cards);
console.log(colEnviados);

function renderCard(card) {
  return `
    <div class="card">
                <div class="card-top">
                    <div class="tags">
                        <span class="tag gray">Dentro do Prazo</span>
                    </div>
                    <div class="card-actions">
                        <button title="Calendário">📅</button>
                        <button title="Mais opções">⋯</button>
                    </div>
                </div>
                <div class="card-client">
                    <div class="card-radio"></div>
                    <div class="card-info">
                        <span class="client-label">${card.cliente}</span>
                        <span class="client-id">${card.os}</span>
                    </div>
                </div>
                <div class="date gray"><span class="clock-icon">⏱</span> 01 de Jan.</div>
            </div>
    `;
}

function renderizarCards() {
  colSeparacao.innerHTML = "";
  colEnviados.innerHTML = "";
  colConcluidos.innerHTML = "";

  cards.forEach((card) => {
    const htmlCard = renderCard(card);

    switch (card.coluna) {
      case "em-separacao":
        colSeparacao.innerHTML += htmlCard;
        break;

      case "enviados":
        colEnviados.innerHTML += htmlCard;
        break;

      case "concluidos":
        colConcluidos.innerHTML += htmlCard;
        break;
    }
  });
}

renderizarCards();

const switchModal = () => {
  const modal = document.querySelector(".modal");
  const actualStyle = modal.style.display;
  if (actualStyle == "block") {
    modal.style.display = "none";
  } else {
    modal.style.display = "block";
  }
};

const btnModal = document.querySelector(".add-card");
btn.addEventListener("click", switchModal);

window.onclick = function(event) {
    const modal = document.querySelector(".modal");
    if (event.target == modal) {
        switchModal();
    }
}

// function criarCard(dados) {
//     card.push(dados);
//     salvarDados();
// }

// function editarCard(id, novosDados) {
//     const card = cards.find(c => c.id === id);

//     Object.assign(card, novosDados);

//     salvarDados();
// }

// function excluirCard(id) {
//     cards = cards.filter(c => c.id !== id);

//     salvarDados();
// }
