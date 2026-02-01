const fluxos = {



  /** INICIO **/
  bem_vindo: {
    falas: [
      "Bem-vindo! Esta página foi criada para apresentar de forma clara e interativa o Modelo Calgary de Avaliação Familiar.",
      "Ao entrar no consultório virtual, você terá acesso às opções de perguntas e respostas diretas sobre o método."
    ],
    opcoes: [
      {
        texto: "Ir para recepção",
        tipo: "porta",
        destino: "inicio",
        placa: "Recepção"
      }
    ]
  },


  inicio: {
    falas: ["Olá, seja bem vindo(a)! Como posso lhe ajudar hoje?"],
    opcoes: [
      {
        texto: "Gostaria de tirar algumas dúvidas sobre a avaliação familiar, especificamente sobre o Modelo Calgary…",
        tipo: "fluxo",
        destino: "explicacao_inicial"
      },
    ]
  },

  explicacao_inicial: {
    falas: [
      "Certo! Primeiramente é importante falar que a avaliação familiar é utilizada em diferentes contextos para compreender como a familia se organiza, se desenvolve e funciona.",
      "Um dos modelos mais usados para isso é o Modelo Calgary... O Modelo Calgary de Avaliação Familiar (MCAF) é uma metodologia\n desenvolvida por teóricos canadenses da Universidade de Calgary que permite compreender a familia em seu cotidiano,\n considerando não apenas o individuo, mas também suas relações, vinculos e contexto.",
      "O modelo oferece uma visão integral da familia como um sistema interligado em que cada membro influencia os demais. Além disso, auxilia no planejamento de cuidados de forma humanizada e sensível à cultura e às particularidades familiares, com aplicação em diferentes cenários, como atenção primária, hospitais e programas de saúde da familia.",
      "Para facilitar a avaliação, utiliza o genograma, que representa a estrutura familiar ao longo das gerações, e o ecomapa, que demonstra as relações da familia com a comunidade e os serviços.",
      "A análise é organizada em três eixos principais. Sobre qual deles você gostaria de saber mais?"
    ],
    opcoes: [
      {
        texto: "Eixo estrutural",
        tipo: "porta",
        destino: "estrutural"
      },
      {
        texto: "Eixo do desenvolvimento",
        tipo: "porta",
        destino: "desenvolvimento"
      },
      {
        texto: "Eixo Funcional",
        tipo: "porta",
        destino: "funcional"
      }
    ]
  },

  explicacao_inicial_resumo: {
    falas: [
      "A análise é organizada tem três eixos principais. Sobre qual deles você gostaria de saber mais?"
    ],
    opcoes: [
      {
        texto: "Eixo estrutural",
        tipo: "porta",
        destino: "estrutural"
      },
      {
        texto: "Eixo do desenvolvimento",
        tipo: "porta",
        destino: "desenvolvimento"
      },
      {
        texto: "Eixo Funcional",
        tipo: "porta",
        destino: "funcional"
      },
      {
        texto: "Poderia explicar novamente?",
        tipo: "fluxo",
        destino: "explicacao_inicial"
      },
    ]
  },


  /** EIXO ESTRUTURAL **/
  estrutural: {
    texto: "Este eixo mostra como a família está organizada e quais fatores internos e externos influenciam sua dinâmica.\n Gostaria de saber mais sobre algum desses fatores?",
    opcoes: [
      {
        texto: "Interna",
        tipo: "fluxo",
        destino: "estrutural_interna"
      },
      {
        texto: "Externa",
        tipo: "fluxo",
        destino: "estrutural_externa"
      },
      {
        texto: "Contexto",
        tipo: "fluxo",
        destino: "estrutural_contexto"
      },
      {
        texto: "Quero conhecer as outras salas.",
        tipo: "porta",
        destino: "explicacao_inicial_resumo",
        placa: "Recepçao"
      },
    ]
  },
  estrutural_interna: {
    texto: "Interna: composição familiar, gênero, orientação sexual, ordem de nascimento, subsistemas (pais-filhos, irmãos), limites;",
    opcoes: [
      {
        texto: "Legal! Desejo voltar",
        tipo: "fluxo",
        destino: "estrutural"
      },
      {
        texto: "Sobre o que fala o fator externo?",
        tipo: "fluxo",
        destino: "estrutural_externa"
      },
      {
        texto: "Você havia falado sobre o Contexto, não é?",
        tipo: "fluxo",
        destino: "estrutural_contexto"
      },
    ]
  },
  estrutural_externa: {
    texto: "Externa: familia extensa (avós, tios, primos) e sistemas mais amplos (escola, trabalho, serviços de saude).",
    opcoes: [
      {
        texto: "Legal! Desejo voltar",
        tipo: "fluxo",
        destino: "estrutural"
      },
      {
        texto: "Queria saber sobre o Interno",
        tipo: "fluxo",
        destino: "estrutural_interna"
      },
      {
        texto: "Você havia falado sobre o Contexto, não é?",
        tipo: "fluxo",
        destino: "estrutural_contexto"
      },
    ]
  },
  estrutural_contexto: {
    texto: "Contexto: etnia, raça, classe social, religião/espiritualidade, ambiente físico e social.",
    opcoes: [
      {
        texto: "Legal! Desejo voltar",
        tipo: "fluxo",
        destino: "estrutural"
      },
      {
        texto: "Sobre o que fala o fator externo?",
        tipo: "fluxo",
        destino: "estrutural_externa"
      },
      {
        texto: "Queria saber sobre o fator interno",
        tipo: "fluxo",
        destino: "estrutural_interna"
      },
    ]
  },




  /** EIXO DO DESENVOLVIMENTO **/
  desenvolvimento: {
    falas: [
      "O eixo do desenvolvimento foca na trajetória da família ao longo do tempo, considerando mudanças e adaptações.",
      "Podemos dividir em três sub tópicos, quais deles você gostaria de saber?",
    ],
    opcoes: [
      {
        texto: "Estágios",
        tipo: "fluxo",
        destino: "desenvolvimento_estagios"
      },
      {
        texto: "Tarefas",
        tipo: "fluxo",
        destino: "desenvolvimento_tarefas"
      },
      {
        texto: "Vínculos",
        tipo: "fluxo",
        destino: "desenvolvimento_vinculos"
      },
      {
        texto: "Quero conhecer as outras salas.",
        tipo: "porta",
        destino: "explicacao_inicial_resumo",
        placa: "Recepçao"
      },
    ]
  },
  desenvolvimento_estagios: {
    texto: "Estágios: ciclo de vida familiar (formação do casal, chegada dos filhos, envelhecimento).",
    opcoes: [
      {
        texto: "Legal! Desejo voltar",
        tipo: "fluxo",
        destino: "desenvolvimento"
      },
      {
        texto: "Sobre o que falam as tarefas?",
        tipo: "fluxo",
        destino: "desenvolvimento_tarefas"
      },
      {
        texto: "Você havia falado sobre os vínculos, não é?",
        tipo: "fluxo",
        destino: "desenvolvimento_vinculos"
      },
    ]
  },
  desenvolvimento_tarefas: {
    texto: "Tarefas: São as responsabilidades e desafios de cada fase.",
    opcoes: [
      {
        texto: "Legal! Desejo voltar",
        tipo: "fluxo",
        destino: "desenvolvimento"
      },
      {
        texto: "Queria saber sobre o Estágios",
        tipo: "fluxo",
        destino: "desenvolvimento_estagios"
      },
      {
        texto: "Você havia falado sobre o vínculos, não é?",
        tipo: "fluxo",
        destino: "desenvolvimento_vinculos"
      },
    ]
  },
  desenvolvimento_vinculos: {
    texto: "Vínculos: É a forma como os laços familiares se fortalecem ou se transformam ao longo das transições.",
    opcoes: [
      {
        texto: "Legal! Desejo voltar",
        tipo: "fluxo",
        destino: "desenvolvimento"
      },
      {
        texto: "Queria saber sobre o Estágios",
        tipo: "fluxo",
        destino: "desenvolvimento_estagios"
      },
      {
        texto: "Sobre o que fala sobre a Tarefas?",
        tipo: "fluxo",
        destino: "desenvolvimento_tarefas"
      },
    ]
  },












  /** EIXO FUNCIONAL **/
  funcional: {
    falas: [
      "O eixo funcional mostra como a família funciona no dia a dia, tanto em aspectos práticos quanto emocionais.",
      "Existem dois tipos de funcionamento como instrumental e expressivo",
      "Instrumental: atividades cotidianas (alimentação, higiene, organização da casa).",
      "Expressiva: comunicação verbal, não verbal e emocional; solução de problemas; papéis; influência e poder; crenças; alianças e uniões.",
    ],
    opcoes: [
      {
        texto: "Legal! Quero conhecer as outras salas.",
        tipo: "porta",
        destino: "explicacao_inicial_resumo",
        placa: "Recepçao"
      },
    ]
  },


};

