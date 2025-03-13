export function initCatalog() {
  const filterButtons = document.querySelectorAll(".filter-button");
  const catalogCards = document.querySelectorAll(".catalog-card");

  // Filter functionality
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      // Filter items
      const filter = this.getAttribute("data-filter");

      catalogCards.forEach((card) => {
        if (filter === "all" || card.classList.contains(filter)) {
          card.classList.remove("hidden");
          // Add staggered animation
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, Array.from(catalogCards).indexOf(card) * 100);
        } else {
          card.classList.add("hidden");
          card.style.opacity = "0";
          card.style.transform = "translateY(20px)";
        }
      });
    });
  });

  // Enhanced hover effects
  catalogCards.forEach((card) => {
    // Create ripple effect on button click
    const quoteButton = card.querySelector(".quote-button");

    quoteButton.addEventListener("click", function (e) {
      const x = e.clientX - e.target.getBoundingClientRect().left;
      const y = e.clientY - e.target.getBoundingClientRect().top;

      const ripple = document.createElement("span");
      ripple.classList.add("ripple");
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });

    // Add tilt effect on mouse move
    card.addEventListener("mousemove", function (e) {
      const cardRect = this.getBoundingClientRect();
      const x = e.clientX - cardRect.left;
      const y = e.clientY - cardRect.top;

      const centerX = cardRect.width / 2;
      const centerY = cardRect.height / 2;

      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px)`;
    });

    // Reset transform on mouse leave
    card.addEventListener("mouseleave", function () {
      this.style.transform = "";
      setTimeout(() => {
        this.style.transform = "translateY(0)";
      }, 100);
    });
  });

  // Add ripple style dynamically
  const style = document.createElement("style");
  style.textContent = `
    .ripple {
      position: absolute;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 0.6s linear;
      pointer-events: none;
    }
    
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}
