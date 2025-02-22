export function initServices() {
  const serviceCards = document.querySelectorAll(".service-card");

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  serviceCards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(card);
  });

  // Subtle hover effect for service icons
  serviceCards.forEach((card) => {
    const icon = card.querySelector(".service-icon");
    card.addEventListener("mouseenter", () => {
      icon.style.transform = "scale(1.1)";
      icon.style.transition = "transform 0.3s ease";
    });
    card.addEventListener("mouseleave", () => {
      icon.style.transform = "scale(1)";
    });
  });
}

// Call the function when the page loads