let fluxoAtual = "bem_vindo";
// fluxoAtual = "explicacao_inicial";
// let fluxoAtual = "estrutural";
// fluxoAtual = 'bem_vindo';



const corredor = document.getElementById("corredor");
// const fala = document.getElementById("fala");
const opcoesContainer = document.getElementById("opcoes");


let sequenciaInterrompida = false;
let digitandoAtual = null;
let callbackFinalFalas = null;


function irParaCena(index, animar = true) {




  if (!animar) {
    corredor.style.transition = "none";

    const fade = document.getElementById("fade");

    setTimeout(() => {
      fade.classList.remove("ativo");

      // 7️⃣ Reseta porta
      porta.classList.remove("aberta", "zoom");

    }, 100);
  } else {
    corredor.style.transition = "transform 0.8s ease";
  }

  corredor.style.transform = `translateX(-${index * 100}vw)`;

  if (!animar) {
    requestAnimationFrame(() => {
      corredor.style.transition = "transform 0.8s ease";
    });
  }
}

function renderizarFluxo() {

  const fluxo = fluxos[fluxoAtual];
  opcoesContainer.innerHTML = "";

  const mensagensContainer = document.getElementById("mensagens");
  mensagensContainer.innerHTML = "";

  const cenaFluxo = document.getElementById("fluxo");
  cenaFluxo.classList.remove("ativo");

  requestAnimationFrame(() => {
    cenaFluxo.classList.add("ativo");
  });

  let falas = [];

  if (fluxo.falas) {
    falas = fluxo.falas;
  } else if (fluxo.texto) {
    falas = [fluxo.texto];
  }

  renderizarFalasSequenciais(falas, () => {
    renderizarOpcoes(fluxo.opcoes);
  });
}

