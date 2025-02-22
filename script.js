// Мобільне меню
document.getElementById("menu-toggle").addEventListener("click", function () {
  document.querySelector(".mobile-nav").classList.toggle("active");
});

// Змінюємо фон хедера при скролі
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
