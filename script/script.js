document.addEventListener("DOMContentLoaded", () => {
  // Botão dark mode
  const btnMudarTema = document.querySelector(".btn-mudar-tema");
  const fundo = document.querySelector(".fundo");
  const imagemBox = document.querySelector(".imagem-box");

  btnMudarTema.addEventListener("click", () => {
    // Alternar classes para mudar o tema
    fundo.classList.toggle("active");
    btnMudarTema.classList.toggle("active");
    imagemBox.classList.toggle("active");

    // Mudar as cores do tema
    if (fundo.classList.contains("active")) {
      document.documentElement.style.setProperty("--cor-principal", "#5ba3ff");
      document.documentElement.style.setProperty("--cor-secundaria", "#2d2d8b");
      document.documentElement.style.setProperty("--cor-terciaria", "#333");
      document.documentElement.style.setProperty("--cor-texto", "#fff");
      document.documentElement.style.setProperty("--cor-fundo", "#dfdfdf");
      document.documentElement.style.setProperty(
        "--cor-botao-fundo",
        "linear-gradient(45deg, #fff, #ddd)"
      );
      document.documentElement.style.setProperty("--cor-botao-borda", "#ddd");
    } else {
      document.documentElement.style.setProperty("--cor-principal", "#5ba3ff");
      document.documentElement.style.setProperty("--cor-secundaria", "#b8e0ff");
      document.documentElement.style.setProperty("--cor-terciaria", "#1a1a2e");
      document.documentElement.style.setProperty("--cor-texto", "#2d2d8b");
      document.documentElement.style.setProperty("--cor-fundo", "#dfdfdf");
      document.documentElement.style.setProperty(
        "--cor-botao-fundo",
        "linear-gradient(45deg, var(--cor-principal), var(--cor-secundaria))"
      );
      document.documentElement.style.setProperty(
        "--cor-botao-borda",
        "var(--cor-secundaria)"
      );
    }
  });

  // Animação das barras de habilidades
  const habilidadesSection = document.querySelector("#habilidades");
  const bars = document.querySelectorAll(".barra span:first-child");

  function animateBars() {
    bars.forEach(bar => {
      const percentage = parseInt(bar.className.match(/\d+/)[0]);
      let width = 0;
      const interval = setInterval(() => {
        if (width >= percentage) {
          clearInterval(interval);
        } else {
          width++;
          bar.style.width = width + '%';
          bar.nextElementSibling.textContent = width + '%';
        }
      }, 30);
    });
  }

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function onScroll() {
    if (isElementInViewport(habilidadesSection)) {
      animateBars();
      window.removeEventListener("scroll", onScroll);
    }
  }

  window.addEventListener("scroll", onScroll);
});

//typewriter aqui

const textDisplay = document.getElementById('texto-animado')

const phrases = ['Desenvolvedor WEB', 'WEB Designer', 'Programador Full stack', 'print não é variável']
let i = 0
let j = 0 
let currentPhrase = []
let isDeleting = false
let isEnd = false

function loop () {
  isEnd = false
  textDisplay.innerHTML = currentPhrase.join('')

  if (i < phrases.length) {

    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j])
      j++
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if(isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j])
      j--
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if (j == phrases[i].length) {
      isEnd = true
      isDeleting = true
    }

    if (isDeleting && j === 0) {
      currentPhrase = []
      isDeleting = false
      i++
      if (i === phrases.length) {
        i = 0
      }
    }
  }
  const spedUp = Math.random() * (80 -50) + 50
  const normalSpeed = Math.random() * (300 -200) + 200
  const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
  setTimeout(loop, time)
}

loop()