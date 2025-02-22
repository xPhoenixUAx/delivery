import { initHeader } from "./js/header.js";
import { initHero } from "./js/hero.js";
import { initCatalog } from "./js/catalog.js";
import { initTracking } from "./js/tracking.js";
import { initializeContactForm } from "./js/contact.js";
import { initFooter } from "./js/footer.js";
import { initCookieConsent } from "./js/cookie.js";

// Виклик функції після завантаження DOM
document.addEventListener("DOMContentLoaded", () => {
  // Викликаємо ініціалізацію мобільного меню після завантаження частин
  setTimeout(() => {
    initHeader();
    initHero();
    initCatalog();
    initTracking();
    initializeContactForm();
    initFooter();
    initCookieConsent();
  }, 200); // Затримка на 200мс для гарантії завантаження HTML
});
