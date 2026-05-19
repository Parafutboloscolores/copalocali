const players = [
  {
    name: "FER",
    image: "Img/FER.png",
    role: "El Rey Bajo Asedio",
    trophies: 2,
    blurb: "Dominante, protector del trono, agresivo.",
    text: "Es el rival a batir, el tirano del mando, el hombre que mira a los demas por encima del hombro porque en sus vitrinas ya brillan dos Copas Locali. Juega con el cuchillo entre los dientes y un muro de hormigon en defensa, pero ojo, que cuando cruza el medio campo se le nubla la vista. Su procesador de audio viene con una frase predeterminada de fabrica: Ah, que lastima. Medio torneo reza para que le toque como pareja y el otro medio quiere verle morder el polvo. La gran pregunta que quita el sueno al vestuario es: Habra triplete e historia este ano o mordera el polvo el Rey?"
  },
  {
    name: "RIVAS",
    image: "Img/RIVAS.png",
    role: "El Campeon de la Ley Seca",
    trophies: 1,
    blurb: "Virtuoso, completo, pifa.",
    text: "Actual poseedor de un cristal y el jugador total: ataca, defiende, asiste y destruye. Es la pareja que despierta el deseo mas humedo y, a la vez, el odio mas profundo en el resto de participantes. Pero este ano el avatar viene con un buffeo inesperado en su codigo de programacion: ha dejado el alcohol. El gran misterio de la ciencia para esta tercera edicion de la Copa Locali es descubrir si su sobriedad le convertira en un superguerrero imbatible o si, por el contrario, confirmaremos la teoria de que gano las ediciones anteriores gracias al Bacardi."
  },
  {
    name: "MOLON",
    image: "Img/MOLON.png",
    role: "El Fenix Capilar",
    blurb: "En constante adaptacion, busca la seguridad, jugo en el Leganes.",
    text: "No os dejeis enganar por su discreta actuacion en la ultima edicion; este avatar tiene memoria de finalista. Es una pareja segura, fiable y con menos riesgo que invertir en bonos del Estado. En la primera edicion llego a la final de la Copa Locali impulsado por una aerodinamica perfecta, pero este ano estrena una actualizacion de texturas brutal: ahora tiene pelo. Fue la ultima edicion una mera fase de adaptacion a su nueva densidad capilar o simplemente falto riesgo? Si logra sincronizar su nuevo flequillo con el joystick, es un candidato serio."
  },
  {
    name: "ZANCHE",
    image: "Img/ZANCHE.png",
    role: "El Eterno Semifinalista",
    blurb: "Siempre cerca, jugador destacado, palmares rizado.",
    text: "Un jugador premium atrapado en el bucle temporal de las semifinales de la Copa Locali. Lo tiene todo para triunfar, pero la suerte le esquiva como si fuera una cerveza. El primer ano sufrio cruces salidos del mismisimo infierno; el segundo ano, teniendo una pareja galactica, fue eliminado sorprendentemente por una Italia ruda de repesca. Un avatar de contrastes puros, capaz de lo mejor y de lo mas tonto. Este ano llega con hambre de romper la maldicion del casi y demostrar que sus rizos estan listos para la gloria de la final."
  },
  {
    name: "PETRI",
    image: "Img/PETRI.png",
    role: "El Muro de Perfil Bajo",
    blurb: "Estable, lenero, seguro.",
    text: "El rey de la linea recta. Si buscas fuegos artificiales o bicicletas a lo Cristiano Ronaldo, buscate a otro. Petri es la estabilidad hecha joystick: duro atras, rocoso, un seguro de vida en campo propio... pero con un panico atroz a pisar el area contraria. Capaz de tumbar a un gigante en primera ronda o de irse a la calle a las primeras de cambio por falta de gol. La gran incognita del torneo: Desbloqueara este ano la confianza ofensiva o se quedara viviendo placidamente bajo la fase de grupos de la Copa Locali?"
  },
  {
    name: "JULI",
    image: "Img/JULI.png",
    role: "El Gigante del Chachan",
    blurb: "Veterano ilustre, jugador de banda, no usa el sofa rojo.",
    text: "Leyenda viva del PES 2009 en la historia del Locali. Un jugador de mucha talla y el companero ideal que todo el mundo quiere ver junto a su bolita. Su jugador de banda es patrimonio cultural del torneo y su tecnica de desestabilizacion acustica, el mitico chachan, chachan, destruye la psicologia de cualquier rival. Tras probar el amargo sabor del cristal, subcampeon en la segunda edicion, este ano el destino le debe una Copa Locali. Le acompanaran los astros en los cruces para coronar al fin al rey de la banda?"
  },
  {
    name: "JORGE",
    image: "Img/JORGE.png",
    role: "El Pepe Reina Sin Cadenas",
    blurb: "El alma de la fiesta, vive el presente, libre de ataduras.",
    text: "El jugador que podria justificar la existencia de la Copa Locali. Le da exactamente igual quien sea su pareja, el estado del cesped o la tactica del rival; el viene con la cerveza en la mano, la sonrisa puesta y el espiritu de Pepe Reina en la Eurocopa. Aunque en sus anteriores participaciones cayo temprano en fase de grupos o cruces tempraneros, este ano su barra de energia viene dopada con el modificador mas poderoso del mercado: viene sin ninos. Completamente libre, motivado y dispuesto a que la moneda salga de cara para sembrar el caos en las fases finales."
  },
  {
    name: "ROBER",
    image: "Img/ROBER.png",
    role: "El Atleta Aerodinamico",
    blurb: "Fisico, triatleta, autoexigente.",
    text: "Un Ferrari con el motor a punto de estallar. Tambien de los que mas disfruta. Fisicamente impecable, 100 por 100 aerodinamico, corre, rinde y te sube el animo en el vestuario hasta dejarte listo para la guerra. Es el companero motivador definitivo, siempre y cuando sus propios nervios y el buffet libre de la Copa Locali no le jueguen una mala pasada. Su rendimiento es una ruleta rusa emocional provocada por el abuso en la ingesta de comidas pre-partido: o te lleva en volandas a la final, o se marca un colapso epico lejos de los focos. Pura emocion y adrenalina capilar."
  },
  {
    name: "PACHA",
    image: "Img/PACHA.png",
    role: "El Enemigo Publico N. 1",
    blurb: "Villano necesario, busca provocacion y reconocimiento.",
    text: "Jugar con Pacha no es apto para mentes debiles. Si te toca como pareja, asume que juegas a domicilio todos los partidos: el pabellon entero va a pitaros y querra vuestra destruccion. Destacable como pocos, subcampeon en la primera edicion de la Copa Locali junto a Molon cuando nadie daba un duro por ellos, Pacha se alimenta del odio. Busca desesperadamente nutrir su ego ganador y que le reconozcan de una vez por todas como el padre fundador del embrion del torneo y de los equipos clasicos, un mito que nadie ha podido confirmar. Su avatar viene con el comando de voz desbloqueado: Que os jodan, que os jodan."
  },
  {
    name: "JUANQUI",
    image: "Img/JUANQUI.png",
    role: "El Mago de la Perilla Sobria",
    blurb: "Tecnico, silencioso, transforma el juego sin hacer ruido.",
    text: "La elegancia hecha jugador. Juanqui no te va a gritar en la oreja ni va a celebrar un gol en tu cara para desestabilizarte; el te destruye con la templanza y una calidad tecnica insultante, siendo de los jugadores mas tecnicos de la Copa Locali. A pesar de su innegable talento, la suerte le escupio en la cara en la pasada edicion cayendo en unas semis durisimas junto a Juli. Pero cuidado: este ano el avatar viene con una actualizacion estetica demoledora: mas perilla, mas dioptrias y mas ganas que nunca."
  },
  {
    name: "INDIO",
    image: "Img/INDIO.png",
    role: "El Rey de la Repesca",
    blurb: "Un 10, pezunas y MHDP.",
    text: "El eterno superviviente de la Copa Locali. Excepto en la primera edicion, siempre se ha colado en la convocatoria en la ultima repesca, a veces invitado, otras por meritos propios. Humilde ante el microfono, necesito entrenar mas, pero un titan intratable a la hora de arengar y motivar a su companero con una actitud ganadora enfermiza. Que le pregunten a Zanche y Miguel a quien elimino en cuartos de final la edicion pasada. Viene mas entrenado, mas motivado que nunca."
  },
  {
    name: "EXPO",
    image: "Img/EXPO.png",
    role: "El General del Catenaccio",
    blurb: "Rudo, imperturbable, Mahou.",
    text: "Su juego es un monumento al Catenaccio mas rudo, ordenado y destructivo: si el rival tiene un crack, su objetivo es lesionar a todos los jugadores posibles del equipo contrario. Jugar con el es jugar a la contra y a la pura supervivencia defensiva. Su avatar tiene una resistencia legendaria: es bastante probable que hoy se beba 18 cervezas entre pecho y espalda y su rostro seguira mostrando la misma inexpresividad que una estatua de marmol. Esa rudeza te puede llevar directo a la gloria de la Copa Locali o dejarte en el camino."
  },
  {
    name: "YERAI",
    image: "Img/YERAI.png",
    role: "El Hombre Tranquilo",
    blurb: "Pacifico, inteligente, Lobi.",
    text: "El monje zen de la Copa Locali. Yerai ha tenido un papel relevante en todas las ediciones, pero mientras los demas chillan, sudan y tiran mandos, el aporta estabilidad con un juego inteligente y un orden envidiable. Es un avatar de calidad que simplemente esta esperando a encontrar la horma de su zapato. Dale la pareja adecuada que aporte ese punto de riesgo que a el le falta, y tendras un combo letal capaz de plantarse en las fases finales del torneo sin despeinarse."
  },
  {
    name: "CHEN",
    image: "Img/CHEN.png",
    role: "El Fundador",
    trophies: 1,
    blurb: "Padre del juego, obsesivo, piti.",
    text: "Junto a Fer, el autentico Founder y creador de este campeonato llamado Copa Locali. Le dedica mas horas a organizar este torneo que a cualquier trabajo conocido por el ser humano, movido por la maxima ilusion de que el dia salga perfecto. Ya sabe lo que es campeonar, gano la primera edicion y tiene su cristal, pero los nervios y las ganas ansiosas de repetir le pasaron factura en la segunda edicion cayendo en octavos y cuartos. Este ano viene con un objetivo claro y una promesa sagrada para su avatar: si pasa de octavos, igual se echa un piti. Pase lo que pase, el ya se siente ganador."
  },
  {
    name: "BUYO",
    image: "Img/BUYO.png",
    role: "El Purista de Toda la Vida",
    blurb: "Hasta el final, testarudo, pa que tu me entiendas.",
    text: "Una de las parejas mas cotizadas de los cruces gracias a sus incontables horas de entrenamiento en el PES 2009 y a esa mirada profunda que intimida a los rivales. Su libro de estrategia solo tiene una pagina: juego por la banda y nunca por el centro. Un jugador renegon, proteston, pero con un alma asociativa innegable que siempre repite su famosa frase: Hay que hacer la de toda la vida. Aunque todavia no sabe lo que es catar el cristal y las mieles de la Copa Locali, su avatar viene con ganas de quedarse hasta el final y descubrir si este ano los cruces le sonrien."
  }
];

