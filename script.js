// Atualiza o ano automaticamente no rodapé.
const yearElement = document.querySelector("#year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Efeito sutil de inclinação nos botões em dispositivos com mouse.
const buttons = document.querySelectorAll(".link-button");

buttons.forEach((button) => {
  button.addEventListener("mousemove", (event) => {
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    button.style.setProperty("--pointer-x", `${x}px`);
    button.style.setProperty("--pointer-y", `${y}px`);
  });
});
