import { initHeader } from "./js/header.js";
import { initHero } from "./js/hero.js";
import { initServices } from "./js/services.js";
import { initCatalog } from "./js/catalog.js";
import { initTracking } from "./js/tracking.js";
// Виклик функції після завантаження DOM
document.addEventListener("DOMContentLoaded", () => {
  // Викликаємо ініціалізацію мобільного меню після завантаження частин
  setTimeout(() => {
    initHeader();
    initHero();
    initCatalog();
    initTracking();
    // initServices();
  }, 200); // Затримка на 200мс для гарантії завантаження HTML
});