const teams = [
  {
    name: "RSC Anderlecht Classic",
    players: ["Jan Rensenbrink", "Philippe Albert", "Romelu Lukaku"],
    colors: ["#582c83", "#ffffff"]
  },
  {
    name: "USC Palermo Classic",
    players: ["Edinson Cavani", "Paulo Dybala", "Luca Toni"],
    colors: ["#f39ac7", "#111111"]
  },
  {
    name: "Santos FC Classic",
    players: ["Neymar Jr", "Robinho", "Pele"],
    colors: ["#ffffff", "#111111"]
  },
  {
    name: "Estrella Roja Classic",
    players: ["Sinisa Mihajlovic", "Darko Pancev", "Dragan Dzajic"],
    colors: ["#d71920", "#ffffff"]
  },
  {
    name: "Rangers FC Classic",
    players: ["Paul Gascoigne", "Brian Laudrup", "Ally McCoist"],
    colors: ["#1e4fbf", "#ffffff"]
  },
  {
    name: "Celtic FC Classic",
    players: ["Johnstone", "Shunsuke Nakamura", "Kenny Dalglish"],
    colors: ["#1f8f47", "#ffffff"]
  },
  {
    name: "CR Flamengo Classic",
    players: ["Zico", "Ronaldinho", "Romario"],
    colors: ["#b31217", "#111111"]
  },
  {
    name: "Getafe FC Classic",
    players: ["Dani Parejo", "Gheorghe Craciunescu", "Javier Casquero"],
    colors: ["#1256c4", "#f0c419"]
  },
  {
    name: "Middlesbrough Classic",
    players: ["Juninho Paulista", "Gianluca Ravanelli", "Jimmy Floyd Hasselbaink"],
    colors: ["#c5162e", "#ffffff"]
  },
  {
    name: "VfB Stuttgart Classic",
    players: ["Jurgen Klinsmann", "Fredi Bobic", "Alexander Hleb"],
    colors: ["#ffffff", "#d71f28"]
  },
  {
    name: "Everton FC Classic",
    players: ["Gary Lineker", "Wayne Rooney", "Dixie Dean"],
    colors: ["#2358c5", "#ffffff"]
  },
  {
    name: "Feyenoord Classic",
    players: ["Roy Makaay", "Robin van Persie", "Pierre van Hooijdonk"],
    colors: ["#d11f2f", "#ffffff"]
  },
  {
    name: "Torino FC Classic",
    players: ["Abedi Pele", "Gigi Meroni", "Enzo Scifo"],
    colors: ["#7b2230", "#ffffff"]
  },
  {
    name: "Dinamo Kiev Classic",
    players: ["Andriy Shevchenko", "Serhiy Rebrov", "Oleg Blokhin"],
    colors: ["#ffffff", "#1f5bd8"]
  },
  {
    name: "Hamburger SV Classic",
    players: ["Franz Beckenbauer", "Ruud van Nistelrooy", "Kevin Keegan"],
    colors: ["#ffffff", "#d51e2b"]
  },
  {
    name: "Aston Villa FC Classic",
    players: ["Dwight Yorke", "Jack Grealish", "Dejan Milosevic"],
    colors: ["#7a1f3d", "#7cc3f2"]
  },
  {
    name: "AJ Auxerre Classic",
    players: ["Djibril Cisse", "Taribo West", "Eric Cantona"],
    colors: ["#ffffff", "#1f5bd8"]
  },
  {
    name: "Deportivo Alaves Classic",
    players: ["Javi Moreno", "Quincoces", "Ciriaco"],
    colors: ["#1f56b5", "#ffffff"]
  },
  {
    name: "Albacete Classic",
    players: ["Diego Costa", "Ivan Helguera", "Zalazar"],
    colors: ["#ffffff", "#111111"]
  },
  {
    name: "Nottingham Forest Classic",
    players: ["Roy Keane", "Andy Cole", "Peter Shilton"],
    colors: ["#d71920", "#ffffff"]
  },
  {
    name: "UD Las Palmas Classic",
    players: ["Quique Wolff", "Brindisi", "Luis Molowny"],
    colors: ["#f2d21b", "#1f56b5"]
  },
  {
    name: "Real Oviedo Classic",
    players: ["Santi Cazorla", "Peter Dubovsky", "Isidro Langara"],
    colors: ["#1e6ae1", "#ffffff"]
  },
  {
    name: "SE Palmeiras Classic",
    players: ["Rivaldo", "Roberto Carlos", "Djalminha"],
    colors: ["#0d7a43", "#ffffff"]
  },
  {
    name: "CD Tenerife Classic",
    players: ["Fernando Redondo", "Pizzi", "Oliver Neuville"],
    colors: ["#ffffff", "#1e6ae1"]
  },
  {
    name: "Steaua Bucuresti Classic",
    players: ["Gheorghe Hagi", "Helmuth Duckadam", "Ilie"],
    colors: ["#1b4db3", "#d71920"]
  },
  {
    name: "UD Salamanca Classic",
    players: ["Pauleta", "Carlos Vela", "Joao Alves"],
    colors: ["#111111", "#ffffff"]
  },
  {
    name: "Sao Paulo FC Classic",
    players: ["Rai", "Kaka", "Careca"],
    colors: ["#ffffff", "#d71920"]
  },
  {
    name: "Girondins de Bordeaux Classic",
    players: ["Zinedine Zidane", "Antonio Chalana", "Fabian Cavenaghi"],
    colors: ["#173a7a", "#ffffff"]
  },
  {
    name: "SK Rapid Viena Classic",
    players: ["Josef Bican", "Antonin Panenka", "Hans Krankl"],
    colors: ["#1f8f47", "#ffffff"]
  }
];