function renderizarFalasSequenciais(falas, callbackFinal) {

  const container = document.getElementById("mensagens");

  sequenciaInterrompida = false;
  callbackFinalFalas = callbackFinal;

  let index = 0;

  function proximaFala() {

    if (sequenciaInterrompida) return;

    if (index >= falas.length) {
      if (callbackFinal) callbackFinal();
      return;
    }

    const balao = document.createElement("div");
    balao.classList.add("balao");

    if (index === 0) {
      balao.classList.add("com-seta");
    }

    const p = document.createElement("p");
    balao.appendChild(p);
    container.appendChild(balao);

    digitandoAtual = {
      texto: falas[index],
      elemento: p,
      balao: balao
    };

    digitarTextoEmElemento(falas[index], p, balao, () => {
      index++;
      setTimeout(proximaFala, 400);
    });

  }

  proximaFala();
}


function digitarTextoEmElemento(texto, elemento, balao, callback) {

  animarBraco(true);
  animarBoca(true);

  elemento.innerHTML = "";
  let i = 0;
  let digitando = true;

  balao.classList.add("pulavel");

  let indicador = document.createElement("div");
  indicador.classList.add("pular-indicador");
  indicador.innerText = "(clique para pular)";
  balao.appendChild(indicador);

  function escrever() {

    if (!digitando) return;

    if (i < texto.length) {

      elemento.innerHTML += texto[i];

      let delay = 20;
      if (i < 15) delay = 40;
      if (".!?".includes(texto[i])) delay = 250;

      i++;
      setTimeout(escrever, delay);

    } else {
      finalizar();
    }
  }

  function finalizar() {

    digitando = false;
    elemento.innerHTML = texto;
    balao.classList.remove("pulavel");

    if (indicador) indicador.remove();

    animarBraco(false);
    animarBoca(false);

    if (callback) callback();
  }

  balao.onclick = () => {

    if (digitando) {
      revelarTudo();
    }

  };

  escrever();
}


