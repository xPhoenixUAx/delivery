// Функція для ініціалізації анімацій та ефекту на прокрутку
export function initializeAboutPageAnimations() {
  const aboutContent = document.querySelector(".about-content");
  const statNumbers = document.querySelectorAll(".stat-number");
  const timelineItems = document.querySelectorAll(".timeline-item");

  // Анімація вмісту на сторінці "About" при прокручуванні
  const observerOptions = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);

        // Початок анімації лічильників, коли вміст видимий
        animateCounters();
      }
    });
  }, observerOptions);

  observer.observe(aboutContent);

  // Анімація лічильників
  function animateCounters() {
    statNumbers.forEach((counter) => {
      const target = +counter.getAttribute("data-target");
      const duration = 2000; // 2 секунди
      const step = target / (duration / 16); // 60 fps

      function updateCounter() {
        const current = +counter.innerText;
        if (current < target) {
          counter.innerText = Math.ceil(current + step);
          setTimeout(updateCounter, 16);
        } else {
          counter.innerText = target;
        }
      }

      updateCounter();
    });
  }

  // Анімація таймлайнів
  const timelineObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          timelineObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  timelineItems.forEach((item) => {
    timelineObserver.observe(item);
  });

  // Параллакс-ефект
  window.addEventListener("scroll", () => {
    const parallax = document.querySelector(".about-parallax");
    let scrollPosition = window.pageYOffset;
    parallax.style.backgroundPositionY = scrollPosition * 0.5 + "px";
  });
}
