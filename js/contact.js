// Функція для ініціалізації форми та всіх взаємодій
export function initializeContactForm() {
  const form = document.getElementById("contactForm");
  const modal = document.getElementById("successModal");
  const closeBtn = document.querySelector(".close");

  // Обробка відправки форми
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Зазвичай тут можна відправити дані форми на сервер
    // Для прикладу, просто показуємо модальне вікно успіху
    modal.style.display = "block";

    // Скидаємо значення полів форми
    form.reset();
  });

  // Закриття модального вікна
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Закриття модального вікна при кліку поза ним
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Налаштування для кастомних селектів
  const selects = document.querySelectorAll(".custom-select select");
  selects.forEach((select) => {
    select.addEventListener("change", function () {
      if (this.value) {
        this.style.color = "#333";
      } else {
        this.style.color = "#999";
      }
    });
  });

  // Анімація для плаваючої підпису
  const formInputs = document.querySelectorAll(
    ".form-group input, .form-group textarea"
  );
  formInputs.forEach((input) => {
    input.addEventListener("focus", () => {
      input.parentElement.classList.add("focused");
    });
    input.addEventListener("blur", () => {
      if (!input.value) {
        input.parentElement.classList.remove("focused");
      }
    });
  });
}
