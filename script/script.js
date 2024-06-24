document.addEventListener("DOMContentLoaded", () => {
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
      document.documentElement.style.setProperty("--cor-fundo", "#fff");
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
});