function revelarTudo() {

  if (!digitandoAtual) return;

  sequenciaInterrompida = true;

  const container = document.getElementById("mensagens");
  container.innerHTML = "";

  const fluxo = fluxos[fluxoAtual];

  let falas = fluxo.falas || [fluxo.texto];

  falas.forEach((falaTexto, index) => {

    const balao = document.createElement("div");
    balao.classList.add("balao");

    if (index === 0) {
      balao.classList.add("com-seta");
    }

    const p = document.createElement("p");
    p.innerText = falaTexto;

    balao.appendChild(p);
    container.appendChild(balao);

  });

  animarBraco(false);
  animarBoca(false);

  if (callbackFinalFalas) {
    callbackFinalFalas();
  }
}


function renderizarOpcoes(opcoes) {

  opcoesContainer.innerHTML = "";

  opcoes.forEach((opcao, index) => {

    const btn = document.createElement("button");
    btn.innerText = opcao.texto;
    btn.onclick = () => executarOpcao(opcao);

    opcoesContainer.appendChild(btn);

    setTimeout(() => {
      btn.classList.add("visivel");
    }, 200 * index);

  });

  setTimeout(() => {
    resetarAFK();
  }, opcoes.length * 200 + 300);
}





function executarOpcao(opcao) {

  pararAFK();

  if (opcao.tipo === "fluxo") {
    fluxoAtual = opcao.destino;
    renderizarFluxo();
  }

  if (opcao.tipo === "porta") {
    apontarParaPorta();

    let placa = opcao.destino;
    if (opcao.placa) {
      placa = opcao.placa;
    }

    abrirPorta(opcao);
  }
}

function abrirPorta(opcao) {

  const porta = document.getElementById("porta-visual");
  const label = document.getElementById("porta-label");
  const fade = document.getElementById("fade");


  let placa = opcao.destino;
  if (opcao.placa) {
    placa = opcao.placa;
  }
  label.innerText = placa.toUpperCase();

  fade.classList.add("ativo");

  setTimeout(() => {
    irParaCena(1, false);
    fade.classList.remove("ativo");
  }, 600);
  iniciarAFKPorta();


  porta.classList.remove("aberta", "zoom");
  porta.style.pointerEvents = "auto";

  porta.onclick = () => {

    porta.onclick = null;
    pararAFKPorta();

    document.querySelectorAll(".macaneta").forEach(m => {
      m.classList.add("pressionada");
    });

    // 1️⃣ Zoom
    porta.classList.add("zoom");

    setTimeout(() => {

      // 2️⃣ Abre porta
      porta.classList.add("aberta");

      setTimeout(() => {

        // 3️⃣ Tela fica preta
        // 3️⃣ Tela fica preta
        fade.classList.add("ativo");

        setTimeout(() => {

          // 4️⃣ Troca fluxo enquanto está preto
          fluxoAtual = opcao.destino;
          renderizarFluxo();

          pararAFKPorta();

          // 5️⃣ Volta para cena principal
          irParaCena(0, false);

          // 6️⃣ Espera o navegador aplicar layout antes de tirar fade
          setTimeout(() => {
            fade.classList.remove("ativo");

            // 7️⃣ Reseta porta
            porta.classList.remove("aberta", "zoom");
            document.querySelectorAll(".macaneta").forEach(m => {
              m.classList.remove("pressionada");
            });

          }, 100);

        }, 600);




      }, 800); // tempo da porta abrindo

    }, 800); // tempo do zoom

  };
}



let digitando = false;
let textoCompletoAtual = "";
let timeoutDigitacao = null;

