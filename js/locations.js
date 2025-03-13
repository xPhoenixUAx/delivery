export function initLocationTiltEffect() {
  const locationItems = document.querySelectorAll(".location-item");

  locationItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.addEventListener("mousemove", handleTilt);
    });

    item.addEventListener("mouseleave", function () {
      this.removeEventListener("mousemove", handleTilt);
      this.style.transform = "";
      setTimeout(() => {
        this.style.transform = "translateY(0)";
      }, 100);
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

export function initLocationRippleEffect() {
  const button = document.querySelector(".btn-location-finder");

  if (button) {
    button.addEventListener("click", function (e) {
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

export function addLocationRippleStyle() {
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

export function initLocationAnimationOnScroll() {
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateLocationItems();
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const locationsList = document.querySelector(".locations-list");
  if (locationsList) {
    observer.observe(locationsList);
  }

  function animateLocationItems() {
    const locationItems = document.querySelectorAll(".location-item");

    locationItems.forEach((item, index) => {
      setTimeout(() => {
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
      }, index * 100);
    });
  }
}

export function initLocationCountHoverEffect() {
  const locationCounts = document.querySelectorAll(".location-count");

  locationCounts.forEach((count) => {
    count.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)";
    });

    count.addEventListener("mouseleave", function () {
      this.style.transform = "";
    });
  });
}

export function addPulseAnimationToLocationFinder() {
  const locationFinderBtn = document.querySelector(".btn-location-finder");

  if (locationFinderBtn) {
    // Add subtle pulse animation
    const pulseAnimation = `
      @keyframes pulse {
        0% {
          box-shadow: 0 0 0 0 rgba(13, 110, 253, 0.4);
        }
        70% {
          box-shadow: 0 0 0 10px rgba(13, 110, 253, 0);
        }
        100% {
          box-shadow: 0 0 0 0 rgba(13, 110, 253, 0);
        }
      }
    `;

    const style = document.createElement("style");
    style.textContent = pulseAnimation;
    document.head.appendChild(style);

    locationFinderBtn.style.animation = "pulse 2s infinite";
  }
}

export function initAllLocationEffects() {
  initLocationTiltEffect();
  initLocationRippleEffect();
  addLocationRippleStyle();
  initLocationAnimationOnScroll();
  initLocationCountHoverEffect();
  addPulseAnimationToLocationFinder();
}
