export function initStatsHoverEffect() {
  const statItems = document.querySelectorAll(".stat-item");

  statItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      const number = this.querySelector(".stat-number");
      number.style.transform = "scale(1.1)";

      // Add 3D tilt effect
      this.addEventListener("mousemove", handleTilt);
    });

    item.addEventListener("mouseleave", function () {
      const number = this.querySelector(".stat-number");
      number.style.transform = "";

      // Remove tilt effect
      this.removeEventListener("mousemove", handleTilt);
      this.style.transform = "";
    });
  });

  function handleTilt(e) {
    const card = this;
    const cardRect = card.getBoundingClientRect();
    const x = e.clientX - cardRect.left;
    const y = e.clientY - cardRect.top;

    const centerX = cardRect.width / 2;
    const centerY = cardRect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
  }
}

export function initCTARippleEffect() {
  const ctaButton = document.querySelector(".btn-contact");

  if (ctaButton) {
    ctaButton.addEventListener("click", function (e) {
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
  }
}

export function addRippleStyle() {
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

export function initStatsAnimationOnScroll() {
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateStats();
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const statsSection = document.querySelector(".about-stats");
  if (statsSection) {
    observer.observe(statsSection);
  }

  function animateStats() {
    const statItems = document.querySelectorAll(".stat-item");

    statItems.forEach((item, index) => {
      setTimeout(() => {
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
      }, index * 200);
    });
  }
}

export function initCoreValuesHoverEffect() {
  const valueItems = document.querySelectorAll(".about-values li");

  valueItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)";
    });

    item.addEventListener("mouseleave", function () {
      this.style.transform = "";
    });
  });
}

export function initAllEffects() {
  initStatsHoverEffect();
  initCTARippleEffect();
  addRippleStyle();
  initStatsAnimationOnScroll();
  initCoreValuesHoverEffect();
}