function digitarTexto(texto, elemento, callback) {

  animarBraco(true);
  animarBoca(true);


  if (fluxoAtual === "inicio") mudarExpressao("feliz");
  else if (fluxoAtual === "explicacao_inicial") mudarExpressao("neutra");
  else mudarExpressao("seria");

  textoCompletoAtual = texto;
  elemento.innerHTML = "";
  digitando = true;

  const balao = document.querySelector(".balao");
  balao.classList.add("pulavel");

  let indicador = null;
  let timeoutIndicador = null;

  // ⏳ Mostra indicador depois de 1.2s
  timeoutIndicador = setTimeout(() => {
    if (digitando) {
      indicador = document.createElement("div");
      indicador.classList.add("pular-indicador");
      indicador.innerText = "(clique para pular)";
      balao.appendChild(indicador);
    }
  }, 1200);

  let i = 0;

  function escrever() {

    if (!digitando) return;

    if (i < texto.length) {

      elemento.innerHTML += texto[i];

      let delay = 20;

      if (i < 15) delay = 40;
      if (".!?".includes(texto[i])) delay = 250;

      i++;
      timeoutDigitacao = setTimeout(escrever, delay);

    } else {
      finalizar();
    }
  }

  function finalizar() {
    clearTimeout(timeoutDigitacao);
    clearTimeout(timeoutIndicador);

    digitando = false;
    elemento.innerHTML = textoCompletoAtual;

    balao.classList.remove("pulavel");

    if (indicador && indicador.parentElement) {
      indicador.remove();
    }

    if (callback) callback();

    animarBraco(false);
    animarBoca(false);
  }

  escrever();

  balao.onclick = () => {
    if (digitando) {
      finalizar();
    }
  };


}








function piscar() {
  const olhoE = document.getElementById("olhoE");
  const olhoD = document.getElementById("olhoD");

  olhoE.setAttribute("ry", "1");
  olhoD.setAttribute("ry", "1");

  setTimeout(() => {
    olhoE.setAttribute("ry", "6");
    olhoD.setAttribute("ry", "6");
  }, 120);
}

setInterval(() => {
  piscar();
}, 2000 + Math.random() * 2000);


let bracoInterval = null;



// braco esquerdo
function animarBraco(ativo) {
  const braco = document.getElementById("braco");


  if (document.getElementById("braco")
    .getAttribute("transform")
    .includes("55")) return;


  if (ativo) {
    let angulo = -5;
    bracoInterval = setInterval(() => {
      angulo = angulo === -5 ? 5 : -5;
      braco.setAttribute("transform", `rotate(${angulo} 60 180)`);
    }, 300);
  } else {
    clearInterval(bracoInterval);
    braco.setAttribute("transform", "rotate(0 60 180)");
  }
}


let bocaInterval = null;

function animarBoca(ativo) {
  const boca = document.getElementById("boca");

  if (ativo) {
    bocaInterval = setInterval(() => {
      boca.setAttribute(
        "d",
        Math.random() > 0.5
          ? "M85 115 Q100 125 115 115"
          : "M85 115 Q100 135 115 115"
      );
    }, 120);
  } else {
    clearInterval(bocaInterval);
    boca.setAttribute("d", "M85 115 Q100 130 115 115");
  }
}

function mudarExpressao(tipo) {
  const boca = document.getElementById("boca");

  if (tipo === "feliz") {
    boca.setAttribute("d", "M80 115 Q100 145 120 115");
  }

  if (tipo === "neutra") {
    boca.setAttribute("d", "M85 115 Q100 130 115 115");
  }

  if (tipo === "seria") {
    boca.setAttribute("d", "M80 125 Q100 120 120 125");
  }

  if (tipo === "impaciente") {
    boca.setAttribute("d", "M80 125 Q100 118 120 125");
  }

}

function apontarParaPorta() {
  const braco = document.getElementById("braco");
  braco.setAttribute("transform", "rotate(-40 60 180)");
}

function resetarBraco() {
  const braco = document.getElementById("braco");
  braco.setAttribute("transform", "rotate(0 60 180)");
}


