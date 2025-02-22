// Функція для ініціалізації форми та всіх взаємодій
export function initializeContactForm() {
  const form = document.getElementById("contactForm");
  const modal = document.getElementById("contactModal");
  const closeBtn = modal.querySelector(".close");
  const contactMessage = document.getElementById("contactMessage");

  // Обробка відправки форми
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Отримуємо дані форми
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Зазвичай тут можна відправити дані форми на сервер
    // Для прикладу, показуємо персоналізоване повідомлення у модальному вікні
    contactMessage.textContent = `Thank you, ${name}! Your message has been received. We'll get back to you at ${email} shortly.`;

    // Показуємо модальне вікно
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

// Ініціалізація функціональності контактної форми при повному завантаженні DOM