const playerGrid = document.getElementById("playerGrid");
const teamList = document.getElementById("teamList");
const navLinks = document.querySelectorAll(".nav-link");
const panels = document.querySelectorAll(".panel");
const playerModal = document.getElementById("playerModal");
const modalPlayerImage = document.getElementById("modalPlayerImage");
const modalPlayerName = document.getElementById("modalPlayerName");
const modalPlayerTrophies = document.getElementById("modalPlayerTrophies");
const modalPlayerRole = document.getElementById("modalPlayerRole");
const modalPlayerBlurb = document.getElementById("modalPlayerBlurb");
const modalPlayerText = document.getElementById("modalPlayerText");

function renderPlayers() {
  playerGrid.innerHTML = players.map((player) => `
    <article class="player-card" data-player-name="${player.name}" tabindex="0" role="button" aria-label="Abrir ficha de ${player.name}">
      <div class="player-photo">
        <img src="${player.image}" alt="${player.name}">
      </div>
      <div class="player-name-row">
        <h4>${player.name}</h4>
        ${player.trophies ? `<span class="player-trophies" aria-label="${player.trophies} trofeos">${"&#127942;".repeat(player.trophies)}</span>` : ""}
      </div>
      <p class="team-meta">${player.role}</p>
      <p class="team-meta">${player.blurb}</p>
      <div class="player-details">
        <div class="player-details-inner">
          <p>${player.text}</p>
        </div>
      </div>
    </article>
  `).join("");

  document.querySelectorAll(".player-card").forEach((card) => {
    const player = players.find((item) => item.name === card.dataset.playerName);

    if (!player) {
      return;
    }

    card.addEventListener("click", () => openPlayerModal(player));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openPlayerModal(player);
      }
    });
  });
}

