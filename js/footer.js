// Функція для плавного прокручування для посилань в футері
export function smoothScrollFooterLinks() {
  const footerLinks = document.querySelectorAll(
    ".footer-links a, .footer-legal a"
  );
  footerLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });
}

// Функція для паралакс ефекту на футері
export function parallaxFooterWave() {
  window.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("scroll", () => {
      const scrollPosition = window.pageYOffset;
      const footerWave = document.querySelector(".footer-wave");
      if (footerWave) {
        footerWave.style.transform = `translateY(${scrollPosition * 0.1}px)`;
      }
    });
  });
}