function modoExplicacao(ativo) {

  const bracoD = document.getElementById("braco");
  const bracoE = document.getElementById("bracoE");
  const corpo = document.getElementById("corpo");

  if (ativo) {

    // Cruza braços
    bracoD.setAttribute("transform", "rotate(-55 60 180)");
    bracoE.setAttribute("transform", "rotate(55 140 180)");

    // Leve inclinação corporal
    corpo.style.transform = "translateY(2px)";

    mudarExpressao("seria");

  } else {

    // Volta ao normal
    bracoD.setAttribute("transform", "rotate(0 60 180)");
    bracoE.setAttribute("transform", "rotate(0 140 180)");
    corpo.style.transform = "";

  }
}





let cutucadaInterval = null;

function animarCutucada() {

  const braco = document.getElementById("bracoE");

  if (!braco) return;

  let angulo = -5;
  let direcao = 1;

  cutucadaInterval = setInterval(() => {

    angulo += direcao * 6;

    if (angulo > 25 || angulo < -5) {
      direcao *= -1;
    }

    braco.setAttribute(
      "transform",
      `rotate(${angulo} 140 180)`
    );

  }, 120);
}


function pararCutucada() {
  clearInterval(cutucadaInterval);
  document.getElementById("braco")
    .setAttribute("transform", "rotate(0 60 180)");
}



let afkTimeout = null;
let afkAtivo = false;

function resetarAFK() {

  clearTimeout(afkTimeout);

  if (afkAtivo) {
    pararAFK();
  }

  afkTimeout = setTimeout(() => {
    ativarAFK();
  }, 20000); // 20 segundos parado
}

function ativarAFK() {
  afkAtivo = true;

  mudarExpressao("impaciente");
  animarCutucada();
  destacarOpcoes();
}

function pararAFK() {
  afkAtivo = false;

  mudarExpressao("neutra");
  pararCutucada();
  removerDestaqueOpcoes();
}

function destacarOpcoes() {
  opcoesContainer.classList.add("afk");
}

function removerDestaqueOpcoes() {
  opcoesContainer.classList.remove("afk");
}



let afkPortaTimeout = null;
let afkPortaAtivo = false;

// function iniciarAFKPorta() {

//   clearTimeout(afkPortaTimeout);
//   afkPortaAtivo = false;

//   afkPortaTimeout = setTimeout(() => {
//     ativarAFKPorta();
//   }, 6000); // 6 segundos parado
// }

function ativarAFKPorta() {
  afkPortaAtivo = true;

  document
    .getElementById("porta-visual")
    .classList.add("afk");

  document
    .getElementById("avisoPorta")
    .classList.add("ativo");
}

function pararAFKPorta() {

  afkPortaTimers.forEach(timer => clearTimeout(timer));
  afkPortaTimers = [];

  document.getElementById("avisoPorta").classList.remove("ativo");
  document.getElementById("porta-visual").classList.remove("afk");
  document.getElementById("porta-label").classList.remove("tremer");
  document.querySelectorAll(".macaneta").forEach(m => {
    m.classList.remove("afk");
  });
}



let afkPortaTimers = [];
let estagioAFKPorta = 0;

function iniciarAFKPorta() {

  pararAFKPorta(); // limpa qualquer estado anterior
  estagioAFKPorta = 0;

  // 6 segundos → mostrar aviso
  afkPortaTimers.push(setTimeout(() => {
    estagioAFKPorta = 1;
    document.getElementById("avisoPorta").classList.add("ativo");
    document.querySelectorAll(".macaneta").forEach(m => {
      m.classList.add("afk");
    });

  }, 6000));

  // 12 segundos → pulsar porta
  afkPortaTimers.push(setTimeout(() => {
    estagioAFKPorta = 2;
    document.getElementById("porta-visual").classList.add("afk");
  }, 12000));

  // 18 segundos → placa treme
  afkPortaTimers.push(setTimeout(() => {
    estagioAFKPorta = 3;
    document.getElementById("porta-label").classList.add("tremer");
  }, 18000));

}





renderizarFluxo();