function renderTeams() {
  teamList.innerHTML = teams.map((team) => `
    <article class="team-card">
      <p class="section-tag">Equipo</p>
      <h4>${team.name}</h4>
      <div class="kit-preview" style="--kit-primary:${team.colors[0]}; --kit-secondary:${team.colors[1]};">
        <div class="kit-body">
          <div class="stripe"></div>
        </div>
      </div>
      <ol>
        ${team.players.map((name) => `<li>${name}</li>`).join("")}
      </ol>
    </article>
  `).join("");
}

function openPlayerModal(player) {
  modalPlayerImage.src = player.image;
  modalPlayerImage.alt = player.name;
  modalPlayerName.textContent = player.name;
  modalPlayerTrophies.innerHTML = player.trophies ? "&#127942;".repeat(player.trophies) : "";
  modalPlayerTrophies.setAttribute("aria-label", player.trophies ? `${player.trophies} trofeos` : "");
  modalPlayerRole.textContent = player.role;
  modalPlayerBlurb.textContent = player.blurb;
  modalPlayerText.innerHTML = `<p>${player.text}</p>`;
  playerModal.classList.add("is-open");
  playerModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closePlayerModal() {
  playerModal.classList.remove("is-open");
  playerModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function showPanel(targetId) {
  panels.forEach((panel) => {
    panel.classList.toggle("is-visible", panel.id === targetId);
  });

  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.dataset.target === targetId);
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => showPanel(link.dataset.target));
});

document.querySelectorAll("[data-close-modal]").forEach((element) => {
  element.addEventListener("click", closePlayerModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && playerModal.classList.contains("is-open")) {
    closePlayerModal();
  }
});

renderPlayers();
renderTeams();
