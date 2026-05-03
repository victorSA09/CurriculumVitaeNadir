// Interações leves para menu mobile, animações de rolagem e ajustes visuais do cabeçalho.
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  const year = document.getElementById("year");
  const header = document.querySelector(".header");
  const revealElements = document.querySelectorAll(".reveal");

  // Alterna o menu em telas menores com suporte a aria-expanded.
  toggle?.addEventListener("click", () => {
    nav?.classList.toggle("open");
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
  });

  // Fecha o menu ao clicar em um link para melhorar UX no mobile.
  nav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle?.setAttribute("aria-expanded", "false");
    });
  });

  // Atualiza o ano automaticamente no rodapé.
  if (year) year.textContent = new Date().getFullYear();

  // Destaca visualmente o cabeçalho ao rolar a página.
  const handleScroll = () => {
    if (window.scrollY > 20) header?.classList.add("scrolled");
    else header?.classList.remove("scrolled");
  };
  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });

  // Animações sutis de entrada conforme os blocos entram no viewport.
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((el) => observer.observe(el));
});
