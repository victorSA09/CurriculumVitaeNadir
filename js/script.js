// Script responsável por interações simples: menu mobile e ano automático no rodapé.
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  const year = document.getElementById("year");

  // Alterna abertura/fechamento do menu para navegação em dispositivos móveis.
  toggle?.addEventListener("click", () => {
    nav?.classList.toggle("open");
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
  });

  // Atualiza ano no rodapé automaticamente.
  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
